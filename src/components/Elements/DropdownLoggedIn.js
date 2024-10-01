import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getUser } from "../../services";
import Swal from "sweetalert2";
import { logout } from "../../services";
export const DropdownLoggedIn = ({ setDropdown }) => {

    const [user, setUser] = useState({});

    useEffect(() => {
        async function fetchData(){
            try{
                const data = await getUser();
                data.email ? setUser(data) : handleLogout();
            } 
            catch(error){
                toast.error(error.message, { closeButton: true, position: "bottom-center" });
            }            
        }
        fetchData();
    }, []); //eslint-disable-line
    

    const navigate = useNavigate();
    function handleLogout() {
        logout();
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
        <div id="dropdownAvatar" className="select-none	absolute top-10 right-0 z-10 w-44 bg-white rounded divide-y divide-green-100 shadow dark:bg-green-700 dark:divide-green-600">
            <div className="py-3 px-4 text-sm text-green-700 dark:text-white">
                <div className="font-medium truncate">{user.name}'s Account</div>
            </div>
            <ul className="py-1 text-sm text-green-700 dark:text-gray-100" aria-labelledby="dropdownUserAvatarButton">
                <li>
                    <Link onClick={() => setDropdown(false)} to="/products" className="block py-2 px-4 hover:bg-green-100 dark:hover:bg-green-600 dark:hover:text-white">All eBooks</Link>
                </li>
                <li>
                    <Link onClick={() => setDropdown(false)} to="/dashboard" className="block py-2 px-4 hover:bg-green-100 dark:hover:bg-green-600 dark:hover:text-white">Dashboard</Link>
                </li>
            </ul>
            <div className="py-1">
                <span onClick={handleLogout} className="cursor-pointer block py-2 px-4 text-sm text-green-700 hover:bg-green-100 dark:hover:bg-green-600 dark:text-gray-100 dark:hover:text-white">Log out</span>
            </div>
        </div>
    )
}

