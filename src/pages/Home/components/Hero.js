import { Link } from "react-router-dom"

export const Hero = () => {
  return (   
    <section className="flex flex-col lg:flex-row dark:text-white items-center">
        <div className="text my-5">
            <h1 className="text-5xl font-bold">The Ultimate eBook Store</h1>
            <p className="text-2xl my-7 px-1 dark:text-white">TechShelf is the world's most popular and authoritative source for computer science ebooks. Find ratings and access to the newest books digitally.</p>
            <Link to="/products" type="button" className="dark:text-white text-black bg-violet-400 hover:bg-violet-500 border-2 border-black dark:border-white  focus:ring-4 focus:ring-violet-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-black dark:hover:bg-violet-900 focus:outline-none dark:focus:ring-violet-800">Explore eBooks</Link>
        </div>
        <div className="visual my-5 lg:max-w-xl">
            <img className="rounded-lg max-h-full" src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=60" alt="TechShelf Hero Section" />
        </div>
    </section>
  )
}
