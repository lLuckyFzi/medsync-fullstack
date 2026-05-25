// src/app/dashboard/Partials/ConsultationTable.tsx
'use client';

import { useConsultations } from '@/hooks/queries/useQonsultationQuery';
import { Table, Tag } from 'antd';

export default function ConsultationTable() {
  const { data: consultations, isLoading } = useConsultations();

  const columns = [
    {
      title: 'Appointment ID',
      dataIndex: 'id',
      key: 'id',
      render: (id: number) => <span className="text-slate-500 font-semibold">#MS-{id}</span>,
    },
    {
      title: 'Doctor Name',
      dataIndex: ['doctor', 'name'],
      key: 'doctorName',
      render: (text: string) => <span className="text-slate-800 font-bold">{text}</span>,
    },
    {
      title: 'Specialization',
      dataIndex: ['doctor', 'specialization'],
      key: 'specialization',
      render: (text: string) => <Tag color="teal">{text}</Tag>,
    },
    {
      title: 'Booking Date',
      dataIndex: 'bookingDate',
      key: 'bookingDate',
      render: (date: string) => (
        <span className="text-slate-600 font-medium">
          {new Date(date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
        </span>
      ),
    },
    {
      title: 'Price Paid',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
      render: (price: number) => {
        const formatted = new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0,
        }).format(price);
        
        const isHacked = price < 50000;
        return (
          <span className={`font-extrabold text-base ${isHacked ? 'text-red-500! animate-pulse' : 'text-slate-800!'}`}>
            {formatted} {isHacked && '(Exploited)'}
          </span>
        );
      },
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm mt-10">
      <h3 className="text-xl font-bold text-slate-800 mb-4">Your Consultation History</h3>
      <Table 
        dataSource={consultations} 
        columns={columns} 
        rowKey="id" 
        loading={isLoading}
        pagination={{ pageSize: 5 }}
        className="custom-table"
      />
    </div>
  );
}