import axios from 'axios';
import { LoginPayload, RegisterPayload, AuthResponse } from '@/types/auth';

const apiClient = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const authService = {
    login: async (payload: LoginPayload): Promise<AuthResponse> => {
        const response = await apiClient.post<AuthResponse>('/auth/login', payload);
        return response.data;
    },

    register: async (payload: RegisterPayload): Promise<AuthResponse> => {
        const response = await apiClient.post<AuthResponse>('/auth/register', payload);
        return response.data;
    },
};