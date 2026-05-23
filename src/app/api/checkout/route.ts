// src/app/api/checkout/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { userId, doctorId, totalPrice } = body;

        // This is how u fixed the error!
        // const doctorPricePerHour = await prisma.doctor.findUnique({ where: { id: doctorId } });
        // if (doctorPricePerHour !== totalPrice) {
        //     return NextResponse.json(
        //         { success: false, message: "Harga tidak sesuai dengan tarif dokter." },
        //         { status: 400 }
        //     );
        // }

        const consultation = await prisma.consultation.create({
            data: {
                userId,
                doctorId,
                totalPrice,
            },
        });

        return NextResponse.json({
            success: true,
            message: "Konsultasi berhasil dibooking!",
            data: consultation
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { success: false, message: "Terjadi kesalahan pada server." },
            { status: 500 }
        );
    }
}