import { Outlet } from "react-router";
import authImg from "../../../../Resources/assets/authImage.png"

const AuthLayout = () => {
  return (
    <div className="grid lg:grid-cols-2 bg-white  rounded-2xl my-8">
      <div className="md:pl-13">
        <Outlet />
      </div>
      <div className="bg-[#FAFDF0] hidden lg:flex justify-center items-center">
        <img src={authImg} alt="" />
      </div>
    </div>
  );
};

export default AuthLayout;
