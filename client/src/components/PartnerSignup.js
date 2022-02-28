import React from 'react';
import { useNavigate } from 'react-router-dom';

const PartnerSignup = () => {
  const navigate = useNavigate();
    return (
        <>
        <div className="lg:flex lg:items-center">
            <div className="lg:w-1/2">
              <div className='lg:flex flex-col'>
              <div className="py-3 border-b flex flex-col items-center">
                  <div className='p-4'>
                    <h1 className="lg:text-5xl text-4xl font-bold font-sans select-none py-3">A NIMSAITE ?</h1>
                    <p className="py-2 text-left font-semibold select-none leading-loose">A constellation of Research Publications, by Nimsaites for Nimsaites</p>
                    <button className="text-white font-semibold font-mono bg-green-700 my-4 py-2 px-4 rounded lg:w-1/4 select-none my-4 shadow-md" onClick={() => {navigate('/register')}}>Sign Up</button>
                  </div>
               </div>
               <div className="py-3 border-t flex flex-col items-center">
                  <div className='p-4'>                                                      
                    <h1 className="lg:text-5xl text-4xl font-bold font-sans select-none py-3">A Partner ?</h1>
                    <p className="py-2 text-left font-semibold select-none leading-loose">A constellation of Research Publications, by Nimsaites for Nimsaites</p>
                    <button className="text-white font-semibold font-mono bg-green-700 my-4 py-2 px-4 rounded lg:w-1/4 select-none my-4 shadow-md" onClick={() => {navigate('/signup')}}>Sign Up</button>
                  </div>
               </div>
              </div>
            </div>
            <div className="hidden lg:flex  lg:w-1/2">
                <img src="./landing.png" style={{width:'673px', height:'759px'}} alt="home"/>
            </div>
        </div>
        <div className='bg-black py-6 flex flex-col justify-center items-center'>
           <h1 className='text-xl text-white font-bold mb-2'>Follow us:</h1>
           <p className='text-thin text-sm font-sans text-white mt-2'>@ 2022 NIMSA JOURNALS. All rights reserved.</p>
       </div>
        </>
    )
}

export default PartnerSignup;