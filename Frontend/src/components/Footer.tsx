const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-semibold">TravelOpia</h2>
            <p className="mt-2">Your ultimate travel guide</p>
          </div>
          <div className="flex justify-center md:justify-end">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-700 my-4" />
        <p className="text-center">© 2024 TravelOpia. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
