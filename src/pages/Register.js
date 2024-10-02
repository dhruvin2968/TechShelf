import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTitle } from "../hooks/useTitle";
import { register } from '../services';


export const Register = () => {
  useTitle("Register");
 const navigate = useNavigate();

 async function handleRegister(event) {
  event.preventDefault();
  try
  {const authDetail = {
    name: event.target.name.value,
    email: event.target.email.value,
    password: event.target.password.value
  };

  const data=await register(authDetail);
   
    if (data.accessToken) {
      Swal.fire({
        title: "Resgistration Successful!",
        text: "Welcome to TechShelf!",
        icon: "success",
        confirmButtonText: 'Okay'
      });
      navigate("/products");
      
    } else {
      toast.error(data);
    }
  }
  catch(error)
  {
    toast.error(error.message,{position:"bottom-center", closeOnClick:true, autoClose:5000});
  } 
}

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-green-100 my-10 underline underline-offset-8">Register</p>
      </section>
        <form onSubmit={handleRegister}>
        <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-green-900 dark:text-green-300">Your name</label>
              <input type="name" id="name" className="shadow-sm bg-green-50 border border-green-300 text-green-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-950 dark:border-green-200 dark:placeholder-green-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Dhruvin Mehta" required autoComplete="off" />
          </div>
          <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-green-900 dark:text-green-300">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-green-50 border border-green-300 text-green-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-950 dark:border-green-200 dark:placeholder-green-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="dhruvin@example.com" required autoComplete="off" />
          </div>
          <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-green-900 dark:text-green-300">Your password</label>
              <input type="password" id="password" className="shadow-sm bg-green-50 border border-green-300 text-green-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-950 dark:border-green-200 dark:placeholder-green-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" required minLength="7" />
          </div>
          <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Register</button>
        </form>
    </main>
  )
}
