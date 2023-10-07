// import { useContext, useRef, useState } from "react";
import { useRef } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../provider/AuthProvider";
// import swal from "sweetalert";
// import { sendPasswordResetEmail } from "firebase/auth";
// import auth from "../../firebase/firebase.config";

const Login = () => {
  //   const { signInUser } = useContext(AuthContext);
  //   const navigate = useNavigate();

  //   const [isShow, setIsShow] = useState(false);
  //   const [registerError, setRegisterError] = useState("");
  //   const [success, setSuccess] = useState("");
  const emailRef = useRef(null);

  //   const handleLogin = (e) => {
  //     e.preventDefault();
  //     const email = e.target.email.value;
  //     const password = e.target.password.value;
  //     console.log(email, password);
  //     signInUser(email, password)
  //       .then((result) => {
  //         console.log(result.user);
  //         e.target.reset();
  //         navigate("/applied");
  //         setSuccess("Successfully Login Your Account");
  //         if (result.user.emailVerified) {
  //           swal({
  //             title: "Success",
  //             text: "Successfully Login Your Account",
  //             icon: "success",
  //             button: "Login Now",
  //           });
  //         } else {
  //           swal({
  //             title: "Please Verify",
  //             text: "Check Your Email And Verify Your Account",
  //             icon: "error",
  //             button: "Login Now",
  //           });
  //         }
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //         setRegisterError(error.message);
  //       });
  //   };
  //   const handleForgetPassword = () => {
  //     const email = emailRef.current.value;
  //     if (!email) {
  //       console.log("Please give me current email", emailRef.current.value);
  //       return;
  //     } else if (
  //       !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
  //     ) {
  //       console.log("please give me a valid email");
  //       return;
  //     }
  //     // send validation email
  //     sendPasswordResetEmail(auth, email)
  //       .then((result) => {
  //         console.log(result.user);

  //         swal({
  //           title: "Success",
  //           text: "Please Check Your Email",
  //           icon: "success",
  //           button: "Email",
  //         });
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   };
  return (
    <div>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-slate-50 border border-slate-300 rounded-lg  md:mt-0 sm:max-w-md xl:p-0  ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-[#387DF8] md:text-2xl">
              Login to your account
            </h1>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  ref={emailRef}
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Email"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    // type={isShow ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5  "
                    required=""
                  />
                  {/* <span
                    className="top-0 -ms-7"
                    onClick={() => setIsShow(!isShow)}
                  >
                    {isShow ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span> */}
                </div>
              </div>
              {/* <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  "
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-900 ">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline "
                >
                  Forgot password?
                </a>
              </div> */}
              <button
                type="submit"
                className="w-full bg-[#387DF8] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center"
              >
                Login
              </button>
              <p className="text-base text-center font-light text-gray-900">
                Don’t have an account yet?{" "}
                <Link to="/register">
                  <a
                    href="#"
                    className="font-medium text-[#387DF8] hover:underline "
                  >
                    Register
                  </a>
                </Link>
              </p>
              <div className="text-center">
                {/* {registerError && (
                  <div>
                    <p className="text-red-600 font-bold">{registerError}</p>
                  </div>
                )}
                {success && (
                  <div className="text-blue-600 font-bold">
                    <p>{success}</p>
                  </div>
                )} */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
