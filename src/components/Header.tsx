import React from 'react'
import profile from "../assets/profile_mock_up.svg"
import { Link } from 'react-router-dom'


type HeaderProp = {
    user_name?:string,
    header:boolean,
    heading?:string,
    write_up?:string
}
function Header({user_name,header,heading,write_up}:HeaderProp) {
  return (
    <React.Fragment>
      <div>
        {header && 
        <div className=' flex items-center justify-between'>
          <p className=' text-xl'> 
            <span className=' font-mono'>Hello </span> <span className=' font-semibold'>{user_name}</span>
          </p>
          <Link to={"/account"}>
            <img src={profile} alt="User Profile" className=' w-14'/>
          </Link>
        </div>
        }
        <article className=' px-4 py-2 flex flex-col gap-2'>
          <h1 className=' font-semibold text-2xl'>{heading}</h1>
          <p className='  font-light'>{write_up}</p>
        </article>
      </div>
    </React.Fragment>
  )
}

export default Header