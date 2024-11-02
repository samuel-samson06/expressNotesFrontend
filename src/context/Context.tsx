import { createContext, useState,ReactNode } from "react";


export interface ContextType {
    search:string,
    setSearch:(e:string)=>void;
    darkMode:boolean,
    setDarkMode:(e:boolean)=>void;
}

interface ChildrenType{
    children:ReactNode
}


export const Context = createContext<ContextType | undefined>(undefined);

function ContextProvider({children}:ChildrenType){
    const [search, setSearch] = useState<string>("");
    const [darkMode, setDarkMode] = useState<boolean>(false)

    const contextValues:ContextType = {search,setSearch,darkMode,setDarkMode};

    return(
        <Context.Provider value={contextValues}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;