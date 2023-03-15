import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import productReducer from '../features/product/productSlice'
import cartReducer from '../features/cart/cartSlice'
import pokemonReducer from '../features/pokemon/pokemonSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
        product: productReducer,
        cart: cartReducer,
        pokemon: pokemonReducer
    },
})