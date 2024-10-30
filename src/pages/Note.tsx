import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {notes} from "../utils/fakeData"
import Return from '../components/Return';
import { dateFn } from '../utils/convertDate';


type NotesType = {
    id:number,
    title:string,
    content:string,
    date:string,
    favorites:boolean
  }

function Note() {
    const {id} = useParams();
    const [note,setNote] = useState<NotesType[]>([]);

    useEffect(()=>{
        const filterNote = notes.filter((eachOne)=> eachOne.id === Number(id));
        setNote(filterNote);
        
    },[])

    return (
    <React.Fragment>
        <div className=' flex flex-col gap-5'>
            <header className=' flex justify-between px-1 py-2'>
                <Return text='←' path='/' size={true}/>
                <div className=' grid grid-cols-2 gap-4'>
                    <button className='px-1 rounded-md ring-1 ring-[#5F5AC9] text-[#5F5AC9]'>Edit</button>
                    <button className='px-1 rounded-md ring-1 ring-[#ff4d46] text-[#ff4d46]'>Delete</button>

                </div>
            </header>
            <section className='  py-3 px-1 mx-1'>
                {
                    note.map((note)=>{
                        return(
                            <div key={note.id} className=' flex flex-col gap-3 px-2'>
                                <span className=' flex items-center  gap-2  text-gray-500'><span className=' font-light text-xs'>Created on: </span>{dateFn(note.date)}</span>
                                <p className=' text-lg  font-medium'>{note.title}</p>
                                <article>{note.content}</article>
                            </div>   
                        )
                    })
                }
            </section>
        </div>        
    </React.Fragment>
  )
}

export default Note