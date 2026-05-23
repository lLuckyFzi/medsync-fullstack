import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, password } = body;

        if (!email || !password) {
            return NextResponse.json(
                { success: false, message: 'Email dan password wajib diisi!' },
                { status: 400 }
            );
        }

        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return NextResponse.json(
                { success: false, message: 'Email atau password salah!' },
                { status: 401 }
            );
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json(
                { success: false, message: 'Email atau password salah!' },
                { status: 401 }
            );
        }

        const responseBody = {
            success: true,
            message: 'Login berhasil!',
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
            token: "medsync_crypto_token_secure_enterprise"
        };

        const response = NextResponse.json(responseBody, { status: 200 });

        response.headers.set(
            'Set-Cookie',
            `medsync_session=session_id_user_99; Path=/; HttpOnly; Max-Age=3600; SameSite=Strict`
        );

        return response;

    } catch (error) {
        console.error('Login Error:', error);
        return NextResponse.json(
            { success: false, message: 'Terjadi kesalahan pada server.' },
            { status: 500 }
        );
    }
}