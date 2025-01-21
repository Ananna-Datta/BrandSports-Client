import { useContext } from "react";
// import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
// import Loading from "../pages/Loading";
import { AuthContext } from "../provider/Authprovider";
import Loading from "../Pages/Loading";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;