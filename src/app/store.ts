import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../features/products/productSlice' 
import shopCartReducer from'../features/cart/cartSlice'
const store = configureStore({
    reducer:{
        products:productReducer,

        shopcart:shopCartReducer
    }

   
})

export type RootState = ReturnType<typeof store.getState>
export default store
