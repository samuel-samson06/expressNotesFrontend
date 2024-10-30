import React from 'react';
import {dateFn} from "../utils/convertDate.ts";
import { FaBookmark } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa6";

type NoteProps = {
  title:string,
  content:string,
  date:string,
  favorite:boolean
}

function Notes({title,content,date,favorite}:NoteProps) {
  return (
    <React.Fragment>
      <div className=' flex flex-col gap-1 rounded-md bg-gray-100 px-2 py-4'>
        <div className=' font-normal text-xs flex  items-center justify-between'> 
          <aside className=' flex items-center gap-2'>
            <section className=' size-2 rounded-full bg-red-500'/>
            <p className=' text-gray-600'>{dateFn(date)}</p>
          </aside>
          <p className=' text-base'>{favorite?<FaBookmark className=' text-red-500'/>:<FaRegBookmark/>}</p>
        </div>
        <p className=' font-medium text-lg'>{title}</p>
        <p className='text-gray-500 text-sm px-1'>{content.length>40?content.slice(0,30)+"...":content}</p>
      </div>
    </React.Fragment>
  )
}

export default Notes