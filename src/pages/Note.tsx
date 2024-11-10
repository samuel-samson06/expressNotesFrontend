import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Return from '../components/Return';
import { dateFn } from '../utils/convertDate';
import { Context } from '../context/Context';
import axios from 'axios';


type NotesType = {
    _id:string,
    title:string,
    content:string,
    createdAt:string,
    favorites:boolean
  }
  function Note() {
      const navigate = useNavigate();
      const {id} = useParams();
      const{notes,createNote, setCreateNote} = useContext(Context)
    const [note,setNote] = useState<NotesType[]>([]);

    const deleteNote = async()=>{
        try{
            const res = await axios.delete(`http://localhost:5000/api/notes/${id}`);
            console.log(res)
            navigate('/');
        }catch(error){
            console.log("Error",error)
        }
    }

    const editNote = ()=>{
        setCreateNote(()=>{
            return {content:note[0].content,title:note[0].title}
        })
        navigate("/create")
        console.log(note[0])
    }

    useEffect(()=>{
        const filterNote = notes.filter((eachOne:NotesType)=> eachOne._id === id);
        setNote(filterNote);
    },[])

    return (
    <React.Fragment>
        <div className=' flex flex-col gap-5'>
            <header className=' flex justify-between px-1 py-2'>
                <Return text='←' path='/' size={true}/>
                <div className=' grid grid-cols-2 gap-4'>
                    <button onClick={editNote} className='px-1 rounded-md ring-1 ring-[#5F5AC9] text-[#5F5AC9]'>Edit</button>
                    <button onClick={deleteNote} className='px-1 rounded-md ring-1 ring-[#ff4d46] text-[#ff4d46]'>Delete</button>

                </div>
            </header>
            <section className='  py-3 px-1 mx-1'>
                {
                    note.map((note)=>{
                        return(
                            <div key={note._id} className=' flex flex-col gap-3 px-2'>
                                <span className=' flex items-center  gap-2  text-gray-500'><span className=' font-light text-sm'>Created on: </span>{dateFn(note.createdAt)}</span>
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