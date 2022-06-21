import React from 'react';
import { useReducer, dispatch } from 'react'
import { TYPES } from '../actions/shoppingActions'
import { shoppingInitialState, shoppingReducer } from '../Redux/shoppingReducer'
import ProductItem from './ProductItem';
import CartItem from './CartItem';
import './cart.css'


const ShoppingCart = () => {

    const [ state, dispatch ] = useReducer( shoppingReducer, shoppingInitialState);
    const { products, cart } = state;
    
    
    const addToCart = (id) =>{
        console.log(id);
        dispatch({ type: TYPES.ADD_TO_CART, payload: id});
    }
    const delFromCart = (id, all = false ) =>{
        console.log(id, all);
        if(all){
            dispatch({type: TYPES.REMOVE_ALL_FROM_CART, payload: id});
        }else {
            dispatch({type: TYPES.REMOVE_ONE_FROM_CART, payload: id});
        }
    };


    const clearCart = () =>{
        dispatch({type: TYPES.CLEAR_CART});
    }
    const totalCart =  cart.reduce((previous, current)=> previous + current.quantity * current.price, 0);  
        
    return (
        <div className=''>                
                <div className='conteiner-cart-products'> 
                    <h3>Productos</h3>
                    <div className='boxProducts grid-responsive'>
                        {products.map((product) => <ProductItem key={product.id} data={product}
                         addToCart={ addToCart }/>)}
                    </div>
                </div>
                <div>
                    <span>
                        <h3>Carrito</h3>
                        <div className='box'>
                            
                            {
                              cart.map( (item, index) => <CartItem key={index} data = {item} delFromCart={delFromCart}/>)
                            }
                            <button onClick={clearCart}>Limpiar Carrito</button>
                        </div>
                        <strong>Total {totalCart} </strong> <b> $</b>
                    </span>
                </div>
                <button >COMPRAR</button>
        </div>
    )
}

export default ShoppingCart
