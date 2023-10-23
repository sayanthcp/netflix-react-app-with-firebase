import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { userAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = userAuth();

  const navigate = useNavigate()

  //logout function
  const handleLogout = async () => {
    try {
      await logOut()
      navigate('/login')
    }catch(error) {
      console.log(error);
    }

  }
  return (
    <div className="flex justify-between items-center p-2 absolute w-full z-[100]">
      <Link to="/">
        <h1 className="text-red-600 text-3xl font-bold cursor-pointer hover:opacity-90">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white px-6 py-2 rounded-md cursor-pointer mr-2 bg-black/50 hover:opacity-70">
              Account
            </button>
          </Link>
            <button onClick={handleLogout} className="bg-red-600 px-6 py-2 text-white rounded-md cursor-pointer hover:opacity-70">
              Logout
            </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white px-6 py-2 rounded-md cursor-pointer mr-2 bg-black/50 hover:opacity-70">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-6 py-2 text-white rounded-md cursor-pointer hover:opacity-70">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
