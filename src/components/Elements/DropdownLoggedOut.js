import { Link } from "react-router-dom";

export const DropdownLoggedOut = ({setDropdown}) => {
  return (
    <div id="dropdownAvatar" className="select-none	absolute top-10 right-0 z-10 w-44 bg-white rounded divide-y divide-violet-100 shadow dark:bg-violet-900 dark:divide-violet-600">
        <ul className="py-1 text-sm text-violet-950 dark:text-white" aria-labelledby="dropdownUserAvatarButton">
            <li>
                <Link onClick={() => setDropdown(false)} to="/products" className="block py-2 px-4 hover:bg-violet-100 dark:hover:bg-violet-600 dark:hover:text-white">All eBooks</Link>
            </li>
            <li>
                <Link onClick={() => setDropdown(false)} to="/login" className="block py-2 px-4 hover:bg-violet-100 dark:hover:bg-violet-600 dark:hover:text-white">Login</Link>
            </li>
            <li>
                <Link onClick={() => setDropdown(false)} to="/register" className="block py-2 px-4 hover:bg-violet-100 dark:hover:bg-violet-600 dark:hover:text-white">Register</Link>
            </li>
        </ul>
    </div>
  )
}
