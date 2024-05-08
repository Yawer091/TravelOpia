// import React, { useState } from "react";

// interface TravelFormProps {}

// const TravelForm: React.FC<TravelFormProps> = () => {
//   const [destination, setDestination] = useState<string>("");
//   const [interests, setInterests] = useState<string>("");
//   const [travelers, setTravelers] = useState<string>("");
//   const [budget, setBudget] = useState<string>("");

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     console.log({ destination, interests, travelers, budget });
//   };

//   return (
//     <div className="w-[90%] m-auto ">
//       <div className="w-[80%] m-auto">
//         <h1 className="text-[42px] mb-[16px] font-semibold text-white text-center">
//           Trusted by 60,000+ Enchanted Travelers
//         </h1>
//         <h2 className="text-[24px] mb-[16px] font-semibold text-white ">
//           Let Our Experts Plan Your Private, Tailor-Made and Secure Tour in 70+
//           Inspiring Destinations.
//         </h2>
//       </div>
//       <form onSubmit={handleSubmit} className="p-[10px] flex ">
//         {/* <label> */}
//         <select
//           className="py-[10px] pl-[10px] pr-[40px]  w-[20%] rounded-l-md"
//           title="Select Destination"
//           value={destination}
//           onChange={(e) => setDestination(e.target.value)}
//         >
//           <option value="">Select destination</option>
//           <option value="Paris">Paris</option>
//           <option value="Tokyo">Tokyo</option>
//           <option value="New York">New York</option>
//         </select>

//         <select
//           className="py-[10px] pl-[10px] pr-[40px] w-[20%]"
//           title="intrest"
//           value={interests}
//           onChange={(e) => setInterests(e.target.value)}
//         >
//           <option value="">Select interests</option>
//           <option value="Beach">Beach</option>
//           <option value="Adventure">Adventure</option>
//           <option value="Cultural">Cultural</option>
//         </select>

//         <select
//           className="py-[10px] pl-[10px] pr-[40px]  w-[20%]"
//           title=" No. of travelers"
//           value={travelers}
//           onChange={(e) => setTravelers(e.target.value)}
//         >
//           <option value="">Select number of travelers</option>
//           <option value="1">1</option>
//           <option value="2">2</option>
//           <option value="3">3</option>
//           <option value="3">4</option>
//           <option value="3">5</option>
//           <option value="3">6</option>
//           <option value="3">6+</option>
//         </select>

//         <select
//           className="py-[10px] pl-[10px] pr-[40px]  w-[20%]"
//           title=" Budget Per Person"
//           value={budget}
//           onChange={(e) => setBudget(e.target.value)}
//         >
//           <option value="4000-5000">$4000-$5000</option>
//           <option value="5000-6000">$5000-$6000</option>
//           <option value="6000-7000">$6000-$7000</option>
//           <option value="7000-8000">$7000-$8000</option>
//           <option value="8000-10000">$8000-$10000</option>
//           <option value="10000+">$10000+</option>
//         </select>

//         <button
//           type="submit"
//           className="bg-[#F26A47] hover:bg-[#dc5431] py-[10px] px-[20px]  text-white font-medium rounded-r-md"
//         >
//           CREATE MY TRIP NOW
//         </button>
//       </form>
//     </div>
//   );
// };

// export default TravelForm;
import React, { useState } from "react";
import axios from "axios";

interface TravelFormProps {}

const TravelForm: React.FC<TravelFormProps> = () => {
  const [destination, setDestination] = useState<string>("");
  const [interests, setInterests] = useState<string>("");
  const [travelers, setTravelers] = useState<string>("");
  const [budget, setBudget] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://travelopia-0v99.onrender.com/tour",
        {
          destination,
          interests,
          numberOfTravelers: travelers,
          budget,
        }
      );
      console.log(response.data);
      // Optionally, handle success response here
    } catch (error) {
      console.error("Error submitting tour data:", error);
      // Optionally, handle error response here
    }
  };

  return (
    <div className="w-[90%] m-auto ">
      <div className="w-[80%] m-auto">
        <h1 className="text-[42px] mb-[16px] font-semibold text-white text-center">
          Trusted by 60,000+ Enchanted Travelers
        </h1>
        <h2 className="text-[24px] mb-[16px] font-semibold text-white ">
          Let Our Experts Plan Your Private, Tailor-Made and Secure Tour in 70+
          Inspiring Destinations.
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="p-[10px] flex ">
        {/* <label> */}
        <select
          className="py-[10px] pl-[10px] pr-[40px]  w-[20%] rounded-l-md"
          title="Select Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        >
          <option value="">Select destination</option>
          <option value="Paris">Paris</option>
          <option value="Tokyo">Tokyo</option>
          <option value="New York">New York</option>
        </select>

        <select
          className="py-[10px] pl-[10px] pr-[40px] w-[20%]"
          title="Interests"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
        >
          <option value="">Select interests</option>
          <option value="Beach">Beach</option>
          <option value="Adventure">Adventure</option>
          <option value="Cultural">Cultural</option>
        </select>

        <select
          className="py-[10px] pl-[10px] pr-[40px]  w-[20%]"
          title="No. of travelers"
          value={travelers}
          onChange={(e) => setTravelers(e.target.value)}
        >
          <option value="">Select number of travelers</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="6+">6+</option>
        </select>

        <select
          className="py-[10px] pl-[10px] pr-[40px]  w-[20%]"
          title="Budget Per Person"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        >
          <option value="4000-5000">$4000-$5000</option>
          <option value="5000-6000">$5000-$6000</option>
          <option value="6000-7000">$6000-$7000</option>
          <option value="7000-8000">$7000-$8000</option>
          <option value="8000-10000">$8000-$10000</option>
          <option value="10000+">$10000+</option>
        </select>

        <button
          type="submit"
          className="bg-[#F26A47] hover:bg-[#dc5431] py-[10px] px-[20px]  text-white font-medium rounded-r-md"
        >
          CREATE MY TRIP NOW
        </button>
      </form>
    </div>
  );
};

export default TravelForm;
