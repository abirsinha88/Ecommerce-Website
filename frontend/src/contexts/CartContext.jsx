import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":{
      if(state.find((item)=>item.id == action.id) == undefined){
        return [...state,{id:action.id, quantity:1}]
      }
      else{
        return state.map(item => {
          if(item.id == action.id){
            return {...item, quantity: item.quantity+1};
          }
            return item;
          }
         )
      }
    }

    case "DECREASE":{

      if(state.find((item)=> item.id == action.id ).quantity == 1 ){
      
            return state.filter((item)=>{item.id!=action.id});
          }
          else{
            return state.map((item)=>{
              if(item.id == action.id){
                return {...item, quantity : item.quantity - 1 }
              }
              else return item;
            })
          }
        }
        
    case "REMOVE":{
      return state.filter(item =>
        item.id !== action.id 
      );
    }
    // case "COUNT":
    //   return state.find(item =>
    //     item.id == action.id 
    //   )?.quantity || 0 ;

    default:{
        return state;
    }
      
  }
}


export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, []);
  return (

    <CartContext value={ cart}>
      <CartDispatchContext value = {dispatch }>

      {children}
      </CartDispatchContext>
    </CartContext>
  );
}

export function useCart(){
    return useContext(CartContext);
}
export function useCartDispatch(){
    return useContext(CartDispatchContext);
}

