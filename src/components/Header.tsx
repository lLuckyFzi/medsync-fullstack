'use client';

import { Input, Badge, Avatar } from 'antd';
import { SearchOutlined, BellFilled } from '@ant-design/icons';

export default function Header() {
    return (
        <header className="w-full flex items-center justify-between mb-4">
            <div>
                <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
                    Hello, Patient!
                </h1>
                <p className="text-slate-500 mt-1 text-sm font-medium">
                    Here is your daily health overview and schedule.
                </p>
            </div>

            <div className="flex items-center gap-6">
                <div className="w-64">
                    <Input
                        placeholder="Search doctors, records..."
                        prefix={<SearchOutlined className="text-slate-400! mr-2!" />}
                        className="rounded-full! border-none! bg-white shadow-sm! h-11!"
                    />
                </div>

                <Badge dot color="#14b8a6" offset={[-2, 4]}>
                    <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-sm cursor-pointer hover:bg-slate-50 transition-colors text-slate-500 hover:text-teal-600">
                        <BellFilled className="text-lg!" />
                    </div>
                </Badge>

                <div className="flex items-center gap-3 pl-4 border-l border-slate-200 cursor-pointer group">
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-bold text-slate-700 group-hover:text-teal-600 transition-colors">Lucky Fauzi</p>
                        <p className="text-xs text-slate-400 font-medium">Patient</p>
                    </div>
                    <Avatar
                        size={44}
                        src="https://api.dicebear.com/7.x/notionists/svg?seed=Lucky&backgroundColor=14b8a6"
                        className="border-2 border-white shadow-sm"
                    />
                </div>
            </div>
        </header>
    );
}