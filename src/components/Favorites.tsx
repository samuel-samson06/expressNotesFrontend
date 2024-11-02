import React, { useEffect, useState } from 'react'
import {notes} from "../utils/fakeData";
import { Link } from 'react-router-dom';

interface ComponentType{
  reveal:boolean
}

function Favorites({reveal}:ComponentType) {
  interface NotesType{
    id:number,
    title:string,
    content:string,
    date:string,
    favorites:boolean
  }
  
  const [favorites, setFavorites] = useState<NotesType[]>([])

  useEffect(()=>{
    const favoritesFiltered = notes.filter((eachNote)=> eachNote.favorites==true);
    setFavorites(favoritesFiltered)
  },[]);
  
  return (
    <React.Fragment>
      <div className={` ${!reveal && "overflow-hidden"}`}>
        <section className={` ${reveal?"h-fit":"h-0"} flex flex-col gap-2 px-5  `}>
          {favorites.map((eachNote)=>{
            return (
              <div key={eachNote.id}>
                <Link to={`/${eachNote.id}`}>
                  <p className=' font-medium text-sm'>{eachNote.title}</p>
                </Link>
              </div>
            )
          })}
        </section>
      </div>
    </React.Fragment>
  )
}

export default Favorites