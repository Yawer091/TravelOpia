import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;
  const isAuth = user !== null;
  const isAdmin = isAuth && user.role === "admin";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleScroll = () => {
    setIsScrolled(window.pageYOffset > 0);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    closeMenu();
    navigate("/");
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${isScrolled ? "navbar-sticky" : ""}`}>
      <div className="bg-black mx-auto px-[20px] py-[16px] flex justify-between items-center ">
        <Link
          to="/"
          className="text-[36px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          onClick={closeMenu}
        >
          TravelOpia
        </Link>
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/"
            className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-pink-300 text-[24px] ml-[30px]"
            onClick={closeMenu}
          >
            Home
          </Link>
          {isAdmin && (
            <Link
              to="/enquiries"
              className="navbar-link text-white"
              onClick={closeMenu}
            >
              View Tours
            </Link>
          )}
          {isAuth ? (
            <>
              <button
                className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-pink-300 text-[24px] "
                onClick={handleLogout}
              >
                Logout
              </button>
              <UserOutlined
                className="profile-icon text-white"
                onClick={showModal}
                style={{
                  fontSize: "18px",
                  cursor: "pointer",
                  backgroundColor: "white",
                  padding: "8px",
                  borderRadius: "50%",
                }}
              />
              <Modal
                title="USER PROFILE"
                open={isModalVisible}
                onCancel={handleCancel}
                footer={null}
              >
                <p>Name: {user.fullName}</p>
                <p>Email:{user.email}</p>
              </Modal>
            </>
          ) : (
            <Link
              to="/login"
              className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-pink-300 text-[24px] mr-[20px] "
              onClick={closeMenu}
            >
              Login
            </Link>
          )}
        </div>
        <div className="md:hidden flex items-center">
          <i
            className="fa-solid fa-bars navbar-menu-icon text-white text-2xl"
            onClick={toggleMenu}
          ></i>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-black`}>
        <div className="container mx-auto px-4 py-2">
          <Link to="/" className="block text-white py-2" onClick={closeMenu}>
            Home
          </Link>
          {isAdmin && (
            <Link
              to="/enquiries"
              className="block text-white py-2"
              onClick={closeMenu}
            >
              View Tours
            </Link>
          )}
          {isAuth ? (
            <button className="block text-white py-2" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="block text-white py-2"
              onClick={closeMenu}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
