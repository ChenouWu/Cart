import { CLEAR_CART,REMOVE,INCREASE,DECREASE,LOADING,DISPLAY_ITEMS, ADD } from "./action";
/**-------For Reducer ------------**/

//Reducer function return a new state,which depends on the action
// It has two parameters, state and action

export  const reducer=(state,action)=>{
    if(action.type == CLEAR_CART){
        return {...state,cart:new Map()}
    }

     if(action.type == REMOVE){
        const newCart = new Map(state.cart);
        newCart.delete(action.payload.id);
        return {...state, cart:newCart};
    }
    if(action.type == INCREASE){
        const newCart = new Map(state.cart);
        const itemid = action.payload.id;
        const Item = newCart.get(itemid);
        const ChangedItem = {...Item,amount:Item.amount+1};
        newCart.set(itemid,ChangedItem);
        return {...state,cart:newCart}
    }

    if(action.type == DECREASE){
        const newCart = new Map(state.cart);
        const itemID = action.payload.id;
        const item = newCart.get(itemID);
        const ChangedItem = {...item,amount:item.amount-1};
        if(ChangedItem.amount == 0){
            const newCart = new Map(state.cart);
            newCart.delete(itemID);
            return {...state,cart:newCart};
        }
        newCart.set(itemID,ChangedItem);
        return {...state,cart:newCart}
    }

    if (action.type === ADD) {
        const newCart = new Map(state.cart);
        const itemID = action.payload.id;
        const existingItem = newCart.get(itemID);
        console.log(existingItem);

        if (existingItem) {
            const updatedItem = { ...existingItem, amount: existingItem.amount + 1 };
            newCart.set(itemID, updatedItem);
          } else {
            const newItem = {
              ...action.payload,
              amount: 1,
            };
            newCart.set(itemID, newItem);
          }
          return { ...state, cart: newCart };
        }
    
}
