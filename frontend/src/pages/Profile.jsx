import React, { useEffect } from "react";
import Sidebar from "../components/Profile/Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";
import Loader from "../components/Loader/Loader";
import MobileNav from "../components/Profile/MobileNav";

const Profile = () => {
  const [Profile, setProfile] = useState();
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "http://localhost:1000/api/v1/get-user-information",
        { headers }
      );
      setProfile(response.data);
    };
    fetch();
  }, []);

  return (
    <>
      <div className="bg-zinc-900 px-2 md:px-4 lg:px-12 flex flex-col md:flex-row py-8 gap-4 text-white min-h-screen">
        {!Profile && (
          <div className="w-full h-full flex items-center justify-around">
            <Loader />
          </div>
        )}
        {Profile && (
          <>
            <div className="w-full md:w-1/4 lg:w-1/6 h-auto md:h-full lg:h-screen">
              <Sidebar data={Profile} />
              <MobileNav />
            </div>
            <div className="w-full md:w-3/4 lg:w-5/6">
              <Outlet />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Profile;