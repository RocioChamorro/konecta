import {
  controllerLogin,
  controllerFacebook,
  controllerGoogle,
} from '../controller.js';

export const viewLogin = () => {
  const loginContainer = document.createElement('div');
  loginContainer.innerHTML = '';
  const loginTemplate = `  
  <!--<img class="logo" src="../img/circlenutri.png" alt="circulo nutricional"/>-->
  <form id="screen-login" class="flex-form">
    <img src="../img/logotk.png" alt="logo de la web food kids"/>
    <p class="welcome"> INICIAR SESIÓN</p>
    <!--<p class="welcome-description"> ¡Bienvenido a la red que te ayuda con la alimentación de los engreidos de casa!</p>-->
    <label class="text-label">DNI/Carné de extranjería</label>
    <input class="inputs" type="email" name="correo" id="email">
    <label class="text-label">Contraseña</label>
    <input class="inputs" type="password" name="contrasena" id="password" >
    <p class="error" id="error"></p>
    <button class= "btn-login" name="button" type="submit" id="login">INICIAR SESIÓN</button>
    <a class="registro" href="#/register" id="registrate">o Activa cuenta</a>
    <!--<div class="btn-fb-google">
      <a id="fb" href="#"><img class="facebook" src="../img/fb.png"/></a>
      <a id="goog" href="#"><img class="google" src="../img/google+.png" /></a>
    </div>-->
    <label class="registro"><a class="bold" href="#/register" id="registrate">Olvidé mi cotraseña</a></label>
    <label class="tu-red">Tu Red profesional Konecta</label>
    </form>`;

  loginContainer.innerHTML = loginTemplate;
  loginContainer.classList.add('center');

  const buttonLogInEmail = loginContainer.querySelector('#login');
  const buttonLogInFacebbok = loginContainer.querySelector('#fb');
  const buttonLogInGoogle = loginContainer.querySelector('#goog');

  buttonLogInEmail.addEventListener('click', controllerLogin);
  // buttonLogInFacebbok.addEventListener('click', controllerFacebook);
  // buttonLogInGoogle.addEventListener('click', controllerGoogle);

  return loginContainer;
};
