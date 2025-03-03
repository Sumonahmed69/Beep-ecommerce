import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";

import { IoClose } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection") ) {
      // console.log(location.pathname);
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-3 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className=" flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search"
        />
        <CiSearch className="" />
      </div>
      <IoClose
        onClick={() => setShowSearch(false)}
        size={20}
        className="inline cursor-pointer"
      />
    </div>
  ) : null;
};

export default SearchBar;
