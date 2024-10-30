import React from 'react'
import profile from "../assets/profile_mock_up.svg";
import Favorites from '../components/Favorites';
import Return from '../components/Return';

function Account() {
  return (
    <React.Fragment>
        <div className='bg-gray-200  h-screen'>
            <Return path='/' text='←' size={true}/>
            <header className=' gap-1 py-5 flex flex-col items-center justify-center'>
                <img src={profile} alt="Fake Profile" className=' rounded-full w-16' />
                <p className='font-serif'>Samuel Samson</p>
                <p className=' font-mono'>Samuel@gmail.com</p>
            </header>
            <main className=' px-2 py-2 bg-white'>
                <p className=' font-semibold text-xl  '>Preference</p>
                <section className=' flex justify-between items-center'>
                    <p>icon <span>Dark Mode</span></p>
                    <div className=' w-14 border-[1px] px-1 bg-gray-100 border-gray-500 rounded-full'>
                        <div className=' bg-white size-6 rounded-full'></div>
                    </div>
                </section>
            </main>
            <br />
            <main className=' px-2 py-2 bg-white'>
                <p className=' font-semibold text-xl  '>Favorite</p>
                <section className=' flex justify-between items-center'>
                    <p>icon <span>Dark Mode</span></p>
                    <p>ICONS</p>
                </section>
                <Favorites/>
            </main>
            <br />
            <main className=' px-2 py-2 bg-white'>
                <p className=' font-semibold text-xl  '>Logout</p>
                <section className=' flex justify-between items-center'>
                    <p>icon <span>Logout</span></p>
                </section>
            </main>
        </div>
    </React.Fragment>
  )
}

export default Account