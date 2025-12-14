import { createSlice } from "@reduxjs/toolkit"
import { data } from "react-router-dom"


const initialState = {
    room: undefined
}

export const product = createSlice({
    name: 'room',
    initialState,
    reducers:{
        addProductByID: (state, action) =>{
            state.room = action.payload
        }
    }
})

export function getProduct(action){
    return function(dispatch, getState){
        fetch('/data/meuble.json')
        .then(resp => resp.json())
        .then(data =>{
            dispatch(addProductByID(data.meubles))
        })

    }
}

export const { addProductByID } = product.actions
export default product.reducer