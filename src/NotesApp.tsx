import React, { useContext } from 'react'
import Header from './components/Header';
import Search from './components/Search';
import Notes from './pages/Notes';
import {notes} from "./utils/fakeData.ts";
import { Link } from 'react-router-dom';
import { Context } from './context/Context.tsx';


type NotesType = {
    id:number,
    title:string,
    content:string,
    date:string,
    favorites:boolean
  }

function NotesApp() {
  const {search} = useContext(Context)

  const searchNotes = search.length===0?notes:notes.filter((eachNote)=>{
    return eachNote.title.toLowerCase().startsWith(search.toLowerCase())
  }) 


  return (
    <React.Fragment>
        <div className=' px-4 py-2 grid grid-cols-1 gap-8'>
            <header className='flex flex-col gap-5 '>
                <Header header={true} user_name='Samuel'/>
                <Search/>
            </header>
            <main className=' grid grid-cols-1 gap-4'>
            {
                searchNotes.length===0?<p className=' font-medium'>No Such Notes</p>:searchNotes.map((eachNote:NotesType)=>{
                  return(
                      <React.Fragment key={eachNote.id}>
                        <Link to={`/${eachNote.id}`}>
                          <Notes title={eachNote.title} content={eachNote.content} date={eachNote.date} favorite={eachNote.favorites}/>
                        </Link>
                      </React.Fragment>
                  )
                  })
            }
            <button className=' text-3xl text-center fixed bottom-3 right-3 bg-[#5F5AC9] text-white font-medium w-fit rounded-full px-2'><Link to={"/create"}>+</Link></button>
            </main>
        </div>
    </React.Fragment>
  )
}

export default NotesApp