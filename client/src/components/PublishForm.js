import React, { useState } from 'react';

const PublishForm = () => {
    const [journal, setJournal] = useState({
        journalTitle: '',
        journalAbstract: '',
        journalField: '',
        journalImage: null
    });

    const { journalTitle, journalAbstract, journalField, journalImage } = journal;

    const handleJournalImage = (e) => {
        setJournal({
            ...journal, [e.target.name]: e.target.files[0]
        })
    }

    const handleChange = (e) => {
        setJournal({
            ...journal, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('journalTitle', journalTitle)
        formData.append('journalAbstract', journalAbstract);
        formData.append('journalField', journalField);
        formData.append('journalImage', journalImage);
        console.log(formData);
    }
    return (
        <>
            <div className='lg:flex w-11/12 max-w-full my-0 mx-auto'>
                <div className='lg:w-1/2 lg:mr-2'>
                    <div className='text-white font-semibold text-lg bg-black py-3 rounded-lg mt-4'><h1 className='ml-4'>Publish your paper</h1></div>
                    <div className='lg:flex md:flex mt-3 lg:mt-6 bg-gray-100'>
                        <form onSubmit={handleSubmit} className='px-4 py-6 md:w-full'>
                            <div className='flex flex-col'>
                                <label className='text-green-500 font-semibold'>Page Title</label>
                                <input name='journalTitle' value={journalTitle} onChange={handleChange} type='text py-2 rounded-lg' placeholder='Enter your paper title here' className='my-3 py-2 rounded-lg px-3' />
                            </div>

                            <div className=''>
                                <label className='text-green-500 font-semibold'>Page Abstract</label>
                                <textarea name='journalAbstract' value={journalAbstract} onChange={handleChange} cols='10' rows='5' type='text' placeholder='Enter your paper title here' className='outline-none border w-full py-2 px-3 mt-3 rounded-lg shadow-md' />
                                <div className='flex justify-end text text-gray-500 mt-2 select-none font-semibold'>Maximum 5,000 characters</div>
                            </div>


                            <div className='lg:flex-col items-center justify-between py-3 md:flex'>
                                <div className=' lg:w-full md:w-6/12 md:mr-2'>
                                    <div className='my-3'>
                                        <p className='text-green-500 font-semibold my-2'>Field of Research</p>
                                        <select name='journalField' value={journalField} onChange={handleChange} className='w-full  rounded-lg shadow-md border outline-none cursor-pointer py-2 px-3'>
                                            <option className='default text-gray-500 font-mono'>Select field of research</option>
                                            <option value='Medical Microbiology' className='cursor-pointer font-semibold text-sm text-gray-500'>Medical Microbiology</option>
                                            <option value='Clinical Pathology' className='cursor-pointer font-semibold text-sm text-gray-500'>Clinical Pathology</option>
                                            <option value='Histopathology' className='cursor-pointer font-semibold text-sm text-gray-500'>Histopathology</option>
                                            <option value='Hematology' className='cursor-pointer font-semibold text-sm text-gray-500'>Hematology</option>
                                            <option value='Bacteriology and Parasitology' className='cursor-pointer font-semibold text-sm text-gray-500'>Parasitology and Bacteriology</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='py-4 md:w-6/12 md:ml-2 lg:ml-0 lg:w-full'>
                                    <div className=''>
                                        <div className='my-2'><label className='font-semibold text-gray-500 select-none my-2'>Upload Research</label></div>
                                        <div><input type="file" className='w-full rounded-lg shadow-sm p-2 bg-white border' name="journalImage" onChange={handleJournalImage} /></div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between my-5'>
                                <button className='rounded-lg text-white bg-green-600 font-semibold shadow-md py-2 px-6'>Submit</button>
                            </div>
                        </form>

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

export default PublishForm;