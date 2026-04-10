import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div> <div className=" flex justify-between  bg-blue-900 text-white px-10 py-3 ">
        <h2 className=" font-medium  text-3xl">Media Search</h2>
        <div className="flex gap-5 text-xl items-center">
          <Link
            to="/"
            className="text-xl font-semibold active:scale-95  shadow-md hover:-translate-y-1 transition duration-300 bg-gray-100 text-black  rounded px-2 py-1"
          >
            Search
          </Link>
          <Link
            to="/collection"
            className="text-xl font-semibold active:scale-95  shadow-md hover:-translate-y-1 transition duration-300 bg-gray-100 text-gray-900 rounded px-2 py-1"
          >
            Collection
          </Link>
        </div>
      </div></div>
  )
}

export default Navbar