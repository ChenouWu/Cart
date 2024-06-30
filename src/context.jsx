import { useContext,useReducer,useEffect, createContext, act } from "react";
import cartItems from "./data";
import { CLEAR_CART,REMOVE,INCREASE,DECREASE,ADD } from "./action";
import { reducer } from "./reducer";
import { Money } from "./Money";
// Step 1: Creating an object;
const AppContext = createContext();

// Step 2 ： Create a provider, let data could be used by all component;
export const AppProvider=({children})=>{
    // useReducer has two parameters,which are reducer function and an intialState.

    // dispatch send an action to update the state
    const [state,dispatch] = useReducer(reducer,initialState);

    const {totalAmount,totalcost} = Money(state.cart);

    const clearCart = ()=>{
        dispatch({ type:CLEAR_CART }) ;
    }
    const remove =(id)=>{
        dispatch({ type:REMOVE, payload: {id} });
    }
    const increase =(id)=>{
        dispatch({ type:INCREASE, payload: {id} });
    }
    const decrease =(id)=>{
        dispatch({ type:DECREASE, payload: {id} });
    }
    const add = (id) => {
        const item = cartItems.find((item) => item.id === id);
        dispatch({ type: ADD, payload: item });
      };

    return(
        <AppContext.Provider value={{...state,clearCart,remove,increase,decrease,totalAmount,totalcost,add}}>
            {children}
        </AppContext.Provider>
    )
}

// Step 3: Create  a customize hook;
export const useGloableContext =()=>{
    return useContext(AppContext);
}
// This is the initial State for useReducer
const initialState = {
    cart:new Map(),
}



