import { useMutation } from '@tanstack/react-query';
import { LoginPayload, RegisterPayload, AuthResponse } from '@/types/auth';
import { App } from 'antd';
import { useRouter } from 'next/navigation';
import { authService } from '@/services/auth.service';

export const useLogin = () => {
    const router = useRouter();
    const { message } = App.useApp();

    return useMutation<AuthResponse, Error, LoginPayload>({
        mutationFn: authService.login,
        onSuccess: (data) => {
            message.success(data.message || 'Berhasil masuk!');
            router.push('/dashboard');
        },
        onError: (error: any) => {
            const errorMsg = error.response?.data?.message || 'Gagal melakukan login. Periksa kembali kredensial Anda.';
            message.error(errorMsg);
        },
    });
};

export const useRegister = () => {
    const router = useRouter();
    const { message } = App.useApp();

    return useMutation<AuthResponse, Error, RegisterPayload>({
        mutationFn: authService.register,
        onSuccess: (data) => {
            message.success(data.message || 'Akun berhasil dibuat! Silakan login.');
            router.push('/login');
        },
        onError: (error: any) => {
            const errorMsg = error.response?.data?.message || 'Pendaftaran gagal. Email mungkin sudah terdaftar.';
            message.error(errorMsg);
        },
    });
};