import React, { useState } from "react";
import axios from 'axios'
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Login = ({setToken}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(backendUrl + '/api/user/admin',{email,password})
      console.log(response);
      if (response.data.success) {

        setToken(response.data.token)
      }else{

        toast.error(response.data.message)
      }
    } catch (error) {
      //
      console.log(error);
      toast.error(error.message)
    }
  };
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className=" text-2xl font-bold mb-4">Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2">
              Email Address
            </p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              type="email"
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
              placeholder="Your@email.com"
            />
          </div>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2"> Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              type="password"
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white  px-4 py-2 mt-2 w-full rounded-md"
          >
            Login{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
