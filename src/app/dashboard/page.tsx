'use client';

import { useDoctors } from '@/hooks/queries/useDoctorQuery';
import DoctorCard from './Partials/DoctorCard';
import { Skeleton, Alert, message } from 'antd';
import { Doctor } from '@/types/doctor.type';
import { useState } from 'react';
import CheckoutModal from './Partials/CheckoutModal';
import { useBooking } from '@/providers/BookingProvider';
import { useCheckout } from '@/hooks/mutations/useCheckoutMutation';
import ConsultationTable from './Partials/ConsultationTable';
import { useAuth } from '@/providers/AuthProvider';

export default function DashboardPage() {
  const { user } = useAuth();
  const { selectedDate } = useBooking();

  const { data: doctors, isLoading, isError } = useDoctors();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const { mutate: executeCheckout, isPending: isCheckoutLoading } = useCheckout(() => {
    setIsModalOpen(false);
    setSelectedDoctor(null);
  });

  const handleBookClick = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedDoctor(null), 300);
  };

  const handleConfirmBooking = () => {
    if (!selectedDoctor || !user) return;

    executeCheckout({
      userId: user.id,
      doctorId: selectedDoctor.id,
      totalPrice: selectedDoctor.pricePerHour, 
      bookingDate: selectedDate.toISOString(), 
    });
  };

  if (isError) {
    return <Alert message="Gagal memuat data dokter. Pastikan server database menyala." type="error" showIcon />;
  }

  return (
    <div className="flex flex-col h-full">
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Top Specialists</h2>
          <p className="text-slate-500 text-sm mt-1">Book an appointment with our trusted doctors.</p>
        </div>
        <a href="#" className="text-teal-600 font-semibold hover:text-teal-700 text-sm">View All Specialists</a>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => <Skeleton key={n} active avatar paragraph={{ rows: 3 }} className="p-5 border rounded-2xl" />)}
        </div>
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-6">
          {doctors?.map((doctor) => (
            <DoctorCard 
              key={doctor.id} 
              doctor={doctor} 
              onBook={handleBookClick} 
            />
          ))}
        </div>
      )}

      <ConsultationTable />

      <CheckoutModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        doctor={selectedDoctor}
        onConfirm={handleConfirmBooking}
      />
    </div>
  );
}