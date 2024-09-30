export const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch(type){

        case "ADD_TO_CART":
            return {...state, cartList: payload.products, total: payload.total}
        
        case "REMOVE_FROM_CART":
            return {...state, cartList: payload.products, total: payload.total}
        
        case "CLEAR_CART":
            return {...state, cartList: [], total: payload.total}
                                        //[] ki jagah u can keep payload.products
        default:
            throw new Error("No case found!");
    }
}