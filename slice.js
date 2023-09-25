import toolkit from "@reduxjs/toolkit";

const {configureStore, createSlice} = toolkit;

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart(state, action){
            state.push(action.payload)
        }
    }
})

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})
console.log("on create store : ", store.getState())


store.subscribe(() => {
    console.log("store change : ", store.getState())
})

store.dispatch(cartSlice.actions.addToCart({id:1, qty:25}))