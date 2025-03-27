import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
const UserAuth = () => {
  const data = useSelector((store) => store.userInfo.userDetail);

  if (data) {
    return <Outlet />;
  } else {
    return <Navigate to={"/admin/login"} replace />;
  }
};
export default UserAuth;
