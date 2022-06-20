import { TYPES } from "../actions/shoppingActions";
import ShoppingCart from "../components/ShoppingCart";

import basemaquillaje from './cosmeticosimage/basemaquillaje.png'
import basemaquillaje2 from './cosmeticosimage/basemaquillaje2.jpeg'
import basemaquillaje3 from './cosmeticosimage/basemaquillaje3.jpg'
import basemaquillaje4 from './cosmeticosimage/basemaquillaje4.png'
import delineador from './cosmeticosimage/delineador.png'
import delineador2 from './cosmeticosimage/delineador2.png'
import delineador3 from './cosmeticosimage/delineador3.png'
import delineador4 from './cosmeticosimage/delineador4.png'
import labial from './cosmeticosimage/labial.png'
import labial2 from './cosmeticosimage/labial2.png'
import labial3 from './cosmeticosimage/labial3.png'
import labial4 from './cosmeticosimage/labial4.png'
import mascara from './cosmeticosimage/maybellineMascara1.png'
import mascara2 from './cosmeticosimage/maybellineMascara2.jpeg'
import mascara3 from './cosmeticosimage/maybellineMascara3.png'
import mascara4 from './cosmeticosimage/maybellineMascara4.jpeg'
import mascara5 from './cosmeticosimage/maybellineMascara5.jpeg'
import polvocompacto from './cosmeticosimage/polvocompacto.png'
import polvocompacto2 from './cosmeticosimage/polvocompacto2.png'
import polvocompacto3 from './cosmeticosimage/polvocompacto3.png'
import polvocompacto4 from './cosmeticosimage/polvocompacto4.png'

export const shoppingInitialState = {
   
    products: [        
        {id:1, name:'base', price:1500, image: basemaquillaje, type: basemaquillaje },
        {id:2, name:'base2', price:2500, image: basemaquillaje2 , type: basemaquillaje},
        {id:3, name:'base3', price:2000, image: basemaquillaje3 , type: basemaquillaje},
        {id:4, name:'base4', price:700, image: basemaquillaje4 , type: basemaquillaje},
        {id:5, name:'delineador', price:2500, image: delineador, type: delineador},
        {id:6, name:'delineador2', price:600, image: delineador2, type: delineador}, 
        {id:7, name:'delineador3', price:1200, image: delineador3, type: delineador}, 
        {id:8, name:'delineador4', price:1000, image: delineador4, type: delineador}, 
        {id:9, name:'delineador', price:1500, image: delineador, type: delineador},
        {id:10, name:'labial', price:1600, image: labial, type: labial}, 
        {id:11, name:'labial2', price:1250, image: labial2, type: labial}, 
        {id:12, name:'labial3', price:1100, image: labial3, type: labial}, 
        {id:13, name:'labial4', price:1650, image: labial4, type: labial},
        {id:14, name:'mascara', price:1800, image: mascara, type: mascara}, 
        {id:15, name:'mascara2', price:1400, image: mascara2, type: mascara}, 
        {id:16, name:'mascara3', price:900, image: mascara3, type: mascara}, 
        {id:17, name:'mascara4', price:850, image: mascara4, type: mascara},
        {id:18, name:'mascara5', price:1500, image: mascara5, type: mascara},
        {id:19, name:'polvocompacto', price:1000, image: polvocompacto, type: polvocompacto}, 
        {id:20, name:'polvocompacto2', price:1200, image: polvocompacto2, type: polvocompacto}, 
        {id:21, name:'polvocompacto3', price:1550, image: polvocompacto3, type: polvocompacto},
        {id:22, name:'polvocompacto4', price:1300, image: polvocompacto4, type: polvocompacto},
    ],
    cart:[]
};

export function shoppingReducer(state,action){
    switch(action.type){
        case TYPES.ADD_TO_CART:{
            let newItem = state.products.find(
            (product) => product.id === action.payload
            );
            //console.log(newItem);
            let itemInCart = state.cart.find(item => item.id === newItem.id);

            return itemInCart ? 
            {
                ...state,
                cart: state.cart.map(item=> 
                item.id === newItem.id 
                ? {...item, quantity: item.quantity +1}: item)    
            }
             : 
            {
                ...state,
                cart:[...state.cart,{...newItem, quantity:1 }],
            }
        }
        case TYPES.REMOVE_ONE_FROM_CART:{
            let itemToDelete = state.cart.find(item => item.id === action.payload);

            return itemToDelete.quantity > 1 ? {
                ...state,
                cart: state.cart.map(item =>
                item.id === action.payload ?
                {...item, quantity:item.quantity -1} 
                :item
                ),

            } 
            :{
             ...state,
             cart: state.cart.filter((item) => item.id !== action.payload),
            }
        }
        case TYPES.REMOVE_ALL_FROM_CART:{
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
               }
        }       

        case TYPES.CLEAR_CART:
            return shoppingInitialState;

        default:
            return state;
    }
}