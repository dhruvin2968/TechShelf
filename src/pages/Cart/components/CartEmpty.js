import { Link } from "react-router-dom"

export const CartEmpty = () => {
  return (
    <section className="text-xl text-center max-w-4xl mx-auto my-10 py-5 dark:text-white border dark:border-violet-300 rounded">
        <div className="my-5">
            <p className="bi bi-cart text-violet-500 text-7xl mb-5"></p>
            <p>Oops! Your cart looks empty!</p>
            <p>Add eBooks to your cart from our store collection.</p>
        </div>
        <Link to="/products" type="button" className="text-white bg-violet-600 hover:bg-violet-800 rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-violet-600 dark:hover:bg-violet-700 focus:outline-none">Continue Shopping <i className="ml-2 bi bi-cart"></i></Link>
    </section>
  )
}
