import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
     <>
     <div className='flex justify-around mt-6'>
        <div className="select-none cursor-pointer font-bold hover:text-green-500 md:px-2 lg:px-4 md:mr-2 md:ml-2 lg:mr-2 md:font-bold lg:font-bold font-mono"><img src='./dr1.png' className='rounded-full h-10 w-10' alt='logo' /></div>
        <div>
          <button onClick={() => setShowNav(!showNav)} className=''>{!showNav ? (
          <div>
          <div className='bg-green-900 my-1 px-1 border-2 border-green-900 w-6'></div>
          <div className='bg-green-900 my-1 px-1 border-2 border-green-900 w-6'></div>
          <div className='bg-green-900 my-1 px-1 border-2 border-green-900 w-6'></div>
          </div>
          ) : (
            <div>
            <div className='bg-green-900 my-1 px-1 border-2 border-green-900 w-1 rotate-90'></div>
            <div className='bg-green-900 my-1 px-1 border-2 border-green-900 w-2 rotate-180 '></div> 
            <div className='bg-green-900 my-1 px-1 border-2 border-green-900 w-1 rotate-90'></div>
          </div>
          )}</button>
        </div>
     </div>
      {showNav && <NabvbarItem  show={showNav} setShow={setShowNav} /> } 
     </>
  )
}



const NabvbarItem = ({show, setShow}) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => setShow(!show)} className="lg:flex md:flex lg:justify-around md:justify-around md:shadow-lg lg:shadow-md w-11/12 max-w-full my-0 mx-auto lg:py-3 md:py-3 md:px-3 justify-center items-center">
    <div className="md:flex lg:flex md:justify-between lg:justify-center md:items-center lg:items-center md:w-2/3">
       <div className="font-semibold font-mono my-3 text-center select-none cursor-pointer hover:text-green-500 md:px-2 lg:px-4 md:mr-2 md:ml-2 lg:mr-2 md:font-bold lg:font-bold"  onClick={() => {navigate('/')}}><img src='./dr1.png' className='rounded-full h-10 w-10' alt='logo' /></div>
      <div className="font-semibold font-mono my-3 text-center select-none cursor-pointer hover:text-green-500 md:px-2 lg:px-4 md:py-1 lg:py-2 lg:mx-2 font-semibold"  onClick={() => {navigate('/')}}>Home</div>
      <div className="font-semibold font-mono my-3 text-center select-none cursor-pointer hover:text-green-500 lg:px-4 lg:mx-2 md:font-thin lg:font-semibold" onClick={()=> {navigate('/nimsa-database')}}>Search</div>
      <div className="font-semibold font-mono my-3 text-center select-none cursor-pointer hover:text-green-500 lg:px-4 lg:mx-2 md:font-thin lg:font-semibold" onClick={() => {navigate('/publish')}}>Publish paper</div>
      <div onClick={() => setShow(!show)} className="font-semibold font-mono my-3 text-center select-none cursor-pointer hover:text-green-500 lg:px-4 lg:mx-2 md:font-thin lg:font-semibold"><Link to="">Editorials</Link></div>
      <div className="px-4 py-2 font-semibold font-mono my-3 text-center select-none cursor-pointer hover:text-green-500 lg:px-4 lg:ml-2 md:font-thin lg:font-semibold" onClick={() => {navigate('/more-details')}}>More</div>
    </div>
    <div className="md:flex lg:flex md:justify-between md:items-center">
      <button className='py-2 md:px-4 md:mx-2 mb-2 w-full border-2 border-green-500 text-white font-semibold rounded-lg hover:bg-green-700 text-green-500' onClick={() => {navigate('/signin')}}>Login</button>
      <button className='py-2 md:px-4 md:mx-2 mb-2 w-full border-2 bg-green-600 border-green-500 text-white hover:bg-green-700 font-semibold rounded-lg hover:bg-green-700' onClick={() => {navigate('/signup')}}>Signup</button>
      {/* <button className='py-2 text-xs md:px-4  mt-2 w-full bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 ' onClick={() => {navigate('/signup')}}>Sign up</button> */}
    </div>
</div>
  )
}
export default Navbar;