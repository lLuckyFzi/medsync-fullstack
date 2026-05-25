export interface CheckoutPayload {
  userId: number;
  doctorId: number;
  totalPrice: number;
  bookingDate: string;
}

export interface CheckoutResponse {
  success: boolean;
  message: string;
  data?: {
    id: number;
    userId: number;
    doctorId: number;
    totalPrice: number;
    bookingDate: string;
  };
}