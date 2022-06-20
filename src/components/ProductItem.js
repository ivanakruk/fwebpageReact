import React from 'react'


const ProductItem = ({data, addToCart}) => {

    let{id,name,price, image} = data;

    return (
        <div style={{ border:"thin solid gray", padding:"1rem"}}>
            <h4>{name}</h4>
            <h5>${price}.00</h5>
            <img style={{ width:"150px",height:"150px",}} src={image}/>
            <button onClick={()=> addToCart(id)}>Agregar</button>
        </div>
    )
}

export default ProductItem
