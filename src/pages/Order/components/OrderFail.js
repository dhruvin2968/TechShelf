import { Link } from "react-router-dom"

export const OrderFail = () => {
  return (
    <section className="text-xl text-center max-w-4xl mx-auto my-10 py-5 dark:text-green-100 border dark:border-green-700 rounded">
        <div className="my-5">
            <p className="bi bi-exclamation-circle text-red-500 text-7xl mb-5"></p>
            <p>Payment failed, please try again!</p>     
        </div>
        <div className="my-5">
            <p>Your order is not confirmed.</p>
            <p>Connect <span className="">TechShelf@example.com</span> for support.</p>
        </div>
        <Link to="/cart" type="button" className="text-white bg-green-700 hover:bg-green-800 rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none">Check Cart Again<i className="ml-2 bi bi-cart"></i></Link>
    </section>
  )
}
