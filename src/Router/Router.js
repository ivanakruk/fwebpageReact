import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../pages/Login/Login"
import Products from "../pages/Products/Products"
import Register from "../pages/Register/Register"
import { useSelector } from "react-redux";
import Home from "../pages/Home/Home"



const Router = () => {

    const { token } = useSelector( store => store.user );
   
        return (
         
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<Home/>} />
                    {!token && <Route path='/login' element={<Login />} />}
                    {!token && <Route path='/register' element={<Register />} />}
                    {token && <Route path='/products' element={<Products />}/>}
                    <Route path='*' element={token ? <Products/> : <Home />} />
                </Routes>
            </BrowserRouter>
            
        )
}

export default Router