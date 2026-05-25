'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface BookingContextType {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  return (
    <BookingContext.Provider value={{ selectedDate, setSelectedDate }}>
      {children}
    </BookingContext.Provider>
  );
}

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) throw new Error('useBooking harus digunakan di dalam BookingProvider');
  return context;
};