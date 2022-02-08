import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
      <div className="lg:flex md:flex lg:justify-around md:justify-around md-shadow-lg lg:shadow-md lg:mx-3 md:mx-3 lg:py-3 md:py-3 lg:mt-2 md:mt-2">
          <div className="md:flex lg:flex md:justify-between lg:justify-center md:items-center lg:items-center md:w-2/3">
            <div className="select-none cursor-pointer hover:text-green-500 md:px-2 lg:px-4 md:mr-2 md:ml-2 lg:mr-2 md:font-bold lg:font-bold"><Link to="">NIMSA <br />JOURNALS</Link></div>
            <div className="select-none cursor-pointer hover:text-green-500 md:px-2 lg:px-4 md:py-1 lg:py-2 lg:mx-2 bg-green-400 text-white font-semibold rounded hover:bg-green-800">Home</div>
            <div className="select-none cursor-pointer hover:text-green-500 lg:px-4 lg:mx-2 md:font-thin lg:font-semibold"><Link to="">Search</Link></div>
            <div className="select-none cursor-pointer hover:text-green-500 lg:px-4 lg:mx-2 md:font-thin lg:font-semibold"><Link to="">Publish paper</Link></div>
            <div className="select-none cursor-pointer hover:text-green-500 lg:px-4 lg:mx-2 md:font-thin lg:font-semibold"><Link to="">Editorials</Link></div>
            <div className="select-none cursor-pointer hover:text-green-500 lg:px-4 lg:ml-2 md:font-thin lg:font-semibold"><Link to="">More</Link></div>
          </div>
          <div className="md:flex lg:flex md:justify-end lg:justify-center md:items-center lg:items-center md:w-1/3">
            <div className="select-none cursor-pointer hover:text-green-500 md:py-1 md:px-4 md:mr-2 lg:font-semibold lg:px-4 lg:mr-2 border border-green-500 lg:py-2 text-green-500 rounded"><Link to="">Login</Link></div>
            <div className="select-none cursor-pointer hover:text-green-500 md:py-1 md:px-4 lg:font-semibold lg:px-4 lg:ml-2 rounded text-white font-semibold lg:py-2 bg-green-400"><Link to="">Sign up</Link></div>
          </div>
      </div>
  )
}

export default Navbar;