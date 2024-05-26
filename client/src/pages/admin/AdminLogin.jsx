import React, { useEffect, useState } from "react";
import axios from "axios";
import { routeUrl } from "../../utils/config";
import { signInFailure, signInSuccess } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isInGeneralAuthenticated } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${routeUrl}/user/login`, formData, {
        withCredentials: true,
      });
      dispatch(signInSuccess(data));
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      dispatch(signInFailure());
    }
  };
  useEffect(() => {
    if (isInGeneralAuthenticated) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <div className="h-screen w-screen bg-slate-200 flex items-center justify-center">
      <div className="size-[500px] rounded-lg shadow-lg bg-white p-6 flex items-center flex-col gap-4">
        <h1 className="font-bold text-[30px] text-purple-700">Login</h1>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col gap-4 w-full mt-12"
        >
          <input
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            type="text"
            name="username"
            required
            placeholder="Username"
            className="p-3 w-full rounded border border-gray-200 outline-purple-200"
          />
          <input
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            type="text"
            name="password"
            required
            placeholder="Password"
            className="p-3 w-full rounded border border-gray-200 outline-purple-200"
          />
          <button
            type="submit"
            className="p-2 w-full rounded border border-gray-200 outline-purple-200 bg-purple-400 text-white font-bold text-2xl hover:bg-purple-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
