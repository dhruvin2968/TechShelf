import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Search = ({setSearchSection}) => {
  const navigate = useNavigate();
  const searchRef = useRef();

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchSection(false);
    navigate(`/products?q=${searchRef.current.value}`);
  }

  return (
    <div className="mx-auto max-w-screen-xl p-2 my-5">
        <form onSubmit={handleSearch} className="flex items-center">   
            <div className="relative w-full">
                <span className="bi bi-search flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></span>
                <input ref={searchRef} name="search" type="text" id="simple-search" className="bg-violet-50 border border-violet-300 text-violet-900 text-sm rounded-lg focus:ring-violet-600 focus:border-violet-600 block w-full pl-10 p-2.5  dark:bg-violet-950 dark:border-violet-200 dark:placeholder-violet-400 dark:text-white dark:focus:ring-violet-600 dark:focus:border-violet-600" placeholder="Search" autoComplete="off" required="" />
            </div>
            <button type="submit" className="bi bi-search py-2.5 px-3 ml-2 text-sm font-medium text-black dark:text-white bg-violet-300 rounded-lg border border-violet-950 hover:bg-violet-400 focus:ring-4 focus:outline-none focus:ring-violet-300 dark:bg-violet-900 dark:hover:bg-violet-950 dark:focus:ring-violet-300">
            </button>
        </form>
    </div>
  )
}