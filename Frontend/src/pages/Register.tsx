import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input, notification } from "antd";

const API_BASE_URL = "https://travelopia-0v99.onrender.com";
const Register: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/register`, {
        fullName: values.fullname,
        email: values.email,
        password: values.password,
        phoneNumber: values.phone_number,
      });
      if (response.status === 201) {
        notification.success({
          placement: "bottomLeft",
          message: "Registration Successful",
          description: "REGISTERED",
        });
        navigate("/login");
      }
    } catch (error: any) {
      notification.error({
        placement: "bottomLeft",
        message: "Registration Failed",
        description: error.response?.data?.message || "ERROR 404",
      });
    }
    setLoading(false);
  };

  return (
    <div className="w-[80%] m-auto flex justify-between p-8">
      <div className="w-[40%] flex flex-col justify-center p-[10px]">
        <h3 className="text-xl font-semibold mb-4">
          Register Yourself For Bookings
        </h3>
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item
            className="border-[1px] border-gray-300 rounded-md"
            name="fullname"
            rules={[{ required: true, message: "Name must be present" }]}
          >
            <Input placeholder="Full Name" className="text-black" />
          </Form.Item>

          <Form.Item
            className="border-[1px] border-gray-300 rounded-md"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "email must be present",
              },
            ]}
          >
            <Input placeholder="Email Address" className="text-black" />
          </Form.Item>

          <Form.Item
            className="border-[1px] border-gray-300 rounded-md"
            name="phone_number"
            rules={[
              {
                required: true,
                message: "Phone number must be present",
                len: 10,
              },
            ]}
          >
            <Input
              placeholder="Phone Number"
              maxLength={10}
              className="text-black"
            />
          </Form.Item>

          <Form.Item
            className="border-[1px] border-gray-300 rounded-md"
            name="password"
            rules={[{ required: true, message: "CREATE STRONG PASSWORD" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item className=" w-[50%] p-[10px] m-auto">
            <Button
              type="primary"
              loading={loading}
              htmlType="submit"
              className="w-full"
            >
              Register
            </Button>
          </Form.Item>
        </Form>
        <Link
          to="/login"
          className="w-[60%] m-auto bg-orange-500 text-white text-center p-[10px] rounded-md hover:bg-orange-300 hover:text-orange-500 transition duration-300"
        >
          Log In
        </Link>
      </div>
      <div className="w-1/2 ">
        <img
          src="https://cdn.vectorstock.com/i/500p/15/04/travel-background-concept-vector-711504.jpg"
          alt="registration image"
          className="w-[80%] rounded-lg h-[400px] m-auto"
        />
      </div>
    </div>
  );
};

export default Register;
