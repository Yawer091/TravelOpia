import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button, Select, DatePicker, notification } from "antd";
import moment from "moment";

interface FormValues {
  fullName: string;
  email: string;
  phoneNumber: string;
  destination: string;
  duration: string;
  interest: string;
  travelDate: moment.Moment;
  numberOfTravelers: string;
  comment?: string;
}

const { Option } = Select;

const CreateTrip: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: FormValues) => {
    const token = localStorage.getItem("token");
    const formattedValues = {
      ...values,
      travelDate: values.travelDate.format("YYYY-MM-DD"),
    };

    try {
      setLoading(true);
      const response = await axios.post(
        "https://travelopia-0v99.onrender.com/tour",
        formattedValues,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      notification.success({
        message: "Success",
        description: response.data.message,
        placement: "bottomLeft",
      });
      form.resetFields();
    } catch (error: any) {
      console.log(error);
      notification.error({
        message: "Error",
        description:
          error.response?.data.message || "Failed to submit enquiry.",
        placement: "bottomLeft",
      });
    }
    setLoading(false);
  };

  return (
    <section
      className="bg-cover bg-center pt-16 pb-4"
      style={{ backgroundImage: "url('../images/createTrip-banner.jpg')" }}
    >
      <div className="max-w-lg mx-auto px-6 py-4 bg-gray-800 rounded-lg shadow-lg text-white">
        <h1 className="text-2xl font-bold text-center mb-4">
          Create Your Trip
        </h1>
        <p className="text-sm text-center mb-6">
          Submit your trip TOUR details.
        </p>
        <Form form={form} onFinish={handleSubmit}>
          <div className="flex flex-wrap gap-4 mb-4">
            <Form.Item
              name="fullName"
              rules={[
                { required: true, message: "Please input your full name!" },
              ]}
              className="flex-1"
            >
              <Input placeholder="Full Name" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                { type: "email", message: "The input is not valid E-mail!" },
                { required: true, message: "Please input your E-mail!" },
              ]}
              className="flex-1"
            >
              <Input type="email" placeholder="Email Address" />
            </Form.Item>
          </div>
          <div className="flex flex-wrap gap-4 mb-4">
            <Form.Item
              name="phoneNumber"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
              className="flex-1"
            >
              <Input placeholder="Phone Number (10 digits)" />
            </Form.Item>
            <Form.Item
              name="destination"
              rules={[
                { required: true, message: "Please select your destination!" },
              ]}
              className="flex-1"
            >
              <Select placeholder="Select a Destination">
                <Option value="">Select a Destination</Option>
                <Option value="Paris">Paris</Option>
                <Option value="New York">New York</Option>
                <Option value="Bangkok">Bangkok</Option>
                <Option value="Mount Fuji">Mount Fuji</Option>
                <Option value="South India">South India</Option>
                <Option value="Japan">Japan</Option>
                <Option value="France">France</Option>
                <Option value="North India">North India</Option>
                <Option value="Bali">Bali</Option>
                <Option value="New York">New York</Option>
              </Select>
            </Form.Item>
          </div>
          <div className="input-row">
            <Form.Item
              name="interest"
              rules={[
                { required: true, message: "Please select your interest!" },
              ]}
            >
              <Select placeholder="Select an Interest">
                <Option value="">Select an Interest</Option>

                <Option value="Beaches">Beaches</Option>
                <Option value="Heritage and Culture">
                  Heritage and Culture
                </Option>
                <Option value="Nature and Landscape">
                  Nature and Landscape
                </Option>
                <Option value="Wildlife and Safaris">
                  Wildlife and Safaris
                </Option>
                <Option value="Wine and Food">Wine and Food</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="duration"
              rules={[{ required: true, message: "Please select duration!" }]}
            >
              <Select placeholder="Select Duration (days)">
                <Option value="">Select Duration (days)</Option>
                <Option value="3">3 Days</Option>
                <Option value="5">5 Days</Option>
                <Option value="7">7 Days</Option>
              </Select>
            </Form.Item>
          </div>
          <div className="input-row">
            <Form.Item
              name="travelDate"
              rules={[
                { required: true, message: "Please choose the travel date!" },
              ]}
            >
              <DatePicker style={{ width: "100%" }} format="YYYY-MM-DD" />
            </Form.Item>
            <Form.Item
              name="numberOfTravelers"
              rules={[
                {
                  required: true,
                  message: "Please select the number of travelers!",
                },
              ]}
            >
              <Select placeholder="Number of Travelers">
                <Option value="">Number of Travelers</Option>
                <Option value="1">1 </Option>
                <Option value="2">2 </Option>
                <Option value="3">3 </Option>
                <Option value="4">4 </Option>
                <Option value="5">5 </Option>
                <Option value="6">6+ </Option>
              </Select>
            </Form.Item>
          </div>

          <Form.Item name="comment">
            <Input.TextArea rows={4} placeholder="Additional Comments" />
          </Form.Item>
          <div className="mb-4">
            <Button
              loading={loading}
              htmlType="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default CreateTrip;
