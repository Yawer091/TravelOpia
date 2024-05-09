import React, { useState } from "react";
import { Button, Form, Input, notification } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://travelopia-0v99.onrender.com/login",
        {
          email: values.email,
          password: values.password,
        }
      );
      if (response.status === 200) {
        const { token, user } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        notification.success({
          placement: "bottomLeft",
          message: "Login Successful",
          description: "You have successfully logged in!",
        });
        navigate("/");
      }
    } catch (error: any) {
      notification.error({
        placement: "bottomLeft",
        message: "Login Failed",
        description:
          error.response.data.message || "An error occurred during login.",
      });
    }
    setLoading(false);
  };

  return (
    <div className=" w-[80%] m-auto flex justify-between p-8">
      <div className="w-[40%] flex flex-col justify-center p-[10px]">
        <h1 className="text-[26px] font-semibold mb-4">
          WELCOME TO TRAVELOPIA
        </h1>
        <p className="text-[16px] text-gray-600 mb-4 text-center">
          Login To Book You Destination Holiday
        </p>
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item
            name="email"
            className="border-[1px] border-gray-300 rounded-md"
            rules={[{ required: true, message: "Please enter your Email ID!" }]}
          >
            <Input placeholder="Enter your Email ID" className="text-black " />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              loading={loading}
              htmlType="submit"
              className="w-full"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
        <Link
          to="/register"
          className="w-[60%] mx-auto  bg-orange-500 text-white text-center p-[10px] rounded-md hover:bg-orange-300 hover:text-orange-500 transition duration-300"
        >
          Register now
        </Link>
      </div>
      <div className="w-1/2 ">
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D"
          alt="login-img"
          className="w-[80%] rounded-lg h-[400px] m-auto"
        />
      </div>
    </div>
  );
};

export default Login;
