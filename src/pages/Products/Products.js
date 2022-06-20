import { useNavigate } from 'react-router';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { LogoutAction } from "../../Redux/auth";
import './products.css'
import ShoppingCart from '../../components/ShoppingCart';

const Products = () => {
 

    const navigate = useNavigate();
    const dispatch = useDispatch();   
   

    const handleLogout = () => {
        dispatch(LogoutAction(navigate));
    }   
    return (
        <div>
            <header class="header">
                <div class="header-submenu-container">
                    <div class="header-submenu">
                    <a href="#cart-list">CARRITO</a>
                    <a href="#cart-list">INICIO</a>                
                    </div> 
            </div>        
            <div class="nav " >
                <a href="#" class="logo nav-link">BEAUTY GLAM</a>
                <button class="nav-toggle" aria-label="Abrir menú">
                    <i class="fas fa-bars"></i>
                </button>              
            </div>
            </header>
            <div class="conteiner-cart-products">
                <ShoppingCart/>
            </div>
                <button onClick={handleLogout}>LOGOUT</button>
        </div>
    )
}

export default Products