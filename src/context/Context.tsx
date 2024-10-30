import { createContext, useState } from "react";


type ContextType = {
    search:string,
    setSearch:(e:string)=>void;
}

interface ChildrenType{
    children:React.ReactNode
}


export const Context = createContext<ContextType|null>(null);

function ContextProvider({children}:ChildrenType){
    const [search, setSearch] = useState<string>("");
    
    const value = {search,setSearch};

    return(
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;