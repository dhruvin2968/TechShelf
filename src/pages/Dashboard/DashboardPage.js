import { useState,useEffect } from "react";
//import { toast } from "react-toastify";
import { useTitle } from "../../hooks/useTitle";
//import { getUserOrders } from "../../services";
import { DashboardCard } from "./components/DashboardCard";
import { DashboardEmpty } from "./components/DashboardEmpty";

export const DashboardPage = () => {
  const [orders, setOrders] = useState([]);
  useTitle("Dashboard");
  const token = JSON.parse(sessionStorage.getItem("token"));
  const techshelfid = JSON.parse(sessionStorage.getItem("techshelfid"));
  useEffect(() => {

    async function fetchOrders(){// eslint-disable-next-line
        const requestOptions = {
            method: "GET",
            headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`}
        }
        const response=await fetch(`http://localhost:8000/660/orders?user.id=${techshelfid}`,requestOptions);
        const data=await response.json();
        setOrders(data);
            
    }
    fetchOrders();// eslint-disable-next-line
  }, []);

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
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