import { useState } from "react";
import axios from "axios";

interface TravelFormProps {}

const TravelForm: React.FC<TravelFormProps> = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    destination: "",
    duration: "",
    interest: "",
    travelDate: "",
    numberOfTravelers: "",
    comment: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://travelopia-0v99.onrender.com/tour",
        formData
      );
      console.log(response.data);

      setShowModal(false);
    } catch (error) {
      console.error("Error submitting tour data:", error);
    }
  };

  return (
    <div className="w-[90%] m-auto">
      <div className="w-[89%] m-auto">
        <h1 className="text-[42px] mb-[16px] font-semibold text-white text-center">
          Trusted by 60,000+ Enchanted Travelers
        </h1>

        <h2 className="text-[24px] mb-[16px] font-semibold text-white ">
          Let Our Experts Plan Your Private, Tailor-Made and Secure Tour in 70+
          Inspiring Destinations.
        </h2>
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#F26A47] hover:bg-[#dc5431] py-[15px] px-[20px]  text-white font-medium rounded-md"
        >
          CREATE MY TRIP NOW
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50  mt-[250px]  ">
          <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg ">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Fill Out Your Details
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="">
                <label
                  htmlFor="fullName"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="">
                <label
                  htmlFor="phoneNumber"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="">
                <label
                  htmlFor="destination"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Destination
                </label>
                <select
                  name="destination"
                  id="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select Destination</option>
                  <option value="Paris">Paris</option>
                  <option value="Tokyo">Tokyo</option>
                  <option value="New York">New York</option>
                </select>
              </div>

              <div className="">
                <label
                  htmlFor="duration"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Duration (in days)
                </label>
                <input
                  type="number"
                  name="duration"
                  id="duration"
                  placeholder="Duration (in days)"
                  value={formData.duration}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="">
                <label
                  htmlFor="interest"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Interest
                </label>
                <select
                  name="interest"
                  id="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select Interest</option>
                  <option value="Beach">Beach</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Cultural">Cultural</option>
                </select>
              </div>

              <div className="">
                <label
                  htmlFor="travelDate"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Travel Date
                </label>
                <input
                  type="date"
                  name="travelDate"
                  id="travelDate"
                  value={formData.travelDate}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="">
                <label
                  htmlFor="numberOfTravelers"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Number of Travelers
                </label>
                <select
                  name="numberOfTravelers"
                  id="numberOfTravelers"
                  value={formData.numberOfTravelers}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select Number of Travelers</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="6+">6+</option>
                </select>
              </div>

              <div className="">
                <label
                  htmlFor="comment"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Comment
                </label>
                <textarea
                  name="comment"
                  id="comment"
                  placeholder="Comment"
                  value={formData.comment}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-md ml-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TravelForm;
