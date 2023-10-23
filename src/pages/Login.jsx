import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userAuth } from "../context/AuthContext";
import { PiWarningCircleFill } from "react-icons/pi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { logIn } = userAuth();
  const navigate = useNavigate();

  //Login funtion
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="image"
        />
        <div className="fixed top-0 left-0 w-full h-screen bg-gradient-to-r from-black/60"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign In</h1>
              <form onSubmit={handleSubmit} className="flex flex-col w-full">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 rounded bg-gray-700"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                {/* warning message */}
                <>
                  {error ? (
                    <div className="flex items-center text-red-500">
                      <p>
                        <PiWarningCircleFill className="mr-1" />
                      </p>
                      <p>{error}</p>
                    </div>
                  ) : null}
                </>
                {/* warning message */}
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 rounded bg-gray-700"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                {/* warning message */}
                <>
                  {error ? (
                    <div className="flex items-center text-red-500">
                      <p>
                        <PiWarningCircleFill className="mr-1" />
                      </p>
                      <p>{error}</p>
                    </div>
                  ) : null}
                </>
                {/* warning message */}
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign In
                </button>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need help?</p>
                </div>
                <p className="py-8">
                  <span className="text-sm text-gray-500">New to Netflix?</span>
                  <Link to="/signup"> Sign Up now</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
