import React from 'react'
import Header from '../../components/Header'
import img from "../../assets/notebook-login.svg";
import { Link } from 'react-router-dom';


function Login() {
  return (
    <React.Fragment>
        <div>
            <Header header={false} heading='Welcome Back' write_up='Sign In To Continue ' />
            <div className=' flex items-center justify-center'>
              <img src={img} alt=" Login Image"  className=' object-center  w-52'/>
            </div>
            <form action="" className=' px-5 py-10  grid grid-cols-1 gap-5'>
                <label htmlFor="">
                  <input type="email" className=' border-b-[1px] border-[#5F5AC9] px-2 py-1 bg-white  w-full outline-none' placeholder='email' />
                </label>
                <label htmlFor="">
                  <input type="password" className=' border-b-[1px] border-[#5F5AC9] px-2 py-1 bg-white  w-full outline-none' placeholder='password' />
                </label>
                <button className=' bg-[#5F5AC9] text-white  font-semibold rounded-md uppercase'>Login</button>
                <p className=' text-[#5F5AC9] text-sm text-center'><Link to={"/auth/forgot-password"}>Forgot Password?</Link></p>
            </form>
        </div>
    </React.Fragment>
  )
}

export default Login