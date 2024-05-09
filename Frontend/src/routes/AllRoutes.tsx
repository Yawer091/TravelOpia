import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Register from "../pages/Register";
import CreateTrip from "../pages/CreateTrip";
import Login from "../pages/Login";
import Enquiries from "../pages/Tours";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/createMyTrip"
        element={
          <PrivateRoute>
            <CreateTrip />
          </PrivateRoute>
        }
      />
      <Route
        path="/enquiries"
        element={
          <PrivateRoute>
            <Enquiries />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
