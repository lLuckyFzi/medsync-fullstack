'use client';

import { useState } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useBooking } from '@/providers/BookingProvider';

export default function MiniCalendar() {
    const { selectedDate, setSelectedDate } = useBooking();

    const [viewDate, setViewDate] = useState(new Date());

    const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    const today = new Date();

    const prevMonth = () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
    const nextMonth = () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));

    const daysInMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1).getDay();

    const daysArray = Array.from({ length: firstDayOfMonth + daysInMonth }, (_, i) => {
        if (i < firstDayOfMonth) return null;
        return i - firstDayOfMonth + 1;
    });

    const monthName = viewDate.toLocaleString('en-US', { month: 'long', year: 'numeric' });

    const handleDateClick = (day: number) => {
        const newSelectedDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
        setSelectedDate(newSelectedDate);
    };

    return (
        <div className="bg-white text-slate-800 rounded-3xl p-5 mb-8 shadow-lg">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-sm text-slate-700">{monthName}</h3>
                <div className="flex gap-2">
                    <button
                        onClick={prevMonth}
                        className="w-7 h-7 bg-slate-50 rounded-full flex items-center justify-center hover:bg-teal-50 text-slate-400 hover:text-teal-600 transition-colors"
                    >
                        <LeftOutlined className="text-xs!" />
                    </button>
                    <button
                        onClick={nextMonth}
                        className="w-7 h-7 bg-slate-50 rounded-full flex items-center justify-center hover:bg-teal-50 text-slate-400 hover:text-teal-600 transition-colors"
                    >
                        <RightOutlined className="text-xs!" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold text-slate-400 mb-3">
                {daysOfWeek.map((day) => (
                    <div key={day}>{day}</div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-y-2 gap-x-1 text-center text-sm font-medium">
                {daysArray.map((day, index) => {
                    if (!day) return <div key={index} className="text-transparent">0</div>;

                    const isToday =
                        day === today.getDate() &&
                        viewDate.getMonth() === today.getMonth() &&
                        viewDate.getFullYear() === today.getFullYear();

                    const isSelected =
                        day === selectedDate.getDate() &&
                        viewDate.getMonth() === selectedDate.getMonth() &&
                        viewDate.getFullYear() === selectedDate.getFullYear();

                    let dayStyle = "flex items-center justify-center w-7 h-7 mx-auto rounded-lg cursor-pointer transition-all ";
                    
                    if (isSelected) {
                        dayStyle += "bg-teal-500 text-white shadow-md shadow-teal-500/40 font-bold";
                    } else if (isToday) {
                        dayStyle += "bg-teal-50 text-teal-600 font-bold ring-1 ring-teal-200"; // Indikator hari ini (Garis Luar)
                    } else {
                        dayStyle += "text-slate-600 hover:bg-slate-100";
                    }

                    return (
                        <div
                            key={index}
                            onClick={() => handleDateClick(day)}
                            className={dayStyle}
                        >
                            {day}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}