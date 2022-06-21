import React from 'react'

const CartItem = ({data, delFromCart}) => {
    let {id, name, price, quantity, image} = data;
    return (
        <div className='box-itemCart'>
            <img style={{ width:"50px",height:"50px",}} src={image}/>
            <h4>{name}</h4>
            <h5>${price}.00 x {quantity} = ${price * quantity}.00</h5>
            <button onClick={() => delFromCart(id)}>Eliminar uno</button>
            <button onClick={() => delFromCart(id, true)}>Eliminar todos</button>
            
        </div>
    )
}

export default CartItem
