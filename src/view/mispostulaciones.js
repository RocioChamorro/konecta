import { controllerExit, createPost } from "../controller.js";
// import { colaborador } from '../model/model-firebase.js';
import { viewMisPosts } from "./misposts.js";


export const viewMisPostulaciones = () => {
  const postulacionContainer = document.createElement('div');
  postulacionContainer.innerHTML = '';
  const postulacionTemplate = `  
  <!--<header>
    <div class="logo-bars">
    <label id="imagen-perfil" for="toggle"><img class="img-perfil" src="../img/Oval.png" alt="foto de perfil extraida del email, google o facebook del usuario"/></label>
    <li><input type="search" class="search"></li>
    <li><img class="img2" src="../img/ring.png"/></li>
    </div>
    <input type="checkbox" class="hide" id="toggle">  
    <nav class="colorPrincipal navbar"> 
      <ul class="main-nav flex">
      <li><a href=""><img class="img-perfil" src="../img/Oval.png" alt="foto de perfil"/> Gestiòn humana </a></li>

        <li><a href=""><img class="img-margin" src="../img/notificacion.png"/>Notificaciones</a></li>
        <li><a href=""><img class="img-margin" src="../img/resumen1.png"/>Postulaciones</a></li>
        <li><a href=""><img class="img-margin" src="../img/oportunidades1.png"/>Oportunidades</a></li>
        <li><a href=""><img class="img-margin" src="../img/chat1.png"/>Mensajes</a></li>
        <li><a href="#/home" id="cerrar"></a></li>
      </ul>
    </nav> 
  </header>
  <main>-->
  <h2 class="oport-rec" >Postulación actual</h2>
  <div id="mainMisPostulaciones"></div>
  <section>
    <h1  class="oport-rec">Historial</h1>
    <div class="width-hist">
    <p>Estado: Concluido</p>
    <div class="flex3">
    <p>Cargo: Líder Latan Unificado</p>
    <button class="detalle">Detalle</button>
  </div>
    <img src="../img/LATAM.png" alt="latan">
  </div>
  </section>
  <!--</main>
  
  <footer id="footerMisPostulaciones">
    
      <p><a class="registro" href="#/home"><img src="../img/home.png"/></a><br>Inicio</p>
      <p><a class="registro" href=""><img src="../img/resumen.png"/></a><br>Mis Postulaciones</p>
      <p><img src="../img/oportunidades.png"/><br>Oportunidades</p>
      
      <p><img src="../img/chat.png"/><br>Mensajes</p>
    
</footer>-->`;
postulacionContainer.innerHTML = postulacionTemplate;
postulacionContainer.classList.add('container-home');

  const exit = postulacionContainer.querySelector('#cerrar');
  const buttonCompartir = postulacionContainer.querySelector('#compartir');
  const mainPost = postulacionContainer.querySelector('#mainMisPostulaciones');

  // exit.addEventListener('click', controllerExit);

  mainPost.appendChild(viewMisPosts());
  

  // const toggle = homeContainer.querySelector('#toogle');
  // const footer = homeContainer.querySelector('#footer');

  // toggle.addEventListener('click', () => {
  //   // main.classList.remove('hide');
  //   alert('hh');
  // })
  // buttonCompartir.addEventListener('click', createPost);
  // arrPost.forEach(obj => totalView.appendChild(viewPosts(obj)));

  return postulacionContainer;
};
