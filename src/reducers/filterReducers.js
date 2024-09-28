export const filterReducer = (state, action) => {
    const { type, payload } = action;  //action has type and payload

    switch (type) {
        case "PRODUCT_LIST":
            // Fix: Spread existing state before updating productList
            return {  productList: payload.products };

        case "SORT_BY":
            return { ...state, sortBy: payload.sortBy };

        case "RATINGS":
            return { ...state, ratings: payload.ratings };

        case "BEST_SELLER_ONLY":
            return { ...state, bestSellerOnly: payload.bestSellerOnly };
        // case "BEST_SELLER_ONLY":
        //     const bestSellerOnly = payload.bestSellerOnly;
        //     const filteredProducts = bestSellerOnly
        //         ? state.productList.filter(product => product.best_seller) // Adjust this line to match your product's best seller property
        //         : state.productList; // If not filtering, return all products
        
        //     return { 
        //         ...state, 
        //         bestSellerOnly,
        //         productList: filteredProducts 
        //     };
        


        case "ONLY_IN_STOCK":
            return { ...state, onlyInStock: payload.onlyInStock };

        case "CLEAR_FILTER":
            return {
                ...state,
                onlyInStock: false,
                bestSellerOnly: false,
                sortBy: null,
                ratings: null,
            };

        default:
            throw new Error("No Case Found!");
    }
};
