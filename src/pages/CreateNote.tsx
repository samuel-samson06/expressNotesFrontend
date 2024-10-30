import React from 'react';
import Return from '../components/Return';
import { FaBookmark } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa6";

function CreateNote() {
  return (
    <React.Fragment>
        <div>
            <Return text='←' path='/' size={true}/>
            <h1 className='text-center font-semibold text-lg'>Create Your Note</h1>
            <form action="" className=' px-4 flex flex-col gap-5'>
                <label htmlFor="" className=' flex flex-col gap-1'>
                    <span>Title:</span>
                    <input className=' outline-none bg-gray-100 px-2 rounded-md py-1' type="text" placeholder='Enter Note Title..'/>
                </label>
                <label htmlFor="" className=' flex flex-col gap-1'>
                    <span>Note:</span>
                    <textarea rows={5} className=' outline-none bg-gray-100 px-2  rounded-md py-1'  placeholder='Note....'/>
                </label>
                <section className=' flex justify-between'>
                    <p>Favorite:</p>
                    <section>
                        <button className=' text-red-500'><FaRegBookmark/></button>
                        <button className=' text-red-500'><FaBookmark/></button>
                    </section>
                </section>
                <section className=' grid grid-cols-2 gap-10'>
                    <button className=' font-medium  rounded-sm text-white bg-[#5F5AC9]'>Create</button>
                    <Return text='Cancel' path='/' ring={true} color='5F5AC9'/>
                    {/* <button className=' font-medium ring-1 rounded-sm ring-[#5F5AC9]'>Cancel</button> */}
                </section>
            </form>
        </div>
    </React.Fragment>
  )
}

export default CreateNote