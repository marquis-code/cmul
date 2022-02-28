import React, {useState, useRef, useEffect} from 'react';

const Login = () => {
    const [user, setUser] = useState({
        email : '',
        password : ''
    });
    
    const {email, password} = user;
    
    const handleChange = (e) => {
    //   const fieldValue = e.target.value;
    //   const fieldName = e.target.name;
    //   setUser({...user, [fieldName] : fieldValue});
      setUser((prevState ) => {
           return [...prevState, ]
      })
    }

    const removeItem = (id) => {
       setUser((prevState) => {
           return prevState.filter(() => {})
       })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = user;
        const formData = {email, password}
        console.log(formData);
    }
    const inputRef = useRef();
    
    useEffect(() => {
      inputRef.current.focus();
    }, []);

    return (
        <>
        <div className="lg:flex">
            <div className="flex flex-col justify-center items-center lg:w-1/2 mb-6">
            <h1 className="text-3xl font-bold my-4">Welcome Back</h1>
                <div className='shadow rounded-lg py-16 border-x-2 border-b-2 px-10 lg:px-16'>
                    <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <h1 className="text-3xl font-bold my-4">Log in</h1>
                        <div className="">
                            <input type="email" ref={inputRef} name='email' value={email} onChange={handleChange} placeholder="Email" className="outline-none border-2 rounded py-2 px-10 my-3 w-full" />
                        </div>  
                        <div className="">
                            <input type="password" name='password' value={password} onChange={handleChange} placeholder="Password" className="outline-none border-2 rounded py-2 px-10 my-3 w-full" />
                        </div>
                        <button className="text-white font-semibold font-mono bg-green-700 my-4 py-2 px-4 rounded w-1/2 shadow-md">Log In</button>
                        <p className='my-3 font-semibold'>Forgoten password, click here to <span className='text-green-500 cursor-pointer'>Reset</span></p>
                    </form>
                </div>
            </div>
            <div className="hidden lg:flex object-cover lg:w-1/2">
              <img src="./landing.png" style={{width:'662px', height:'759px'}} alt="home"/>
            </div>
        </div>
        {/* <div className="bg-black flex flex-col justify-center items-center py-4">
              <div className="text-white font-bold font-mono my-3 select-none">NIMSA</div>
              <div className="flex">
                  <p className="font-thin text-white font-mono mx-3 select-none cursor-pointer">About</p>
                  <p className="font-thin text-white font-mono mx-3 select-none cursor-pointer">Features</p>
                  <p className="font-thin text-white font-mono mx-3 select-none cursor-pointer">Pricing</p>
                  <p className="font-thin text-white font-mono mx-3 select-none cursor-pointer">Careers</p>
                  <p className="font-thin text-white font-mono mx-3 select-none cursor-pointer">Help</p>
                  <p className="font-thin text-white font-mono mx-3 select-none cursor-pointer">Privacy Policy</p>
              </div>
        </div> */}
        </>
    )
}

export default Login;