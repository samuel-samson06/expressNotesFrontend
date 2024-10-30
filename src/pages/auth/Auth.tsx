import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Return from '../../components/Return'


function Auth() {

  const location = useLocation();
  const navigate = useNavigate()
  const pathname = location.pathname.split("/")
  useEffect(()=>{
    if(pathname[pathname.length-1]=="auth" || pathname[pathname.length-1]=="" ){
      navigate("login")
    }
  },[])

  return (
    <React.Fragment>
        <div className=''>
            <Return path='/auth/login' text='←' size={true}/>
            <main>
                <Outlet/>
            </main>
        </div>
    </React.Fragment>
  )
}

export default Auth