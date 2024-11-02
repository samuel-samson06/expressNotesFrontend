import  { useContext,ChangeEvent,Fragment } from 'react';
import { BiSearch } from 'react-icons/bi';
import { Context } from '../context/Context';

function Search() {
  
  const {search,setSearch} = useContext(Context);
  

  const handleSearch = (e:ChangeEvent<HTMLInputElement>)=>{
    setSearch(e.target.value);
  }

  return (
    <Fragment>
        <div className='flex gap-3 rounded-md items-center bg-gray-100 py-1 px-3'>
            <BiSearch className=' text-gray-400 text-2xl'/>
            <input type="text" onChange={handleSearch} value={search} placeholder='Search Here' className=' outline-none placeholder:font-semibold placeholder:font-sans w-full  px-2 bg-gray-100 '/>
        </div>
    </Fragment>
  )
}

export default Search