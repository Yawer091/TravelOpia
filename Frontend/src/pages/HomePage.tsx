import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <section className="home relative">
        <div
          className="bg-cover bg-center h-[520px]"
          style={{
            objectFit: "cover",
            backgroundImage: `url("https://img.freepik.com/free-vector/realistic-travel-background-with-elements_52683-77784.jpg")`,
          }}
        >
          <div className="w-[60%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-400 text-center z-10">
            <h1 className="text-4xl md:text-4xl font-semibold mb-4">
              Trusted by 60,000+ Enchanted Travelers
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Let Our Experts Plan Your Private, Tailor-Made and Secure Tour in
              70+ Inspiring Destinations.
            </p>
            <Link
              className="bg-[#47bcf2]  hover:bg-[#31c5dc] py-[15px] px-[20px]  text-white font-sans rounded-[8px]"
              to="/createMyTrip"
            >
              CREATE MY TRIP NOW
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
