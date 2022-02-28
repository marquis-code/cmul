import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='max-w-full my-0 mx-auto lg:flex lg:justify-between lg:items-center'>
        <div className='lg:w-1/2 lg:pl-9 pl-6'>
          <div className="py-5 lg:flex"><img src="./circle.png" alt="home" /></div>
          <h1 className="font-bold lg:text-7xl text-4xl md:text-5xl md:tracking-wider pb-4">Nimsa Journal</h1>
          <p className="py-2 text-left font-semibold select-none leading-relaxed">A constellation of Research Publications, by Nimsaites for Nimsaites</p>
          <p className="py-3 text-left font-semibold select-none leading-relaxed">Brought to you by National Directorate of Scientific Research and Journals</p>
          <button className="rounded-lg w-1/2 bg-green-600 py-2 px-4 mt-3 float-left text-white font-semibold" onClick={() => { navigate('/signup-option') }}>Get Started</button>
        </div>
        <div className="hidden lg:flex lg:w-1/2">
          <img src="./landing.png" alt="home" className='w-full' />
        </div>
      </div>

      <div className="md:mt-20 mt-32 w-11/12 max-w-full my-0 mx-auto lg:flex">
        <div className="lg:order-last lg:w-1/2">
          <div>
            <div className="md:py-10 lg:flex"><img src="./HalfCircle1.png" alt="home" /></div>
            <h1 className="font-bold text-4xl lg:text-7xl text-left leading-relaxed md:mt-0 mt-3">Looking for a Publication?</h1>
            <p className="mt-3 text-left leading-loose font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscingf elit. Nunc adio in et, lectus sit lorem id integer</p>
            <input type="search" placeholder="search" className="outline-none border py-2 placeholder-green-800 text-center float-left mt-4 border rounded py-1 px-7" />
          </div>
        </div>
        <div className="lg:flex lg:order-first lg:w-1/2 md:mt-0 mt-20">
          <div className="md:flex md:justify-center mt-4 md:items-center">
            <img src="./landing2.png" className='' alt="home" />
          </div>
        </div>
        {/* 
              style={{height:"500px", width:"500px"}} */}
      </div>


      <div className="lg:flex lg:justify-between lg:items-center w-11/12 max-w-full my-0 mx-auto md:mt-20 lg:mt-6">
        <div className="lg:w-1/2">
          <div className="lg:flex py-5"><img src="./yellow.png" alt="home" /></div>
          <h1 className="font-bold text-3xl lg:text-7xl tracking-wider pb-4">Publish your research papers.</h1>
          <p className="font-semibold select-none leading-loose">A constellation of Research Publications, by Nimsaites for Nimsaites</p>
          <p className="font-semibold select-none leading-loose mt-3">Brought to you by National Directorate of Scientific Research and Journals</p>
          <button className="rounded-lg bg-green-600 py-2 px-9 mt-3 float-left text-white font-semibold" onClick={() => { navigate('/publish') }}>Get Started</button>
        </div>

        <div className="md:hidden md:flex lg:w-1/2 lg:flex mt-20 lg:mt-6 md:hidden">
          <div className='lg:flex lg:flex-col lg:w-full '>
            <h1 className='font-bold opacity-25 text-2xl ml-6'>Topics</h1>
            <div className='flex justify-around lg:ml-6'>
              <div className="lg:w-1/2">
                <div className="my-4 py-2 lg:px-6 lg:py-3 lg:mr-2 px-2 text-xs rounded-full border text-center select-none cursor-pointer">Career</div>
                <div className="my-4 py-2 lg:px-6 lg:py-3 lg:mr-2 px-2 text-xs rounded-full border text-center select-none cursor-pointer">Genetics/Birth defects</div>
                <div className="my-4 py-2 lg:px-6 lg:py-3 lg:mr-2 px-2 text-xs rounded-full border text-center select-none cursor-pointer">Injuries</div>
                <div className="my-4 py-2 lg:px-6 lg:py-3 lg:mr-2 px-2 text-xs rounded-full border text-center select-none cursor-pointer">Mental Health</div>
              </div>
              <div className="lg:w-1/2">
                <div className="my-4 py-2 lg:px-6 lg:py-3 lg:ml-2 px-2 text-xs rounded-full border text-center select-none cursor-pointer">Diabetes Mellitus</div>
                <div className="my-4 py-2 lg:px-6 lg:py-3 lg:ml-2 px-2 text-xs rounded-full border text-center select-none cursor-pointer">Infections</div>
                <div className="my-4 py-2 lg:px-6 lg:py-3 px-2 text-xs rounded-full border text-center select-none cursor-pointer">Environmental Health</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='hidden md:flex lg:hidden w-11/12 max-w-full my-0 mx-auto mt-24 flex justify-center items-center flex-col'>
        <h1 className='select-none mb-3 font-bold text-3xl'>Resources for...</h1>
        <div className='cursor-pointer rounded-full border-2 flex justify-center items-center py-2 px-6 w-full font-serif font-thin text-sm my-3'>Authors</div>
        <div className='cursor-pointer rounded-full border-2 flex justify-center items-center py-2 px-6 w-full font-serif font-thin text-sm my-3'>Librarians</div>
        <div className='cursor-pointer rounded-full border-2 flex justify-center items-center py-2 px-6 w-full font-serif font-thin text-sm my-3'>Societies</div>
        <div className='cursor-pointer rounded-full border-2 flex justify-center items-center py-2 px-6 w-full font-serif font-thin text-sm my-3'>Sponsors and advertisers</div>
      </div>


      <div className="flex justify-center items-center mt-8 w-11/12 max-w-full my-0 mx-auto">
        <div className="">
          <div className="flex flex-col items-center justify-center w-full mb-8">
            <h1 className="font-bold text-3xl lg:text-5xl text-center py-3">Join over 200+ Nimsaites and become published today.</h1>
            <button className="rounded-lg font-semibold text-white py-2 px-9 bg-green-800 my-3" onClick={() => { navigate('/signup-option') }}>Join For Free</button>
          </div>
        </div>
      </div>


      <div className="flex flex-col justify-center items-center bg-black py-6">
        <h1 className="font-bold text-white text-2xl py-8">Our Editorial Team.</h1>

        <div className="lg:flex md:flex md:justify-center md:items-center ml-16">
          <div className="lg:my-6 lg:ml-16">
            <img src="./dr1.png" className="object-fill" alt="home" />
            <p className="mt-4 font-bold text-white text-left">Dr. Ossai Jude</p>
            <p className="text-white font-sans font-light text-sm w-10/12 my-3 text-left leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscingf elit. Nunc adio in et, lectus sit lorem id integer</p>
            <button className='rounded-lg text-white bg-green-500 py-2 px-6 font-semibold shadow-medium'>Read More...</button>
          </div>
          <div className="my-6">
            <img src="./dr2.png" alt="home" />
            <p className="mt-4 font-bold text-white text-left">Dr. Temilade</p>
            <p className="text-white font-sans font-light text-sm w-10/12 my-3 text-left leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscingf elit. Nunc adio in et, lectus sit lorem id integer</p>
            <button className='rounded-lg text-white bg-green-500 py-2 px-6 font-semibold shadow-medium'>Read More...</button>
          </div>
          <div className="my-6">
            <img src="./dr3.png" alt="home" />
            <p className="mt-4 font-bold text-white text-left">Dr. Tosin Oke</p>
            <p className="text-white font-sans font-light text-sm w-10/12 my-3 text-left leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscingf elit. Nunc adio in et, lectus sit lorem id integer</p>
            <button className='rounded-lg text-white bg-green-500 py-2 px-6 font-semibold shadow-medium'>Read More...</button>
          </div>
        </div>

        {/* <div className="py-5"><button className="py-2 px-10 text-white font-bold bg-green-700 rounded-lg">Read More....</button></div> */}
      </div>

      <div className="lg:flex justify-evenly bg-gray-900 py-5 text-left">
        <div className='w-11/12 max-w-full my-0 mx-auto md:flex md:justify-between lg:justify-between'>
          <div className="">
            <p className="text-white font-medium font-sans text-lg select-none">Product</p>
            <p className="tracking-widest my-4 text-white font-sans font-light text-sm my-3 cursor-pointer">Overview</p>
            <p className="tracking-widest my-4 text-white font-sans font-light text-sm my-3 cursor-pointer">Features</p>
            <p className="tracking-widest my-4 text-white font-sans font-light text-sm my-3 cursor-pointer">Tutorials</p>
            <p className="tracking-widest my-4 text-white font-sans font-light text-sm my-3 cursor-pointer">Pricing</p>
            <p className="tracking-widest my-4 text-white font-sans font-light text-sm my-3 cursor-pointer">Releases</p>
          </div>
          <div className="">
            <p className="text-white font-medium font-sans text-lg select-none">Company</p>
            <p className="tracking-widest my-4 text-white font-sans font-light text-sm my-3 cursor-pointer">About</p>
            <p className="tracking-widest my-4 text-white font-sans font-light text-sm my-3 cursor-pointer">Press</p>
            <p className="tracking-widest my-4 text-white font-sans font-light text-sm my-3 cursor-pointer">Careers</p>
            <p className="tracking-widest my-4 text-white font-sans font-light text-sm my-3 cursor-pointer">Contact</p>
            <p className="tracking-widest my-4 text-white font-sans font-light text-sm my-3 cursor-pointer">Partners</p>
          </div>
          <div className="">
            <p className="text-white font-sans font-medium text-lg select-none">Legal</p>
            <p className="tracking-widest my-4 text-white font-sans font-light text-sm my-3 cursor-pointer">Cookies Policy</p>
            <p className="tracking-widest my-4 text-white font-sans font-light text-sm my-3 cursor-pointer">Privacy Policy</p>
            <p className="tracking-widest my-4 text-white font-sans font-light text-sm my-3 cursor-pointer">Terms of Service</p>
            <p className="tracking-widest my-4 text-white font-sans font-light text-sm my-3 cursor-pointer">Law Enforcement</p>
            <p className="tracking-widest my-4 text-white font-sans font-light text-sm my-3 cursor-pointer">{

            }</p>
          </div>
          <div className="">
            <p className="text-white font-sans font-medium text-lg select-none">Follow us</p>
            <p className="tracking-widest my-4 text-white font-sans font-light text-sm my-3 cursor-pointer">Facebook</p>
            <p className="tracking-widest my-4 text-white font-sans font-light text-sm my-3 cursor-pointer">Dribble</p>
            <p className="tracking-widest my-4 text-white font-sans font-light text-sm my-3 cursor-pointer">Twitter</p>
            <p className="tracking-widest my-4 text-white font-sans font-light text-sm my-3 cursor-pointer">Instagram</p>
            <p className="tracking-widest my-4 text-white font-sans font-light text-sm my-3 cursor-pointer">LinkedIn</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 border-t-2 border-gray-500 py-4 flex justify-center items-center">
        <p className="text-white font-light select-none tracking-wide">@ 2022 NMSA Journals. All rights reserved</p>
      </div>
    </>
  );
}

export default Home;