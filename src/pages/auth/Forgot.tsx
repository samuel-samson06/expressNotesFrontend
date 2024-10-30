import React from 'react'
import Header from '../../components/Header'
import { Link } from 'react-router-dom'

function Forgot() {
  return (
    <React.Fragment>
        <div>
            <Header header={false} heading='Forgot Password' write_up='Lets Reset Your Password  ' />
            <form action="" className=' px-5 py-10  grid grid-cols-1 gap-5'>
                <label htmlFor="">
                  <input type="text" className=' border-b-[1px] border-[#5F5AC9] px-2 py-1 bg-white  w-full outline-none' placeholder='user-name' />
                </label>
                <label htmlFor="">
                  <input type="password" className=' border-b-[1px] border-[#5F5AC9] px-2 py-1 bg-white  w-full outline-none' placeholder=' new password' />
                </label>
                <label htmlFor="">
                  <input type="password" className=' border-b-[1px] border-[#5F5AC9] px-2 py-1 bg-white  w-full outline-none' placeholder='new password' />
                </label>
                <button className=' bg-[#5F5AC9] text-white  font-semibold rounded-md uppercase'>Reset</button>
                <p className=' text-[#5F5AC9] text-sm text-center'><Link to={"/auth/register"}>Sign Up?</Link></p>
            </form>
        </div>
    </React.Fragment>
  )
}

export default Forgot