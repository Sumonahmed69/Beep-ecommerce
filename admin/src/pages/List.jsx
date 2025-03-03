import React, { useEffect, useState } from "react";
import axios from "axios";
import { RiDeleteBin6Line } from "react-icons/ri";

import { backendUrl, cureency } from "../App";
import { toast } from "react-toastify";
const List = ({ token }) => {
  const [list, setList] = useState([]);
  //   const [loading, setLoading] = useState(true); // Added loading state

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message || "Failed to fetch products.");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
    // finally {
    //   setLoading(false); // Ensure loading is disabled after fetch
    // }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message || "Failed to fetch products.");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div>
      <>
        <p className="mb-2">All Products List</p>

        <div className="flex flex-col gap-2 ">
          {/* ''''''''''''''''''List Table Title'''''''''''''''''' */}
          <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 broder bg-gray-100 text-sm">
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b className="text-center">Action</b>
          </div>
          {/* .............product list........... */}
          {list.map((item, idx) => (
            <div
              className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm"
              key={idx}
            >
              <img className="w-12" src={item.image[0]} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>
                {cureency}
                {item.price}
              </p>

              {/* <p
                onClick={() => removeProduct(item._id)}
                className="text-left font-extrabold text-red-500 md:text-center cursor-pointer text-lg "
              >
                X
              </p> */}
              <div className="flex justify-center">
                <RiDeleteBin6Line
                  onClick={() => removeProduct(item._id)}
                  className="   text-red-500  cursor-pointer text-lg "
                />
              </div>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default List;
