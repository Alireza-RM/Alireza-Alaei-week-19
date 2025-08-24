import { createContext, useContext, useReducer, useState } from "react"



const filterProductsContext = createContext()

const initialState = {
    loading: false,
    data: [],
    error: ""
}

const reducer = (state, action) => {
    switch (action.type) {
        case "loading":
            return { ...state, loading: true };
        case "success":
            return { loading: false, data: action.payload, error: "" };
        case "error":
            return { error: action.payload, data: [], loading: false };
        case "addContact":
            return { ...state, data: action.payload }
        case "deleteContact":
            return { ...state, data: action.payload }
    }
}


function ProductsDataContext({ children }) {
    const [productData, dispatch] = useReducer(reducer, initialState)


    return (
        <filterProductsContext.Provider value={{ productData, dispatch }}>
            {children}
        </filterProductsContext.Provider>
    )
}

export default ProductsDataContext

const ProductContextData = () => {

    const data = useContext(filterProductsContext)
    return data
}

export { ProductContextData }