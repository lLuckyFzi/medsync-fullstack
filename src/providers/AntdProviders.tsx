'use client';

import { ConfigProvider, App } from 'antd';

export default function AntdProvider({ children }: { children: React.ReactNode }) {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#14b8a6',
                    colorLink: '#14b8a6',
                    borderRadius: 10,
                    colorBgContainer: '#ffffff',
                },
                components: {
                    Button: {
                        controlHeightLG: 48,
                    },
                    Input: {
                        controlHeightLG: 48,
                    },
                },
            }}
        >
            <App>
                {children}
            </App>
        </ConfigProvider>
    );
}