import { Routes, Route } from "react-router-dom";
import { Login, Register, ProductDetail, HomePage, ProductsList, PageNotFound, CartPage, OrderPage } from "../pages";
//import {, DashboardPage} from "../pages"
import { ProtectedRoute } from "./ProtectedRoute";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductsList />} />
        <Route path="products/:id" element={<ProductDetail />} />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />


        {/* using protected route .. if have token then go to the mentioned components
or else go to the login page */}
        <Route path="cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
        <Route path="order-summary" element={<ProtectedRoute><OrderPage /></ProtectedRoute>} />
        {/*  <Route path="dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />  */}

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}
