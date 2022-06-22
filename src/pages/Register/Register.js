

const Register = () => {
    return (
    <div className="contenedor">
      
      <div className="cardlogin" id="cardRegister">
        <form action="" classNameName="form"/>
          
          <h1>Registrarme</h1><br/>
          
          <label for="name"> <p>Email</p></label>
          <input className="input-subrallado" type="text" placeholder="ejemplo@correo.com" name="name" id="userEmail"/>
          
          <label for="Pass"><p>Contraseña</p></label>
          <input className="input-subrallado" type="password"placeholder="Contraseña" name="Pass" id="userPass"/> 
          <label for="Pass"><p>Nombre</p></label>
          <input className="input-subrallado" type="text"placeholder="Nombre" name="Pass" id="userName"/>

          <label for="Pass"><p>Apellido</p></label>
          <input className="input-subrallado" type="text"placeholder="Apellido" name="Pass" id="userLastName"/>  
        
  
          <a href="#" className="hbtn hb-fill-right-br" id="btnRegister" >Crear cuenta</a><br/>
       
         <div className="tengoCuenta"><a href="../Login/login.html">Ya tengo cuenta!</a></div>
          <div className="socialbtn">
            <a href="#" className="fa fa-facebook"></a>
            <a href="#" className="fa fa-twitter"></a>
            <a href="#" className="fa fa-google"></a>
          </div>
          <div className="checkBox">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <label for="checkbox" className="text-reg"><a href="">Acepto terminos y condiciones</a></label>
            </div>
          <form/>
     
           
            <div className="opacidad"> 
                <h2> Bienvenid@</h2>
                <p> Registrate para recibir mas información!</p>
            </div>           
      </div>
      <div className="containerResponse" id="containerRes"> 
        <h3>Se ha registrado con exito, inicie sesión para continuar</h3><a className="responseLink" href="../Login/login.html">Iniciar Sesión</a>
      </div>
      <div className="containerResponseError" id="containerRespError"> 
        <h3>Se ha producido un error, intente nuevamente</h3>
      </div>
    </div>
    )
}

export default Register