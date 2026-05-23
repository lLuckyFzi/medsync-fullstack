// src/app/page.tsx
'use client';
import { useState } from 'react';

export default function MedSyncCheckout() {
  const [status, setStatus] = useState('');

  const handleBooking = async () => {
    setStatus('Memproses transaksi...');

    const payload = {
      userId: 1,
      doctorId: 1,
      totalPrice: 250000
    };

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (data.success) {
        setStatus(`Sukses! Anda berhasil booking dengan total bayar: Rp ${data.data.totalPrice}`);
      }
    } catch (error) {
      setStatus('Gagal melakukan request.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-2xl font-bold text-gray-800 border-b pb-4">MedSync Portal</h1>

        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-700">Dr. Tirta (Spesialis Paru)</h2>
          <p className="text-gray-500 mt-1">Jadwal: 19:00 - 20:00 WIB</p>
          <p className="text-xl font-bold text-emerald-600 mt-4">Rp 250.000</p>
        </div>

        <button
          onClick={handleBooking}
          className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all"
        >
          Konfirmasi Booking
        </button>

        {status && (
          <div className="mt-6 p-4 bg-gray-100 text-gray-700 rounded-lg text-sm text-center font-medium">
            {status}
          </div>
        )}
      </div>
    </div>
  );
}