import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
    return (
        <div>
            <header className="header">
                <div className="header-submenu-container">
                    <div className="header-submenu">                   
                    </div> 
                </div>
      
        <div className="nav ">
            <h2 className="logo nav-link">BEAUTY GLAM</h2>
            <button className="nav-toggle" aria-label="Abrir menú">
                <i className="fas fa-bars"></i>
            </button>
            <ul className="nav-menu ">
                <button ><Link className="nav-menu-link nav-link nav-menu-link_active" to='/login'>Iniciar sesión</Link></button>               
               {/*  <button className="nav-menu-link nav-link nav-menu-link_active">Contacto</button>
                <button className="nav-menu-link nav-link nav-menu-link_active">Productos</button> */}
            </ul>
        </div>
            </header>
            <section className="title-info-container">
                <h2>Bienvenidos a cosméticos BEAUTY GLAM</h2>
            </section>    

            <section className="portada">                
                <div className="portada-info">Conocé todos nuestros productos exclusivos!</div>
            </section>
            
        </div>
    )
}

export default Home
