import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, password } = body;

        if (!name || !email || !password) {
            return NextResponse.json(
                { success: false, message: 'Semua field wajib diisi!' },
                { status: 400 }
            );
        }

        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return NextResponse.json(
                { success: false, message: 'Email sudah terdaftar!' },
                { status: 400 }
            );
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: 'patient',
            },
        });

        return NextResponse.json(
            {
                success: true,
                message: 'Registrasi akun berhasil!',
                user: {
                    id: newUser.id,
                    name: newUser.name,
                    email: newUser.email,
                    role: newUser.role,
                },
            },
            { status: 211 }
        );

    } catch (error) {
        console.error('Register Error:', error);
        return NextResponse.json(
            { success: false, message: 'Terjadi kesalahan pada server.' },
            { status: 500 }
        );
    }
}