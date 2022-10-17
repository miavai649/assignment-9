import React from "react";
import { Link } from "react-router-dom";

const SingleCart = ({ cart }) => {
  const { id, name, logo, total } = cart;
  return (
    <div>
      <div className="bg-green-400 border-4 mb-10 w-96 h-96 max-w-xs rounded-md shadow-md dark:bg-green-700 object-cover dark:text-gray-100 ">
        <img src={logo} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-green-500" />

        <div className="mt-5 btn flex p-3 w-full justify-between text-2xl text-black">
          <h1 className=" p-2">{name}</h1>

          <Link to={`SingleCart/${id}`}>
            <button className="text-center p-2 border-2	rounded-lg hover:bg-yellow-500  bg-green-300">Start Practice</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
