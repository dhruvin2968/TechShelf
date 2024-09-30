import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers";

const cartInitialState = {
    cartList: [],
    total: 0
}

const CartContext = createContext(cartInitialState);

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState);

    function addToCart(product){
        const updatedList = state.cartList.concat(product);
        const updatedTotal = state.total + product.price;

        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedList,
                total: updatedTotal
            }
        })
    }

    function removeFromCart(product){
        const updatedList = state.cartList.filter(item => item.id !== product.id);
        const updatedTotal = state.total - product.price;

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedList,
                total: updatedTotal
            }
        })
    }

    function clearCart(){
        dispatch({
            type: "CLEAR_CART",
            payload: {
                products: [],
                total: 0
            }
        })
    }

    const value = {
        cartList: state.cartList,
        total: state.total,
        addToCart,
        removeFromCart,
        clearCart
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);
    return context;
}

// import { createContext, useContext, useReducer } from "react";
// import { cartReducer } from "../reducers";

// const cartInitialState = {
//     cartList: [],
//     total: 0
// }

// const CartContext = createContext(cartInitialState);
// //cartProvider se  entire app ko wrap up karenge
// export const CartProvider = ({children}) => {
//     const [state, dispatch] = useReducer(cartReducer, cartInitialState);

//     function addToCart(product){
//         const updatedList = state.cartList.concat(product);
//         const updatedTotal = state.total + product.price;

//         dispatch({
//             type: "ADD_TO_CART",
//             payload: {
//                 products: updatedList,
//                 total: updatedTotal
//             }
//         })
//     }

//     function removeFromCart(product){
//         const updatedList = state.cartList.filter(item => item.id !== product.id);
//         const updatedTotal = state.total - product.price;

//         dispatch({
//             type: "REMOVE_FROM_CART",
//             payload: {
//                 products: updatedList,
//                 total: updatedTotal
//             }
//         })
//     }

//     function clearCart(){
//         dispatch({
//             type: "CLEAR_CART",
//             payload: {
//                 products: [],
//                 total: 0
//             }
//         })
//     }

//     const value = {
//         cartList: state.cartList,
//         total: state.total,
//         addToCart,
//         removeFromCart,
//         clearCart
//     }

//     return (
//         <CartContext.Provider value={value}>
//             {/* cartprovider mei 3 fns hai vo children i.e. app mei pass krre hai */}
//             {/* functions are exported in the form of value */}
//             {children}
//         </CartContext.Provider>
//     )
// }

// export const useCart = () => {
//     const context = useContext(CartContext);
//     return context;
// }