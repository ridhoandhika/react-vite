import toolkit from "@reduxjs/toolkit";

const {configureStore, createAction, createReducer} = toolkit;

const addToCart = createAction("ADD_TO_CART");

const cartReducer = createReducer([], (builder) => {
    builder.addCase(addToCart, (state, action ) => {
        state.push(action.payload)
    })
})

const login = createAction("CREATE_SESSION");

const loginReducer =createReducer({status: false}, (builder) => {
    builder.addCase(login, (state, action) => {
        state.status = true
    })
})

const store = configureStore({
    reducer: {
        login: loginReducer,
        cart: cartReducer
    }
})
console.log("on create store : ", store.getState())

//subscribe
store.subscribe(() => {
    console.log("store change : ", store.getState())
})

store.dispatch(addToCart({id:1, qty:20}))
store.dispatch(login(true))

