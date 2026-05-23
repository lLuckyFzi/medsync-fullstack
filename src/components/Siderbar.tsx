'use client';

import {
    AppstoreFilled,
    UserOutlined,
    FileTextOutlined,
    CalendarOutlined,
    MessageOutlined,
    SettingOutlined,
    LogoutOutlined,
    ArrowRightOutlined,
    CheckCircleFilled,
    ClockCircleFilled
} from '@ant-design/icons';
import { Avatar } from 'antd';
import Link from 'next/link';
import MiniCalendar from './MiniCalendar';

export default function Sidebar() {
    return (
        <aside className="w-[340px] bg-slate-900 rounded-[2.5rem] flex flex-col p-6 shadow-2xl shadow-slate-900/20 text-white relative h-[calc(100vh-2rem)] overflow-hidden">

            <div className="flex gap-6 h-full">
                <div className="flex flex-col items-center gap-8 w-12 pt-2">
                    <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/30 mb-4 cursor-pointer hover:bg-teal-400 transition-colors">
                        <AppstoreFilled className="text-white! text-xl!" />
                    </div>

                    <div className="flex flex-col gap-6 w-full">
                        <Link href="/dashboard" className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-teal-400 transition-colors shadow-inner">
                            <AppstoreFilled className="text-xl!" />
                        </Link>
                        <Link href="#" className="w-12 h-12 rounded-xl flex items-center justify-center text-slate-500 hover:text-slate-200 hover:bg-slate-800 transition-colors">
                            <UserOutlined className="text-xl!" />
                        </Link>
                        <Link href="#" className="w-12 h-12 rounded-xl flex items-center justify-center text-slate-500 hover:text-slate-200 hover:bg-slate-800 transition-colors">
                            <FileTextOutlined className="text-xl!" />
                        </Link>
                        <Link href="#" className="w-12 h-12 rounded-xl flex items-center justify-center text-slate-500 hover:text-slate-200 hover:bg-slate-800 transition-colors">
                            <CalendarOutlined className="text-xl!" />
                        </Link>
                        <Link href="#" className="w-12 h-12 rounded-xl flex items-center justify-center text-slate-500 hover:text-slate-200 hover:bg-slate-800 transition-colors">
                            <MessageOutlined className="text-xl!" />
                        </Link>
                    </div>

                    <div className="mt-auto flex flex-col gap-4">
                        <Link href="#" className="w-12 h-12 rounded-xl flex items-center justify-center text-slate-500 hover:text-slate-200 hover:bg-slate-800 transition-colors">
                            <SettingOutlined className="text-xl!" />
                        </Link>
                        <Link href="/login" className="w-12 h-12 rounded-xl flex items-center justify-center text-slate-500 hover:text-red-400 hover:bg-slate-800 transition-colors">
                            <LogoutOutlined className="text-xl!" />
                        </Link>
                    </div>
                </div>

                <div className="flex-1 flex flex-col pt-2 pb-4">

                    <MiniCalendar />

                    <div className="flex justify-between items-center mb-6 px-1">
                        <h3 className="text-slate-300 font-medium text-sm">
                            <span className="text-white text-lg font-bold mr-2">2</span> Consultations
                        </h3>
                        <button className="text-teal-500 hover:text-teal-400 text-sm font-medium transition-colors">
                            View All <ArrowRightOutlined className="text-xs! ml-1!" />
                        </button>
                    </div>

                    <div className="flex flex-col gap-5 overflow-y-auto pr-2 custom-scrollbar">
                        <div className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-2xl border border-slate-700/50 hover:bg-slate-800 transition-colors cursor-pointer">
                            <Avatar size={42} className="bg-slate-700 text-teal-400 font-bold">DT</Avatar>
                            <div className="flex-1">
                                <h4 className="font-semibold text-sm text-white">Dr. Tirta</h4>
                                <p className="text-xs text-slate-400">Pulmonologist</p>
                            </div>
                            <div className="text-right">
                                <CheckCircleFilled className="text-teal-500! text-sm! mb-1 block ml-auto" />
                                <span className="text-xs text-slate-400 font-medium">10:30</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-2xl border border-slate-700/50 hover:bg-slate-800 transition-colors cursor-pointer">
                            <Avatar size={42} className="bg-slate-700 text-blue-400 font-bold">FA</Avatar>
                            <div className="flex-1">
                                <h4 className="font-semibold text-sm text-white">Dr. Faisal</h4>
                                <p className="text-xs text-slate-400">Cardiologist</p>
                            </div>
                            <div className="text-right">
                                <ClockCircleFilled className="text-amber-500! text-sm! mb-1 block ml-auto" />
                                <span className="text-xs text-slate-400 font-medium">14:00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}