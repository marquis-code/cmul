import React from 'react';
import {useNavigate} from 'react-router-dom';

const Publish = () => {
    const navigate = useNavigate();
    return (
            <>
        <div className='lg:flex w-11/12 max-w-full my-0 mx-auto'>
           <div className='lg:w-1/2 lg:mr-2'>
               <div className='text-white font-semibold text-lg bg-black py-3 rounded-lg mt-4'><h1 className='ml-4'>Publish your paper</h1></div>
               <div className='lg:flex md:flex mt-3 lg:mt-6 bg-gray-100'>
                   <div className='px-4 py-6'>
                       <h1 className='font-bold font-sans text-lg mb-2'>Guidelines for submission.</h1>
                       <p className='text-sm tracking-wider text-semibold'>
                          Lorem ipsum dolor sit amet, consectetur adipiscingf elit. Nunc adio in et, lectus sit lorem id integer
                         Lorem ipsum dolor sit amet, consectetur adipiscingf elit. Nunc adio in et, lectus sit lorem id integer 
                         Lorem ipsum dolor sit amet, consectetur adipiscingf elit. Nunc adio in et, lectus sit lorem id integer
                         Lorem ipsum dolor sit amet, consectetur adipiscingf elit. Nunc adio in et, lectus sit lorem id integer
                       </p>
                   </div>
                   
               </div>
               <div className='flex justify-between my-5'>
                   <button className='rounded-lg text-white bg-green-600 font-semibold shadow-md py-2 px-4' onClick={() => {navigate('/publish-edit')}}>Continue</button>
                   <button  className='rounded-lg text-white bg-black font-semibold shadow-md py-2 px-4'>Track your paper</button>
               </div>
           </div>

           <div className='lg:w-1/2 lg:ml-2'>
               <div className='py-2 bg-green-500 rounded-lg mt-4'>
                   <h1 className='font-bold text-xl text-white ml-6'>Trending</h1>
                   <p className='text-sm text-white ml-6'>Most read journals</p>
               </div>
               <div className='lg:flex mt-3 lg:mt-9'>
                   <div className='lg:w-1/2 '>
                       <div className='lg:mr-2 flex justify-center items-center bg-gray-100 rounded-lg py-6 m-6 lg:m-0'>
                           <div><img src='./pub1.png' alt='home' /></div>
                        </div>
                       <div className='m-6 lg:m-0 lg:mx-4 lg:mt-2'>
                            <h1 className='font-bold text-xl mt-2 lg:mt-0'>Name of Publication</h1>
                            <p className="font-sans text-md text-sm font-thin leading-relaxed my-3">
                                    Lorem ipsum dolor sit amet, consectetur adipiscingf elit. Nunc adio in et, lectus sit lorem id integer
                                    Lorem ipsum dolor sit amet, consectetur adipiscingf elit. Nunc adio in et, lectus sit lorem id integer 
                            </p>
                       </div>
                   </div>
                   <div className='lg:w-1/2 '>
                       <div className='lg:mx-2  flex justify-center items-center rounded-lg bg-gray-100 py-6 m-6 lg:m-0'>
                           <div><img src='./pub3.png' alt='home' /></div>
                        </div>
                        <div className='m-6 lg:m-0 lg:mx-4 lg:mt-2'>
                            <h1 className='font-bold text-xl mt-2 lg:mt-0'>Name of Publication</h1>
                            <p className="font-sans text-md text-sm font-thin leading-relaxed my-3">
                                    Lorem ipsum dolor sit amet, consectetur adipiscingf elit. Nunc adio in et, lectus sit lorem id integer
                                    Lorem ipsum dolor sit amet, consectetur adipiscingf elit. Nunc adio in et, lectus sit lorem id integer 
                            </p>
                       </div>
                   </div>
                   <div className='lg:hidden lg:w-1/2 '>
                       <div className='lg:ml-2  flex justify-center items-center rounded-lg bg-gray-100 py-6 m-6 lg:m-0'>
                           <div><img src='./pub2.png' alt='home' /></div>
                        </div>
                        <div className='m-6 lg:m-0'>
                            <h1 className='font-thin text-xl mt-2 lg:mt-0'>Name of Publication</h1>
                            <p className="font-sans text-semibold font-semibold leading-relaxed my-3">
                             Lorem ipsum dolor sit amet, consectetur adipiscingf elit. Nunc adio in et, lectus sit lorem id integer
                             Lorem ipsum dolor sit amet, consectetur adipiscingf elit. Nunc adio in et, lectus sit lorem id integer 
                            </p>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       <div className='bg-black py-6 flex flex-col justify-center items-center'>
           <h1 className='text-xl text-white font-bold mb-2'>Follow us:</h1>
           <p className='text-thin text-sm font-sans text-white mt-2'>@ 2022 NIMSA JOURNALS. All rights reserved.</p>
       </div>
            </>
    )
}

export default Publish;