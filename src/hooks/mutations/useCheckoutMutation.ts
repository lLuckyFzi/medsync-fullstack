import { useMutation, useQueryClient } from '@tanstack/react-query';
import { checkoutService } from '@/services/checkout.service';
import { App } from 'antd';
import { CheckoutPayload, CheckoutResponse } from '@/types/checkout.type';

export const useCheckout = (onSuccessCallback: () => void) => {
  const { message } = App.useApp();
  const queryClient = useQueryClient();

  return useMutation<CheckoutResponse, Error, CheckoutPayload>({
    mutationFn: checkoutService.createBooking,
    onSuccess: (data) => {
      message.success(data.message || 'Booking berhasil dibuat!');
      
      queryClient.invalidateQueries({ queryKey: ['consultations'] });
      
      onSuccessCallback();
    },
    onError: (error: any) => {
      const errorMsg = error.response?.data?.message || 'Terjadi kesalahan saat memproses booking.';
      message.error(errorMsg);
    },
  });
};