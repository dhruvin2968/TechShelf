

import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useTitle } from "../hooks/useTitle";


import { login } from "../services";


export const Login = () => {
  useTitle("Login");
  const navigate = useNavigate();
  const email = useRef(); //for reference used down
  const password = useRef();

  async function handleLogin(event){
    event.preventDefault();
    try
    {
      const authDetail = { //we need to send this to our fetch request
        email: email.current.value,
        password: password.current.value
      }
    
     const data=await login(authDetail);  //async fn se kuch bhi aata hai toh await use krna hoga

     
    if (data.accessToken) {
      toast.success("Welcome back to TechShelf!");
      navigate("/products");
      console.log(data);

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
        <p className="text-2xl text-center font-semibold dark:text-violet-100 my-10 underline underline-offset-8">Login</p>
      </section>        
        <form onSubmit={handleLogin}>
          <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-violet-900 dark:text-violet-300">Your email</label>
              <input ref={email} type="email" id="email" className="bg-violet-50 border border-violet-300 text-violet-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-violet-950 dark:border-violet-200 dark:placeholder-violet-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500" placeholder="dhruvin@example.com" required autoComplete="off" />
          </div>
          <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-violet-900 dark:text-violet-300">Your password</label>
              <input ref={password} type="password" id="password" className="bg-violet-50 border border-violet-300 text-violet-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-violet-950 dark:border-violet-200 dark:placeholder-violet-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500" required />
          </div>
          <button type="submit" className="text-black dark:text-white border border-1 border-black bg-violet-300 hover:bg-violet-800 focus:ring-4 dark:border-violet-200  focus:ring-violet-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-violet-900  dark:hover:bg-violet-700 dark:focus:ring-violet-800">Log In</button>
        </form>
        {/* <button onClick={handleLoginGuest} className="mt-3 cursor-pointer text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">Login As Guest</button>
     */}</main>
  )
}
