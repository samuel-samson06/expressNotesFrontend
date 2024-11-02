import React, { useContext, useState } from 'react'
import profile from "../assets/profile_mock_up.svg";
import Favorites from '../components/Favorites';
import Return from '../components/Return';
import { Context } from '../context/Context';
import { FiMoon } from 'react-icons/fi';
import {MdKeyboardArrowRight} from "react-icons/md";
import {MdKeyboardArrowDown} from "react-icons/md";
import {FaHeart} from "react-icons/fa";
import { CiLogout } from 'react-icons/ci';



function Account() {
    const {darkMode,setDarkMode} =useContext(Context);

    const [revealFavorites, setRevealFavorites] = useState<boolean>(false);

    const handleDarkMode = ()=>{
        // alert("Okay");
        setDarkMode((prev:boolean)=>{
            return !prev;
        })
    }
    const handleRevealFav =()=>{
        setRevealFavorites(prev=>!prev);
    }
  return (
    <React.Fragment>
        <div className='bg-gray-200  h-screen'>
            <Return path='/' text='←' size={true}/>
            <header className=' gap-1 py-5 flex flex-col items-center justify-center'>
                <img src={profile} alt="Fake Profile" className=' rounded-full w-16' />
                <p className='font-serif'>Samuel Samson</p>
                <p className=' font-mono'>Samuel@gmail.com</p>
            </header>
            <main className=' px-2 py-1 bg-white'>
                <p className=' font-semibold text-xl  py-1'>Preference</p>
                <section onClick={handleDarkMode} className=' flex justify-between items-center'>
                    <p className=' flex items-center gap-3'><FiMoon className=' text-xl'/> <span>Dark Mode</span></p>
                    <div className={` w-14 border-[1px]  bg-gray-300 ${darkMode?"bg-green-500":"bg-gray-400"} rounded-full`}>
                        <div className={` ${darkMode?" translate-x-7":" translate-x-0"} transition-all bg-white size-6 rounded-full`}></div>
                    </div>
                </section>
            </main>
            <br />
            <main className=' px-2 py-2 bg-white'>
                <p className=' font-semibold text-xl py-1'>Favorite</p>
                <section className=' flex justify-between items-center'>
                    <p className=' flex items-center gap-3' ><FaHeart className=' text-lg text-red-500'/> <span>Favorites</span></p>
                    <p onClick={handleRevealFav} className=' cursor-default '>{revealFavorites?<MdKeyboardArrowDown className=' text-xl'/>:<MdKeyboardArrowRight className=' text-xl'/>}</p>
                </section>
                <Favorites reveal={revealFavorites}/>
            </main>
            <br />
            <main className=' px-2 py-1 bg-white'>
                <p className=' font-semibold text-xl py-2'>Logout</p>
                <section className=' flex justify-between items-center'>
                    <p className=' flex items-center gap-3'><CiLogout/> <span>Logout</span></p>
                </section>
            </main>
        </div>
    </React.Fragment>
  )
}

export default Account