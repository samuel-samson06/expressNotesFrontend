import React, { useState,useEffect, useContext } from 'react';
import axios from 'axios';
import Return from '../components/Return';
import { FaBookmark,FaRegBookmark} from "react-icons/fa6";
import { Context, CreateNoteType } from '../context/Context';
import { useNavigate } from 'react-router-dom';

function CreateNote() {
    const {notes,setNotes,createNote, setCreateNote} = useContext(Context);
    const navigate = useNavigate()
    const [favorite, setFavorite] = useState(false)
    const [emptyField, setEmptyField] = useState(false);
    const {title, content} = createNote;

    const handleCreateNote = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setCreateNote((prev:CreateNoteType)=>{
            return {...prev,[e.target.name]:e.target.value}
        })
    }
    const resetForm = ()=>{
        setCreateNote({title:"",content:""});
        setFavorite(false);
    }

    const createNoteBtn = async ()=>{
        if(title.trim() === "" || content.trim() === ""){
            setEmptyField(true)
        }
        else{
            try{
                const note = {...createNote,favorite}
                const response = await axios.post('http://localhost:5000/api/notes/',note)
                setNotes([...notes,response.data]);
                console.log(response.data);
                resetForm();
                navigate('/')
            }catch(error){
                console.log("ERROR ",error)
            }
        }
    }

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setEmptyField(false);
        },2000);

        return ()=>{
            clearTimeout(timer);
        }
    },[emptyField])

  return (
    <React.Fragment>
        <div>
            <Return text='←' path='/' size={true}/>
            <h1 className='text-center font-semibold text-lg'>Create Your Note</h1>
            <form action="" onSubmit={(e)=>e.preventDefault()} className=' px-4 flex flex-col gap-5'>
                <label htmlFor="" className=' flex flex-col gap-1'>
                    <span>Title:</span>
                    <input value={title} required onChange={handleCreateNote} name='title' className={`${emptyField&&"border-[0.5px] border-red-500"} outline-none bg-gray-100 px-2 rounded-md py-1`} type="text" placeholder='Enter Note Title..'/>
                </label>
                <label htmlFor="" className=' flex flex-col gap-1'>
                    <span>Note:</span>
                    <textarea rows={5} required value={content} onChange={handleCreateNote} name='content' className={`${emptyField&&"border-[0.5px] border-red-500"} outline-none bg-gray-100 px-2  rounded-md py-1`}  placeholder='Note....'/>
                </label>
                <section className=' flex justify-between'>
                    <p>Favorite:</p>
                    <section onClick={()=>setFavorite(!favorite)}>
                        {favorite?<button className=' text-red-500'><FaBookmark/></button>
                        :<button className=' text-red-500'><FaRegBookmark/></button>}
                    </section>
                </section>
                <section className=' grid grid-cols-2 gap-10'>
                    <button className=' font-medium  rounded-sm text-white bg-[#5F5AC9]' onClick={createNoteBtn}>Create Note</button>
                    <Return text='Cancel' path='/' ring={true} color='5F5AC9'/>
                </section>
            </form>
        </div>
    </React.Fragment>
  )
}

export default CreateNote