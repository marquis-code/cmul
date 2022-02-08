import React from 'react';

const Home = () => {
        return (
          <div className="App my-0 mx-4">
          <div className="border-2 border-red-500 flex justify-between">
            <div className="border-2 border-red-500 w-1/2 mr-2">
               <h1 className="font-bold text-5xl text-left">Nimsa Journal</h1>
               <p className="mt-5 text-left">A constellation of Research Publications, by Nimsaites for Nimsaites</p>
               <p className="mt-3 text-left">Brought to you by National Directorate of Scientific Research and Journals</p>
               <button className="rounded-lg bg-green-600 py-2 px-5 mt-3 float-left text-white font-semibold">Get Started</button>
            </div>
            <div className="border-2 border-red-500 w-1/2 ml-2">
              <img src="./dev.png" className="h-30 w-30" alt="home"/>
            </div>
          </div>
          <div className="border-2 border-red-500 flex justify-between mt-3">
            <div className="border-2 border-red-500 w-1/2 order-2 ml-2">
               <h1 className="font-bold text-4xl text-left">Looking for a Publication?</h1>
               <p className="mt-3 text-left leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscingf elit. Nunc adio in et, lectus sit lorem id integer</p>
                <input type="search" placeholder="search" className="placeholder-green-800 text-center float-left mt-4 border rounded py-1 px-7"/>
            </div>
            <div className="border-2 border-red-500 w-1/2 order-1 mr-2">
            <img src="./dev.png" alt="home"/>
            </div>
          </div>
      
          <div className="flex justify-between mt-6">
            <div className="w-1/2">
               <h1 className="font-bold text-4xl text-left leading-loose">Publish your research papers.</h1>
               <p className="text-left leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscingf elit. Nunc adio in et, lectus sit lorem id integer</p>
               <button className="rounded-lg bg-green-600 py-2 px-5 mt-3 float-left text-white font-semibold">Get Started</button>
            </div>
            <div className="w-1/2">
              <div className='flex justify-around'>
                <div className="w-1/2 mx-3">
                  <div className="rounded-full outline py-2 px-2">Career</div>
                  <div className="rounded-full my-5 outline py-2 px-2">Genetics/Birth defects</div>
                  <div className="rounded-full my-5 outline py-2 px-2">Injuries</div>
                  <div className="rounded-full outline py-2 px-4">Mental Health</div>
                </div>
                <div className="w-1/2 mx-3">
                  <div className="rounded-full outline py-2 px-3">Diabetes Mellitus</div>
                  <div className="rounded-full my-5 outline py-2 px-3">Infections</div>
                  <div className="rounded-full outline py-2 px-3">Environmental Health</div>
                </div>
              </div>
            </div>
          </div>
      
          <div className="py-5">
            <h1 className="font-bold text-3xl leading-loose">Join over 200+ Nimsaites and <br />become published today.</h1>
            <button className="rounded-lg font-semibold text-white py-2 px-9 bg-green-800 my-3">Join For Free</button>
          </div>
      
          <div className="flex flex-col justify-center items-center bg-black py-6">
            <h1 className="font-bold text-white text-2xl my-4">Our Editorial Team.</h1>
      
          <div className="flex">
            <div className="mx-6">
               <img src="./dev.png" className="object-fill" alt="home"/>
              <p className="mt-4 font-bold text-white text-left">Dr. Ossai Jude</p>
              <p className="text-white font-sans font-light text-sm my-3 text-left leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscingf elit. Nunc adio in et, lectus sit lorem id integer</p>
            </div>
            <div className="mx-6">
               <img src="./dev.png" alt="home"/>
              <p className="mt-4 font-bold text-white text-left">Dr. Temilade</p>
              <p className="text-white font-sans font-light text-sm my-3 text-left leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscingf elit. Nunc adio in et, lectus sit lorem id integer</p>
            </div>
            <div className="mx-6">
               <img src="./dev.png" alt="home"/>
              <p className="mt-4 font-bold text-white text-left">Dr. Tosin Oke</p>
              <p className="text-white font-sans font-light text-sm my-3 text-left leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscingf elit. Nunc adio in et, lectus sit lorem id integer</p>
            </div>
          </div>
      
          <button className="py-2 px-10 text-white font-bold bg-green-700 rounded-lg">Read More....</button>
          </div>
      
          <div className="flex justify-evenly bg-gray-900 py-5 text-left">
            <div className="">
              <p className="text-white text-left font-medium font-sans text-lg select-none">Product</p>
              <p className="text-white text-left font-sans font-light text-sm my-3 cursor-pointer">Overview</p>
              <p className="text-white text-left font-sans font-light text-sm my-3 cursor-pointer">Features</p>
              <p className="text-white text-left font-sans font-light text-sm my-3 cursor-pointer">Tutorials</p>
              <p className="text-white text-left font-sans font-light text-sm my-3 cursor-pointer">Pricing</p>
              <p className="text-white text-left font-sans font-light text-sm my-3 cursor-pointer">Releases</p>
            </div>
            <div className="">
              <p className="text-white text-left font-medium font-sans text-lg select-none">Company</p>
              <p className="text-white text-left font-sans font-light text-sm my-3 cursor-pointer">About</p>
              <p className="text-white text-left font-sans font-light text-sm my-3 cursor-pointer">Press</p>
              <p className="text-white text-left font-sans font-light text-sm my-3 cursor-pointer">Careers</p>
              <p className="text-white text-left font-sans font-light text-sm my-3 cursor-pointer">Contact</p>
              <p className="text-white text-left font-sans font-light text-sm my-3 cursor-pointer">Partners</p>
            </div>
            <div className="">
              <p className="text-white text-left font-sans font-medium text-lg select-none">Legal</p>
              <p className="text-white text-left font-sans font-light text-sm my-3 cursor-pointer">Cookies Policy</p>
              <p className="text-white text-left font-sans font-light text-sm my-3 cursor-pointer">Privacy Policy</p>
              <p className="text-white text-left font-sans font-light text-sm my-3 cursor-pointer">Terms of Service</p>
              <p className="text-white text-left font-sans font-light text-sm my-3 cursor-pointer">Law Enforcement</p>
              <p className="text-white text-left font-sans font-light text-sm my-3 cursor-pointer">Status</p>
            </div>
            <div className="">
              <p className="text-white text-left font-sans font-medium text-lg select-none">Follow us</p>
              <p className="text-white text-left font-sans font-light text-sm my-3 cursor-pointer">Facebook</p>
              <p className="text-white text-left font-sans font-light text-sm my-3 cursor-pointer">Dribble</p>
              <p className="text-white text-left font-sans font-light text-sm my-3 cursor-pointer">Twitter</p>
              <p className="text-white text-left font-sans font-light text-sm my-3 cursor-pointer">Instagram</p>
              <p className="text-white text-left font-sans font-light text-sm my-3 cursor-pointer">LinkedIn</p>
            </div>
          </div>
             <div className="bg-gray-900 border-t-2 border-gray-500 pt-4">
               <p className="text-white font-light select-none tracking-wide">@ 2022 NMSA journals. All rights reserved</p>
             </div>
      
             <div className="flex border-2 border-red-500 justify-center">
               <div className="w-1/2 flex flex-col items-center">
                 <div className="">
                      <h1 className="font-black text-4xl text-left leading-loose font-serif">A NIMSAITE ?</h1>
                      <p className="leading-loose text-semibold text-left">A constellation of Research Publication, by Nimsaites for Nimsaites</p>
                      <button className="rounded-lg text-white font-semibold py-2 px-5 float-left bg-green-600 mt-3">Sign Up</button>
                 </div>
      
                 <div className="border-2 underline border-red-600 my-4"></div>
                
                 <div className="">
                    <h1 className="font-black text-4xl text-left leading-loose font-serif">A partner ?</h1>
                    <p className="leading-loose text-semibold text-left">A constellation of Research Publication, by Nimsaites for Nimsaites</p>
                      <button className="rounded-lg text-white font-semibold py-2 px-5 float-left bg-green-600 mt-3">Sign Up</button>
                 </div>
               </div>
               <div className="w-1/2">
               <img src="./dev.png" alt="home"/>
               </div>
             </div>
      
             <div className="flex">
               <div className="shadow-lg outline border-2 border-red-500 w-2/3 flex flex-col justify-center items-center">
                   <h2 className="font-black font-sans text-xl">Sign Up Form</h2>
                  <div className="">
                     <div className="outline border-2 shadow-sm my-4 rounded-lg px-5">
                     <input type="text" placeholder="Name" className="py-2 outline-none"/>
                     </div>
                     <div className="outline border-2 shadow-sm my-4 rounded-lg px-5">
                     <input type="email" placeholder="Email" className="py-2 outline-none" />
                     </div>
                     <div className="outline border-2 shadow-sm my-4 rounded-lg px-5">
                     <input type="number" placeholder="Matric Number" className="py-2 outline-none" />
                     </div>
                     <div className="outline border-2 shadow-sm my-4 rounded-lg px-5">
                     <input type="text" placeholder="Medical College" className="py-2 outline-none" />
                     </div>
                     <div className="outline border-2 shadow-sm my-4 rounded-lg px-5">
                     <input type="password" placeholder="Password" className="py-2 outline-none" />
                     </div>
                  </div>
                 <div>
                 <button className="rounded-lg py-2 px-5 bg-green-600 float-center text-white font-semibold">Sign Up</button>
                 </div>
               </div>
               <div className="w-1/2">
               <img src="./dev.png" alt="home"/>
               </div>
             </div>
          </div>
        );  
}

export default Home;