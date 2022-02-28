const NimsaDatabase =() => {
    return(
       <>
       <div className='md:hidden lg:hidden rounded-lg py-2 w-11/12 max-w-full my-0 mx-auto flex justify-between items-center mt-4'>
          <div><input type='search' placeholder='Search Nimsa Journal' className='px-3 outline-none rounded-lg py-1 border' /></div>
          <div className='py-1 px-4 font-bold text-lg bg-black text-white rounded-lg'>+</div>
       </div>
       <div className='lg:flex w-11/12 max-w-full my-0 mx-auto'>
           <div className='lg:w-1/2 lg:mr-2'>
               <div className='text-white font-semibold text-xl bg-black py-4 rounded-lg mt-4'><h1 className='ml-4'>Nimsa Database</h1></div>
               <div className='lg:flex md:flex mt-3 lg:mt-6'>
                   <div className='bg-gray-100 mb-3  lg:mr-2 md:w-1/2 lg:w-1/2 flex justify-center items-center py-2 lg:px-3 rounded-lg  shadow-sm m-4'>
                      <div className='m-2'><img src='./database.png' alt='home' /></div>
                   </div>
                   <div className='bg-gray-100 mt-3 lg:ml-2 md:w-1/2 lg:w-1/2 flex justify-center items-center py-2 lg:px-3 rounded-lg  shadow-sm m-4'>
                       <div className='m-2'><img src='./database2.png' alt='home' /></div>
                   </div>
               </div>
               <div className='text-white font-semibold py-2 px-3 rounded-lg bg-green-600 lg:w-1/2 md:w-1/2 flex justify-center items-center mt-4'>Call For Submissions</div>
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

export default NimsaDatabase;