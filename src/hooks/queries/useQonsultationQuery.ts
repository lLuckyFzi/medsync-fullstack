import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useConsultations = () => {
  return useQuery({
    queryKey: ['consultations'],
    queryFn: async () => {
      const res = await axios.get('/api/consultations');
      return res.data.data;
    },
  });
};