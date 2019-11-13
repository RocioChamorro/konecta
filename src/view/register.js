import { controllerRegister, modalMessage } from '../controller.js';

export const viewRegister = () => {
  const registerContainer = document.createElement('div');
  const registerTemplate = `  
    <img class="logo" src="../img/circlenutri.png" alt="logo de la web foods kids"/>
    <form id="screen-register" class="flex-form margin-form">
    <img src="../img/logotk.png" alt="logo de la web food kids"/>
    <p class="welcome">ACTIVAR CUENTA</p>
      <label class="text-label">DNI/Carné de extranjería</label>
      <input class="inputs" type="text" name="DNI/Carné de extranjería" id="dni">
      <label class="text-label">Email</label>
      <input class="inputs" type="email" name="Correo Institucional" id="email">
      <label class="text-label">Contraseña</label>
      <input class="inputs" type="password" name="password" id="password">
      <label class="text-label">Repetir contraseña</label>
      <input class="inputs" type="password" name="second-password" id="second-password">
      <!--<p class="obligatorio">Campos obligatorios (*)</p>-->
      <p class="error" id="error"></p>
      <button class="btn-login" name="button" type="submit" id="registrar">ACTIVAR CUENTA</button>
      <a class="registro" href="#/login">o Iniciar sesión</a>
      <a class="bold" href="">Olvidé mi contraseña </a>
      <label class="tu-red">Tu Red profesional Konecta</label>
    </form>`;
  registerContainer.innerHTML = registerTemplate;
  registerContainer.classList.add('center');
  const buttonLog = registerContainer.querySelector('#registrar');

  buttonLog.addEventListener('click', () => {
    controllerRegister();
  });
  return registerContainer;
};
