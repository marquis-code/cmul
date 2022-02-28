import React, {useState, useEffect, useRef} from 'react';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import { showErrorMessage, showSuccessMessage } from '../helpers/messages';
import { showLoading } from '../helpers/loading';
import {visitorSignup} from '../apis/auth';
// import {Spinners} from '../helpers/spinner';

const SignUp = () => {
   const [user, setUser] = useState({
    username : '',
    email : '',
    password : '',
    successMsg : false,
    errorMsg : false,
    loading : false
});

    const {username, email, password, successMsg, errorMsg, loading} = user;

    const handleChange = (e) => {
    const fieldValue = e.target.value;
    const fieldName = e.target.name;
    setUser({...user, [fieldName] : fieldValue, successMsg : '', errorMsg : ''});

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {username, email, password} = user;
        if(isEmpty(username) || isEmpty(email) || isEmpty(password)){
            setUser({...user, errorMsg : 'All Field are required'});
        } else if(!isEmail(email)) {
            setUser({...user, errorMsg : 'Invalid Email address'});
        } else {
            setUser({...user, loading : true})
            const formData = {username, email, password}
            console.log(formData);
            visitorSignup(formData)
            .then((response) => {
                setUser({
                username : '', 
                email : '', 
                password : '', 
                successMsg : response.data.successMessage, 
                errorMsg : '', 
                loading : false 
            })
            })
            .catch((error) => {
               setUser({...user, loading : false, errorMsg : error.response.data.errorMessage})
            })
        }
    }
    const inputRef = useRef();

    useEffect(() => {
    inputRef.current.focus();
    }, []);

    return (
        <>
        <div className='lg:flex lg:items-center my-10'>
            <div className='w-11/12 max-w-full my-0 mx-auto border rounded-lg shadow-lg mt-10 lg:w-1/2 lg:mr-3 lg:ml-6'>
                <div className='flex justify-center items-center text-2xl font-bold my-3'>Sign up</div>
                <form onSubmit={handleSubmit} className='m-6' noValidate>
                    {loading && showLoading()}
                    {errorMsg && showErrorMessage(errorMsg)}
                    {successMsg && showSuccessMessage(successMsg)}
                    <div className=""> 
                        <input ref={inputRef} type="text" name='username' value={username} onChange={handleChange}  placeholder="Name" className="rounded-lg py-2 px-10 my-3 w-full border border-gray-300 outline-none block" />
                    </div>
                    <div className="">
                        <input type="email" name='email' value={email} onChange={handleChange} placeholder="Email" className="rounded-lg py-2 px-10 my-3 w-full border border-gray-300 outline-none block"  />
                    </div>
                    <div className="">
                        <input type="password" name='password' value={password} onChange={handleChange} placeholder="Password" className="rounded-lg py-2 px-10 my-3 w-full border border-gray-300 outline-none block"  />
                    </div>
                    {loading ? (
                       <button disabled className="text-white font-semibold font-sans bg-green-700 my-4 py-2 px-4 rounded shadow-md select-none cursor-not-allowed disable" >Signing up...</button>
                    ) : (
                        <button className="text-white font-semibold font-sans bg-green-700 my-4 py-2 px-4 rounded shadow-md select-none" >Sign Up</button>
                    )}
                </form>
            </div>
            <div className='hidden lg:flex lg:w-1/2 lg:ml-3'>
                <img src="./landing.png" alt="home"/>
            </div>
        </div>
        <div className='bg-black py-6 flex flex-col justify-center items-center'>
           <h1 className='text-xl text-white font-bold mb-2'>Follow us:</h1>
           <p className='text-thin text-sm font-sans text-white mt-2'>@ 2022 NIMSA JOURNALS. All rights reserved.</p>
       </div>
        </>
    )
}

export default SignUp;