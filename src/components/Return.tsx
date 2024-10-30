import React from 'react'
import { useNavigate } from 'react-router-dom'

type returnProp = {
  path:string,
  ring?: boolean,
  text:string,
  color?:string,
  size?:boolean
}


function Return({path,ring,text,color,size}:returnProp) {
    const navigate = useNavigate();

    const returnBack =()=>{
        navigate(path);
    }
  return (
    <React.Fragment>
        <button onClick={returnBack} className={` rounded-sm ${ring&&` ring-1 ring-[#${color}] text-[#${color}]`} ${size&&"text-2xl"} px-2`}>{text}</button>
    </React.Fragment>
  )
}

export default Return