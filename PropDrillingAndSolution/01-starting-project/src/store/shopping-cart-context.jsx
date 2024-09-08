import { createContext ,useReducer,useState} from "react";
import { DUMMY_PRODUCTS } from '../dummy-products.js';


export const CartContext = createContext({
  items: [],
  addItemToCart:()=>{},
  updateCartItemQuantity:()=>{}
});

  function shoppingCartReducer(state, action){
  if(action.type==='ADD_ITEM'){
    const updatedItems = [...state.items];
    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
      updatedItems.push({
        id: action.payload,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }

    return {
      ...state,
      items: updatedItems,
    };  
    
  }
  if(action.type==='UPADATE_ITEM')
    {
      const updatedItems = [...state.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === action.payload.productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += action.payload.amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        ...state,
        items: updatedItems,
      };
    }
      return state

    }
export default function CartContextProvider({children}){

  const  [ shoppingCartState,shoppingCartDispacher] = useReducer( shoppingCartReducer,{items:[]})
    // const [shoppingCart, setShoppingCart] = useState({
    //     items: [],
    //   });
    
      function handleAddItemToCart(id) {

        shoppingCartDispacher({
          type: 'ADD_ITEM',
          payload: id
        })
        // setShoppingCart((prevShoppingCart) => {
        // });
      }
    
      function handleUpdateCartItemQuantity(productId, amount) {

      shoppingCartDispacher({
        type:'UPADATE_ITEMS',
        payload:{
          productId,
          amount
        }
      })
        // setShoppingCart((prevShoppingCart) => {
         
        // });
      }
      const cartCtx ={
        items: shoppingCartState.items,
        addItemToCart:handleAddItemToCart,
        updateCartItemQuantity:handleUpdateCartItemQuantity
      }
      return(
        <CartContext.Provider value={cartCtx}>{children}</CartContext.Provider>
      )
}