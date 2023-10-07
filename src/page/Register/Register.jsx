// import { useContext, useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { AuthContext } from "../../provider/AuthProvider";
// import { Link } from "react-router-dom";
// import swal from "sweetalert";
// import {
//   sendEmailVerification,
//   updatePhoneNumber,
//   updateProfile,
// } from "firebase/auth";

import { Link } from "react-router-dom";

const Register = () => {
  //   const { createUser } = useContext(AuthContext);
  //   const [isShow, setIsShow] = useState(false);
  //   const [registerError, setRegisterError] = useState("");
  //   const [success, setSuccess] = useState("");
  //   //handleRegister
  //   const handleRegister = (e) => {
  //     e.preventDefault();
  //     const name = e.target.name.value;
  //     const email = e.target.email.value;
  //     const password = e.target.password.value;
  //     const accepted = e.target.terms.checked;
  //     console.log(name, email, password, accepted);
  //     // password validation
  //     if (password.length < 6) {
  //       setRegisterError("password should be at least 6 characters or longer");
  //       return;
  //     } else if (!/[A-Z]/.test(password)) {
  //       setRegisterError("Your Password should have at least one Uppercase");
  //       return;
  //     } else if (!accepted) {
  //       setRegisterError("Please accept our terms and condition");
  //       return;
  //     }
  //     // rest error
  //     setRegisterError("");
  //     setSuccess("");
  //     // create user
  //     createUser(email, password)
  //       .then((result) => {
  //         console.log(result.user);
  //         e.target.reset();
  //         setSuccess("User create successfully");
  //         // update profile
  //         updateProfile(result.user, {
  //           displayName: name,
  //           photoURL: "https://example.com/jane-q-user/profile.jpg",
  //         }).catch((error) => console.error(error));
  //         // send verification email
  //         sendEmailVerification(result.user).then(() => {
  //           swal(
  //             "Check Email!",
  //             "Please Check Your Email and Verify Your Account!"
  //           );
  //         });

  //         swal({
  //           title: "Success",
  //           text: "Registration Successfully",
  //           icon: "success",
  //           button: "Register Complete",
  //         });
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //         setRegisterError(error.message);
  //       });
  //   };
  return (
    <div>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-slate-50 border border-slate-300 rounded-lg  md:mt-0 sm:max-w-md xl:p-0  ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-[#387DF8] md:text-2xl">
              Register to your account
            </h1>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Email"
                  required
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
                      name="terms"
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
                Register
              </button>
              <p className="text-base text-center font-light text-gray-900">
                Don’t have an account yet?{" "}
                <Link to="/login">
                  <a
                    href="#"
                    className="font-semibold text-[#387DF8] hover:underline "
                  >
                    Login
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

export default Register;
