import { useState,useEffect } from "react";
import { toast } from "react-toastify";
import { useTitle } from "../../hooks/useTitle";
import { DashboardCard } from "./components/DashboardCard";
import { DashboardEmpty } from "./components/DashboardEmpty";
import { getUserOrders } from "../../services";

export const DashboardPage = () => {
  const [orders, setOrders] = useState([]);
  useTitle("Dashboard");

  useEffect(() => {

    async function fetchOrders(){// eslint-disable-next-line
        try
        {const data=await getUserOrders();
        setOrders(data);
      }
      catch(error)
      {
        toast.error(error.message,{position:"bottom-center", closeOnClick:true, autoClose:5000});
      }
            
    }
    fetchOrders();// eslint-disable-next-line
  }, []);

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-violet-100 my-10 underline underline-offset-8">My Dashboard</p>
      </section>

      <section>
        { orders.length && orders.map((order) => (
          <DashboardCard key={order.id} order={order} />
        )) }
      </section>

      <section>
        { !orders.length && <DashboardEmpty /> }
      </section>

    </main>
  )
}