import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spin, Card, Row, Col, Pagination } from "antd";

interface Enquiry {
  _id: string;
  comment: string;
  createdAt: string;
  destination: string;
  duration: number;
  email: string;
  fullName: string;
  interest: string;
  numberOfTravelers: number;
  phone_number: string;
  travelDate: string;
  updatedAt: string;
}

const Enquiries: React.FC = () => {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [enquiriesPerPage] = useState(8);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const response = await axios.get(
          "https://travelopia-0v99.onrender.com/tour",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );
        setEnquiries(response.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEnquiries();
  }, []);

  const indexOfLastEnquiry = currentPage * enquiriesPerPage;
  const indexOfFirstEnquiry = indexOfLastEnquiry - enquiriesPerPage;
  const currentEnquiries = enquiries.slice(
    indexOfFirstEnquiry,
    indexOfLastEnquiry
  );

  const paginate = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="enquiries-section">
      <div
        className="bg-cover bg-center h-60vh"
        style={{ backgroundImage: "url('../images/mountain-banner.jpg')" }}
      ></div>
      {loading ? (
        <Spin size="large" className="flex justify-center items-center" />
      ) : (
        <>
          <Row gutter={[16, 16]} className="mt-4">
            {currentEnquiries.map((enquiry) => (
              <Col key={enquiry._id} xs={24} sm={12} lg={6}>
                <Card
                  className="rounded-lg shadow-lg overflow-hidden transition-transform transition-shadow duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl"
                  title={`Trip to ${enquiry.destination}`}
                  extra={
                    <a
                      href={`mailto:${enquiry.email}`}
                      className="text-blue-500 font-semibold"
                    >
                      Email
                    </a>
                  }
                >
                  <p>
                    <strong>Name:</strong> {enquiry.fullName}
                  </p>
                  <p>
                    <strong>Interest:</strong> {enquiry.interest}
                  </p>
                  <p>
                    <strong>Duration:</strong> {enquiry.duration} days
                  </p>
                  <p>
                    <strong>Travelers:</strong> {enquiry.numberOfTravelers}
                  </p>
                  <p>
                    <strong>Travel Date:</strong>{" "}
                    {new Date(enquiry.travelDate).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>Phone:</strong> {enquiry.phone_number}
                  </p>
                  <p>
                    <strong>Comments:</strong> {enquiry.comment}
                  </p>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="mt-6 flex justify-center">
            <Pagination
              current={currentPage}
              onChange={paginate}
              total={enquiries.length}
              pageSize={enquiriesPerPage}
            />
          </div>
        </>
      )}
    </section>
  );
};

export default Enquiries;
