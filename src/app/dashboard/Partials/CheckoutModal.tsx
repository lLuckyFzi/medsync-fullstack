'use client';

import { Modal, Button, Avatar, Divider } from 'antd';
import { 
  CalendarOutlined, 
  ClockCircleOutlined, 
  SafetyCertificateFilled 
} from '@ant-design/icons';
import { Doctor } from '@/types/doctor.type';
import { useBooking } from '@/providers/BookingProvider';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctor: Doctor | null;
  onConfirm: () => void;
  isLoading?: boolean;
}

export default function CheckoutModal({ 
  isOpen, 
  onClose, 
  doctor, 
  onConfirm,
  isLoading = false 
}: CheckoutModalProps) {
    const { selectedDate } = useBooking()
  
  if (!doctor) return null;

  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(doctor.pricePerHour);

  const formattedBookingDate = selectedDate.toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      centered
      closeIcon={false}
      width={400}
      className="custom-checkout-modal p-0 rounded-4xl overflow-hidden border border-slate-100 shadow-[0_20px_60px_rgb(0,0,0,0.08)]"
      styles={{ body: { padding: 0 } }}
    >
      <div className="bg-teal-600 p-6 text-center relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-teal-400 rounded-full mix-blend-screen filter blur-[30px] opacity-50"></div>
        
        <h3 className="text-white font-bold text-xl relative z-10">Konfirmasi Booking</h3>
        <p className="text-teal-100 text-sm mt-1 relative z-10">Tinjau kembali detail janji temu Anda.</p>
      </div>

      <div className="p-8 bg-white">
        <div className="flex items-center gap-4 mb-6">
          <Avatar 
            size={56} 
            src={`https://api.dicebear.com/7.x/notionists/svg?seed=${doctor.name}&backgroundColor=f1f5f9`}
            className="border-2 border-slate-100"
          />
          <div>
            <h4 className="font-bold text-slate-800 text-lg">{doctor.name}</h4>
            <p className="text-teal-600 font-semibold text-sm">{doctor.specialization}</p>
          </div>
        </div>

        <div className="bg-slate-50 rounded-2xl p-4 flex flex-col gap-3 border border-slate-100 mb-6">
          <div className="flex items-center gap-3 text-slate-600 text-sm font-medium">
            <CalendarOutlined className="text-teal-500! text-base!" />
            <span className="text-slate-700 font-semibold">{formattedBookingDate}</span>
          </div>
          <div className="flex items-center gap-3 text-slate-600 text-sm font-medium">
            <ClockCircleOutlined className="text-teal-500! text-base!" />
            <span>19:00 - 20:00 WIB</span>
          </div>
        </div>

        <Divider dashed className="border-slate-200 my-6" />

        <div className="flex justify-between items-center mb-2">
          <span className="text-slate-500 font-medium">Biaya Konsultasi</span>
          <span className="text-slate-700 font-semibold">{formattedPrice}</span>
        </div>
        <div className="flex justify-between items-center mb-6">
          <span className="text-slate-500 font-medium">Biaya Admin</span>
          <span className="text-emerald-500 font-semibold">Gratis</span>
        </div>

        <div className="flex justify-between items-end bg-teal-50 p-4 rounded-2xl border border-teal-100 mb-8">
          <span className="text-teal-800 font-bold">Total Bayar</span>
          <span className="text-teal-700 font-extrabold text-2xl">{formattedPrice}</span>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-medium mb-6">
          <SafetyCertificateFilled className="text-slate-300!" />
          <span>Transaksi aman & terenkripsi</span>
        </div>

        <div className="flex gap-3">
          <Button 
            onClick={onClose}
            className="flex-1 h-12! rounded-xl! font-semibold! text-slate-500! hover:text-slate-700! hover:bg-slate-50! border-slate-200!"
          >
            Batal
          </Button>
          <Button 
            type="primary" 
            onClick={onConfirm}
            loading={isLoading}
            className="flex-1 h-12! bg-teal-600! hover:bg-teal-700! border-none! rounded-xl! font-semibold! text-base!"
          >
            Konfirmasi
          </Button>
        </div>
      </div>
    </Modal>
  );
}