import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import img from './img.png';
import { toast } from "react-toastify";
import { useCart } from "../../../context";
import { createOrder, getUser } from "../../../services";

export const Checkout = ({ setCheckout }) => {
    const { cartList, total, clearCart } = useCart();
    const [user, setUser] = useState({});

    const navigate = useNavigate();
   
    useEffect(() => {
        async function fetchData() {
        try
           { const data = await getUser();
            setUser(data);
        }
        catch(error)
        {
          toast.error(error.message,{position:"bottom-center", closeOnClick:true, autoClose:5000});
        }
        }
        fetchData();// eslint-disable-next-line
    }, []);

    async function handleOrderSubmit(event) { //async bcoz this is going to handle cetain request
        event.preventDefault();

        try {
            const data = await createOrder(cartList,total,user);//got data means order is successful 
            //i.e. status 201 created or order created
            clearCart();
            navigate("/order-summary", { state: { data: data, status: true } });
            Swal.fire({
                title: 'Order placed successfully!',
                text: 'Thank you for using TechShelf!',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        }
        catch (error) {
       
          toast.error(error.message,{position:"bottom-center", closeOnClick:true, autoClose:5000});
       
            navigate("/order-summary", { state: { status: false } });
        }
    }


    return (
        <section>
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
            <div id="authentication-modal" tabIndex="-1" className="mt-5 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex" aria-modal="true" role="dialog" >
                <div className="relative p-4 w-full max-w-md h-full md:h-auto overflow-y-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-green-700">
                        <button onClick={() => setCheckout(false)} type="button" className="absolute top-3 right-2.5 text-green-400 bg-transparent hover:bg-green-200 hover:text-green-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-green-800 dark:hover:text-white" data-modal-toggle="authentication-modal" >
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="py-6 px-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-green-900 dark:text-white">
                                <i className="bi bi-credit-card mr-2"></i>CARD PAYMENT
                            </h3>
                            <form onSubmit={handleOrderSubmit} className="space-y-6" >
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-green-900 dark:text-green-300">Name:</label>
                                    <input type="text" name="name" id="name" className="bg-green-50 border border-green-300 text-green-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-600 dark:border-green-500 dark:value-green-400 dark:text-white" value={user.name || "Undefined"} disabled required="" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-green-900 dark:text-green-300">Email:</label>
                                    <input type="text" name="email" id="email" className="bg-green-50 border border-green-300 text-green-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-600 dark:border-green-500 dark:value-green-400 dark:text-white" value={user.email || "backup@example.com"} disabled required="" />
                                </div>
                                <div>
                                    <label htmlFor="card" className="block mb-2 text-sm font-medium text-green-900 dark:text-green-300">Card Number:</label>
                                    <input type="number" name="card" id="card" className="bg-green-50 border border-green-300 text-green-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-600 dark:border-green-500 dark:value-green-400 dark:text-white" value="4215625462597845" disabled required="" />
                                </div>

                                <div className="">
                                    <label htmlFor="code" className="block mb-2 text-sm font-medium text-green-900 dark:text-green-300">
                                        Expiry Date:
                                    </label>
                                    <div className="flex items-center space-x-3">
                                        <input
                                            type="number"
                                            name="month"
                                            id="month"
                                            className="w-20 bg-green-50 border border-green-300 text-green-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 p-2.5 dark:bg-green-600 dark:border-green-500 dark:text-white"
                                            value="03"
                                            disabled
                                            required
                                        />
                                        <input
                                            type="number"
                                            name="year"
                                            id="year"
                                            className="w-20 bg-green-50 border border-green-300 text-green-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 p-2.5 dark:bg-green-600 dark:border-green-500 dark:text-white"
                                            value="27"
                                            disabled
                                            required
                                        />
                                        <img src={img} alt="Expiry Date" className="w-28 h-auto pl-6" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="code" className="block mb-2 text-sm font-medium text-green-900 dark:text-green-300" >CVV:</label>
                                    <input type="number" disabled name="code" id="code" className="bg-green-50 border border-green-300 text-green-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-600 dark:border-green-500 dark:value-green-400 dark:text-white" value="523" required="" />
                                </div>
                                <p className="mb-4 text-2xl font-semibold text-lime-500 text-center">
                                    ₹   {total}
                                </p>
                                <button type="submit" className="w-full text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700" >
                                    <i className="mr-2 bi bi-lock-fill"></i>PAY NOW
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}