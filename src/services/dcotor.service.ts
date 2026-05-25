import { ApiResponse } from '@/types/common.type';
import { Doctor } from '@/types/doctor.type';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
});

export const doctorService = {
  getAllDoctors: async (): Promise<Doctor[]> => {
    const response = await apiClient.get<ApiResponse<Doctor[]>>('/doctors');
    return response.data.data;
  },
};