import { doctorService } from '@/services/dcotor.service';
import { useQuery } from '@tanstack/react-query';

export const useDoctors = () => {
  return useQuery({
    queryKey: ['doctors'],
    queryFn: doctorService.getAllDoctors,
  });
};