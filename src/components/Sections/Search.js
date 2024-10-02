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
                <input ref={searchRef} name="search" type="text" id="simple-search" className="bg-green-50 border border-green-300 text-green-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full pl-10 p-2.5  dark:bg-green-950 dark:border-green-200 dark:placeholder-green-400 dark:text-white dark:focus:ring-green-600 dark:focus:border-green-600" placeholder="Search" autoComplete="off" required="" />
            </div>
            <button type="submit" className="bi bi-search py-2.5 px-3 ml-2 text-sm font-medium text-black dark:text-white bg-green-300 rounded-lg border border-green-950 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-900 dark:hover:bg-green-950 dark:focus:ring-green-300">
            </button>
        </form>
    </div>
  )
}