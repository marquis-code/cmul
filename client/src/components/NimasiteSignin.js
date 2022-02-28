import React, { useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import { showErrorMessage } from '../helpers/messages';
import { showLoading } from '../helpers/loading';
import { nimasiteSignin } from '../apis/auth';
const NimasiteSignin = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
        errorMsg: false,
        loading: false
    });

    const {email, password, errorMsg, loading } = user;

    const handleChange = (e) => {
        const fieldValue = e.target.value;
        const fieldName = e.target.name;
        setUser({ ...user, [fieldName]: fieldValue, errorMsg: '' });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = user;
        if (isEmpty(email) || isEmpty(password)) {
            setUser({ ...user, errorMsg: 'All Field are required' });
        } else if (!isEmail(email)) {
            setUser({ ...user, errorMsg: 'Invalid Email address' });
        } else {
            setUser({ ...user, loading: true })
            const formData = {email, password}
            console.log(formData);
            nimasiteSignin(formData)
                .then(() => {
                  /* Perform redirection here here */
                })
                .catch((error) => {
                    setUser({ ...user, loading: false, errorMsg: error.response.data.errorMessage })
                })
        }
    }

    return (
        <>
            <div className="lg:flex lg:items-center my-10">
                <div className="lg:flex flex-col justify-center items-center lg:w-1/2">
                    <div className=''>
                        <form noValidate onSubmit={handleSubmit} className="flex flex-col items-center border-t-2 shadow-md rounded-lg lg:m-0 m-6 lg:px-10 md:mx-56">
                            <div className='flex justify-center items-center text-2xl font-bold my-3'>Sign in</div>
                            {loading && showLoading()}
                            {errorMsg && showErrorMessage(errorMsg)}
                            <div className="">
                                <input type="email" name='email' value={email} onChange={handleChange} placeholder="Email" className="border-2 rounded-md  py-2 px-10 my-3 w-full outline-none" />
                            </div>
                            <div className="">
                                <input type="password" name='password' value={password} onChange={handleChange} placeholder="Password" className="border-2 rounded-md  py-2 px-10 my-3 w-full outline-none" />
                            </div>
                            {loading ? (
                                <button disabled className="text-white font-semibold font-sans bg-green-700 my-4 py-2 px-4 rounded shadow-md select-none cursor-not-allowed disable" >Signing in...</button>
                            ) : (
                                    <button className="text-white font-semibold font-sans bg-green-700 my-4 py-2 px-4 rounded shadow-md select-none" >Sign in</button>
                                )}
                        </form>
                    </div>

                </div>
                <div className="hidden lg:flex object-cover w-1/2">
                    <img src="./landing.png" style={{ width: '662px', height: '759px' }} alt="home" />
                </div>
            </div>
            <div className='bg-black py-6 flex flex-col justify-center items-center'>
                <h1 className='text-xl text-white font-bold mb-2'>Follow us:</h1>
                <p className='text-thin text-sm font-sans text-white mt-2'>@ 2022 NIMSA JOURNALS. All rights reserved.</p>
            </div>
        </>
    )
}

export default NimasiteSignin;