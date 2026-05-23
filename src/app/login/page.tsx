'use client';

import LoginForm from './Partials/LoginForm';
import {
    SafetyCertificateFilled,
    HeartFilled,
    CheckCircleFilled
} from '@ant-design/icons';

export default function LoginPage() {
    return (
        <div className="min-h-screen flex bg-white">
            <div className="hidden lg:flex lg:w-1/2 relative bg-slate-50 items-center justify-center p-12 overflow-hidden">

                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                    <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-teal-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-70"></div>
                    <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-60"></div>
                </div>

                <div className="z-10 w-full max-w-lg">
                    <div className="flex items-center gap-3 mb-12">
                        <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-600/20">
                            <SafetyCertificateFilled className="!text-white !text-2xl" />
                        </div>
                        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">MedSync.</h1>
                    </div>

                    <h2 className="text-5xl font-bold text-slate-900 leading-[1.15] mb-6 tracking-tight">
                        Take World's Best <br />
                        <span className="text-teal-600 relative">
                            Quality Treatment
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-teal-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                            </svg>
                        </span>
                    </h2>

                    <p className="text-slate-500 text-lg leading-relaxed mb-14 max-w-md font-medium">
                        Membangun masa depan layanan kesehatan digital yang aman, efisien, dan berpusat pada pasien secara objektif dan transparan.
                    </p>

                    <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-[0_20px_50px_rgb(0,0,0,0.05)] border border-white flex flex-col gap-5 max-w-sm transform transition hover:-translate-y-1 duration-300">
                        <div className="flex items-center gap-5">
                            <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center">
                                <HeartFilled className="!text-teal-500 !text-3xl" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-extrabold text-slate-800">900K+</h3>
                                <p className="text-slate-500 font-medium text-sm mt-1">Join Our Happy Customers</p>
                            </div>
                        </div>

                        <div className="h-px w-full bg-slate-100"></div>

                        <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                            <CheckCircleFilled className="!text-teal-500" />
                            <span>Sertifikasi Keamanan Data Medis Standar Global</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-24 bg-white relative z-10 shadow-[-20px_0_40px_rgb(0,0,0,0.02)]">
                <LoginForm />
            </div>
        </div>
    );
}