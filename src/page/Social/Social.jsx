import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Social = () => {
  const { googleUserCreate } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleLogin = () => {
    googleUserCreate()
      .then((result) => {
        console.log(result);
        swal({
          title: "Success",
          text: "Login Successfully",
          icon: "success",
          button: "Login Complete",
        });
        navigate(location.state ? location?.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="flex w-full">
      <button
        onClick={handleGoogleLogin}
        className="flex w-full justify-center  text-[#387DF8] items-center text-lg font-semibold gap-5 border-2 rounded-full py-3 px-5 "
      >
        <FcGoogle></FcGoogle> Continue with Google
      </button>
    </div>
  );
};

export default Social;
