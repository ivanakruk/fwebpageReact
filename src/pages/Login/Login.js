import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../../Redux/auth";
import { useNavigate } from "react-router";
import './login.css'

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleClick = () => {
        dispatch (loginAction ({ email, password, navigate }));
    }

    return (
        <div >

            <div className="contenedor">
                <div className="cardlogin" id="formLogin">
                    <form className="form" >
                    
                    <h1>Iniciar sesión</h1><br/>
                    
                    <label for="name"> <p>Usuario:</p></label>
                    <input value={email} onChange={handleChangeEmail} type="email" placeholder="ejemplo@correo.com" name="name" id="user"/>
                    
                    <label for="Pass"><p>Contraseña:</p></label>
                    <input value={password} onChange={handleChangePassword} type="password" placeholder="Contraseña" name="Pass" id="passUser"/> 
                    
                    <div className="radio">
                        <input  type="checkbox" value=""/> 
                        <label for="Recordarme"><p>Recuérdame</p></label>
                    </div>
            
                    <button onClick={handleClick} type="button" className="hbtn hb-fill-right-br" id="userLoginBtn">Entrar</button><br/>
                    <a href="">Olvidé mi contraseña</a>
                    <a href="" target="_blank">Registrarme</a>
                    
                    <div className="socialbtn">
                        <a href="#" className="fa fa-facebook"></a>
                        <a href="#" className="fa fa-twitter"></a>
                        <a href="#" className="fa fa-google"></a>
                    </div>
                    </form>              
                
                </div>
                <div className="containerResponseOk" id="loginRespOk">
                    <h3>INICIO SESIÓN EN BEAUTY GLAM..c: </h3><a href="../Products/products.html">Ver Productos</a>
                </div>
            </div>

                    {/* <h1>Login</h1>
                    <form>
                    <div classNameName="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input value={email} onChange={handleChangeEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input value={password} onChange={handleChangePassword} type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button onClick={handleClick} type="button" className="btn btn-primary">Submit</button>
                    </form> */}
        </div>
    )

}

export default Login