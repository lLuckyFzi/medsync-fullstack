'use client';

import { Form, Input, Button, Typography } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRegister } from '@/hooks/mutations/useAuthMutation';
import { RegisterPayload } from '@/types/auth';

const { Title, Text } = Typography;

export default function RegisterForm() {
  const [form] = Form.useForm();

  const { mutate: register, isPending } = useRegister();

  const onFinish = (values: RegisterPayload) => {
    register(values);
  };

  return (
    <div className="w-full max-w-sm">
      <div className="mb-10">
        <Title level={1} style={{ margin: 0, fontWeight: 700, color: '#0f172a' }}>
          Create Account
        </Title>
        <Text type="secondary" className="text-base">
          Join MedSync to manage your health ecosystem.
        </Text>
      </div>

      <Form
        form={form}
        name="register_form"
        layout="vertical"
        onFinish={onFinish}
        size="large"
        requiredMark={false}
      >
        <Form.Item
          name="name"
          label={<span className="font-semibold text-slate-700">Full Name</span>}
          rules={[{ required: true, message: 'Please input your full name!' }]}
        >
          <Input 
            prefix={<UserOutlined className="text-slate-300! mr-2!" />} 
            placeholder="Lucky Fauzi" 
            className="rounded-xl!"
          />
        </Form.Item>

        <Form.Item
          name="email"
          label={<span className="font-semibold text-slate-700">Email Address</span>}
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Invalid email format!' }
          ]}
        >
          <Input 
            prefix={<MailOutlined className="text-slate-300! mr-2!" />} 
            placeholder="nama@email.com" 
            className="rounded-xl!"
          />
        </Form.Item>

        <Form.Item
          name="password"
          label={<span className="font-semibold text-slate-700">Password</span>}
          rules={[
            { required: true, message: 'Please input your password!' },
            { min: 6, message: 'Password must be at least 6 characters!' }
          ]}
        >
          <Input.Password 
            prefix={<LockOutlined className="text-slate-300! mr-2!" />} 
            placeholder="Create a strong password" 
            className="rounded-xl!"
          />
        </Form.Item>

        <Form.Item className="mt-8">
          <Button 
            type="primary" 
            htmlType="submit" 
            block 
            loading={isPending}
            className="bg-teal-600! hover:bg-teal-700! h-12! text-base! font-semibold! rounded-xl! transition-all!"
          >
            {isPending ? 'Creating Account...' : 'Sign Up'}
          </Button>
        </Form.Item>
      </Form>

      <p className="text-center text-sm text-slate-500 mt-6">
        Already have an account?{' '}
        <Link href="/login" className="font-bold text-teal-600! hover:underline hover:text-teal-500!">
          Sign in
        </Link>
      </p>
    </div>
  );
}