export interface LoginPayload {
    email: string;
    password: string;
}

export interface RegisterPayload extends LoginPayload {
    name: string;
}

export interface AuthResponse {
    success: boolean;
    message: string;
    user?: {
        id: number;
        name: string;
        email: string;
        role: string;
    };
    token?: string;
}