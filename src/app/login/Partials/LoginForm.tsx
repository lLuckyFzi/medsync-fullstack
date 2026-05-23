'use client';

import { Form, Input, Button, Checkbox, Typography, message } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useLogin } from '@/hooks/mutations/useAuthMutation';
import { LoginPayload } from '@/types/auth';

const { Title, Text } = Typography;

export default function LoginForm() {
  const [form] = Form.useForm();

  const { mutate: login, isPending } = useLogin();

  const onFinish = (values: LoginPayload) => {
    login(values);
  };

  return (
    <div className="w-full max-w-sm">
      <div className="mb-10">
        <Title level={1} style={{ margin: 0, fontWeight: 700, color: '#0f172a' }}>
          Welcome Back
        </Title>
        <Text type="secondary" className="text-base">
          Sign in to access your personalized medical portal.
        </Text>
      </div>

      <Form
        form={form}
        name="login_form"
        layout="vertical"
        onFinish={onFinish}
        size="large"
        requiredMark={false}
      >
        <Form.Item
          name="email"
          label={<span className="font-semibold text-slate-700">Email Address</span>}
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Invalid email format!' },
          ]}
        >
          <Input
            prefix={<MailOutlined className="text-slate-300 mr-2" />}
            placeholder="nama@email.com"
            className="rounded-xl border-slate-200"
          />
        </Form.Item>

        <Form.Item
          name="password"
          label={<span className="font-semibold text-slate-700">Password</span>}
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password
            prefix={<LockOutlined className="text-slate-300 mr-2" />}
            placeholder="••••••••"
            className="rounded-xl border-slate-200"
          />
        </Form.Item>

        <div className="flex items-center justify-between mb-8 -mt-2">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox className="text-slate-600">Remember me</Checkbox>
          </Form.Item>
          <a className="font-semibold text-teal-600 hover:text-teal-500" href="#">
            Forgot Password?
          </a>
        </div>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            loading={isPending}
            className="bg-teal-600! hover:bg-teal-700! h-12! text-base! font-semibold! rounded-xl! transition-all!"
          >
            {isPending ? 'Authenticating...' : 'Sign In'}
          </Button>
        </Form.Item>
      </Form>

      <p className="text-center text-sm text-slate-500 mt-6">
        Don't have an account?{' '}
        <Link href="/register" className="font-bold text-teal-600 hover:underline hover:text-teal-500">
          Sign up now
        </Link>
      </p>
    </div>
  );
}