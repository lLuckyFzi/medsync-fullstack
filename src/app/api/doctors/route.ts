import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const doctors = await prisma.doctor.findMany({
      orderBy: { id: 'asc' },
    });

    return NextResponse.json({
      success: true,
      message: 'Berhasil mengambil data dokter',
      data: doctors,
    });
  } catch (error) {
    console.error('Fetch Doctors Error:', error);
    return NextResponse.json(
      { success: false, message: 'Terjadi kesalahan pada server.' },
      { status: 500 }
    );
  }
}