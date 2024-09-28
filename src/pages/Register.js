//import { useNavigate } from 'react-router-dom';
//import { toast } from 'react-toastify';
import { useTitle } from "../hooks/useTitle";
//import { register } from '../services';

export const Register = () => {
  useTitle("Register");
 // const navigate = useNavigate();

 async function handleRegister(event) {
  event.preventDefault();

  const authDetail = {
    name: event.target.name.value,
    email: event.target.email.value,
    password: event.target.password.value
  };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" }, // Corrected header casing
    body: JSON.stringify(authDetail)
  };

  try {
    const response = await fetch("http://localhost:8000/register", requestOptions); // Changed endpoint to /register
    
    // Check if the response is OK (status code 200-299)
    if (!response.ok) {
      const errorText = await response.text();  // Parse error text if response is not JSON
      throw new Error(`Error ${response.status}: ${errorText}`);
    }

    const data = await response.json();  // Only parse JSON if the response is OK
    
    console.log(data);  // Handle the successful response here (e.g., show success message, navigate)

  } catch (error) {
    console.error("Registration failed:", error.message);  // Catch and log errors
    alert(`Registration failed: ${error.message}`);  // Provide user feedback (can use toast instead of alert)
  }
}

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">Register</p>
      </section>
        <form onSubmit={handleRegister}>
        <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
              <input type="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Dhruvin Mehta" required autoComplete="off" />
          </div>
          <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="dhruvin@example.com" required autoComplete="off" />
          </div>
          <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
              <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required minLength="7" />
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
        </form>
    </main>
  )
}