import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
//  import { toast } from "react-toastify";
// import { getUser } from "../../services";
import Swal from "sweetalert2";
export const DropdownLoggedIn = ({setDropdown}) => {
   
   const [user, setUser] = useState({});

    // useEffect(() => {
    //     async function fetchData(){
    //         try{
    //             const data = await getUser();
    //             data.email ? setUser(data) : handleLogout();
    //         } catch(error){
    //             toast.error(error.message, { closeButton: true, position: "bottom-center" });
    //         }            
    //     }
    //     fetchData();
    // }, []); //eslint-disable-line
    const token = JSON.parse(sessionStorage.getItem("token"));
  const techshelfid = JSON.parse(sessionStorage.getItem("techshelfid"));
    useEffect(() => {   
     async function getUser(){
        
        const requestOptions = {
            method: "GET",
            headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`}
        }
        const response = await fetch(`http://localhost:8000/600/users/${techshelfid}`, requestOptions);
        
        const data = await response.json();
        setUser(data);
     }
     getUser();
    }, []);//eslint-disable-line


    const navigate = useNavigate();
    function handleLogout(){
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("techshelfid");
                setDropdown(false);
                navigate("/");
                Swal.fire({
                    title: 'Logged out successfully!',
                    text: '',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }

  return (
    <div id="dropdownAvatar" className="select-none	absolute top-10 right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
        <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
            <div className="font-medium truncate">{user.name}'s Account</div>
        </div>
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
            <li>
                <Link onClick={() => setDropdown(false)} to="/products" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All eBooks</Link>
            </li>
            <li>
                <Link onClick={() => setDropdown(false)} to="/dashboard" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
            </li>
        </ul>
        <div className="py-1">
            <span onClick={handleLogout} className="cursor-pointer block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Log out</span>
        </div>
    </div>
  )
}

