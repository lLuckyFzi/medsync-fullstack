import axios from 'axios';
import { CheckoutPayload, CheckoutResponse } from '@/types/checkout.type';

export const checkoutService = {
  createBooking: async (payload: CheckoutPayload): Promise<CheckoutResponse> => {
    const response = await axios.post<CheckoutResponse>('/api/checkout', payload, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  },
};