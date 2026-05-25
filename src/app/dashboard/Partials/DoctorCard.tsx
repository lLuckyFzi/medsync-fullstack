'use client';

import { Avatar, Button } from 'antd';
import { StarFilled, ClockCircleOutlined } from '@ant-design/icons';
import { Doctor } from '@/types/doctor.type';

interface DoctorCardProps {
  doctor: Doctor;
  onBook: (doctor: Doctor) => void;
}

export default function DoctorCard({ doctor, onBook }: DoctorCardProps) {
  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(doctor.pricePerHour);

  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-5 hover:shadow-[0_15px_40px_rgb(0,0,0,0.06)] transition-all duration-300 group flex flex-col h-full">
      
      <div className="flex gap-4 items-start mb-4">
        <Avatar 
          size={64} 
          src={`https://api.dicebear.com/7.x/notionists/svg?seed=${doctor.name}&backgroundColor=f1f5f9`}
          className="border border-slate-200"
        />
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-slate-800 text-lg group-hover:text-teal-600 transition-colors">
              {doctor.name}
            </h3>
            <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-md">
              <StarFilled className="text-amber-400! text-xs!" />
              <span className="text-xs font-bold text-amber-600">4.9</span>
            </div>
          </div>
          <p className="text-teal-600 text-sm font-semibold">{doctor.specialization}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-6 bg-slate-50 p-2 rounded-lg">
        <ClockCircleOutlined className="text-slate-400!" />
        <span>Tersedia Hari Ini: 10:00 - 15:00</span>
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
        <div>
          <p className="text-xs text-slate-400 font-medium mb-1">Consultation Fee</p>
          <p className="font-extrabold text-slate-800 text-lg">{formattedPrice}</p>
        </div>
        <Button 
          type="primary" 
          onClick={() => onBook(doctor)}
          className="bg-teal-600! hover:bg-teal-700! border-none! rounded-xl! font-semibold! px-6! h-10!"
        >
          Book Now
        </Button>
      </div>
    </div>
  );
}