import { createContext, useState,ReactNode } from "react";

export type Note = {
    id?:string,
    title:string,
    content:string,
    favorite:boolean,
    createdAt?:string,
    updatedAt?:string
}

export type CreateNoteType = {
    title: string,
    content: string,
    favorite?: boolean
}

export type ContextType ={
    search:string,
    setSearch:(e:string)=>void;
    notes:Note[],
    setNotes:(e:Note[])=>void;
    createNote:CreateNoteType,
    setCreateNote:(e:CreateNoteType)=>void,
    darkMode:boolean,
    setDarkMode:(e:boolean)=>void;
}

interface ChildrenType{
    children:ReactNode
}


export const Context = createContext<ContextType | undefined>(undefined);

function ContextProvider({children}:ChildrenType){
    const [search, setSearch] = useState("");
    const [notes,setNotes] = useState<Note[]>([]);
    const [darkMode, setDarkMode] = useState(false);
    const [createNote, setCreateNote] = useState<CreateNoteType>({title:"",content:""});
    const contextValues:ContextType = {search,setSearch,darkMode,setDarkMode,notes,setNotes,createNote,setCreateNote};

    return(
        <Context.Provider value={contextValues}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;