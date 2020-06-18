import React from "react";
import { Form, Input, Button, Checkbox } from "antd";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const LoginForm = ({submit, fail}) => {

  const onFinish = (values) => {
    submit(values);
  };

  const onFinishFailed = (errorInfo) => {
    fail(errorInfo);
  };

  return (
    <Form
      {...layout}
      name="login"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Email daxil edin!",
          },
          {
            type: 'email',
            message: 'Düzgün email daxil edin!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Şifrə"
        name="password"
        rules={[
          {
            required: true,
            message: "Şifrə daxil edin!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Məni xatırla</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Daxil ol
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
