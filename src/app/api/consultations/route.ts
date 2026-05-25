// src/app/api/consultations/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const consultations = await prisma.consultation.findMany({
      include: {
        doctor: true,
      },
      orderBy: {
        id: 'desc',
      },
    });

    return NextResponse.json({
      success: true,
      data: consultations,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: 'Server Error' }, { status: 500 });
  }
}