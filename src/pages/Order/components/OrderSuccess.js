import { Link } from "react-router-dom"

export const OrderSuccess = ({data}) => {
  return (
    <section className="text-xl text-center max-w-4xl mx-auto my-10 py-5 dark:text-white border dark:border-violet-400 rounded">
        <div className="my-5">
            <p className="bi bi-check-circle text-violet-300 text-7xl mb-5"></p>
            <p>Thank you {data.user.name} for the order!</p>
            <p>Your Order ID: {data.id}</p>          
        </div>
        <div className="my-5">
            <p>Your order is confirmed.</p>
            <p>Please check your mail ({data.user.email}) for the eBook.</p>
            <p className="my-5">Payment ID: xyz_123456789</p>
        </div>
        <Link to="/products" type="button" className="text-white bg-violet-600 hover:bg-violet-9570 rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-violet-600 dark:hover:bg-violet-700 focus:outline-none">Continue Shopping <i className="ml-2 bi bi-cart"></i></Link>
    </section>
  )
}
