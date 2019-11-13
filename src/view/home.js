import { controllerExit, createPost } from '../controller.js';
// import { colaborador } from '../model/model-firebase.js';
import { viewPosts } from './post.js';

export const viewHome = (query) => {
  const homeContainer = document.createElement('div');
  homeContainer.innerHTML = '';
  const homeTemplate = `  
  <header>
    <div class="logo-bars">
    <label id="imagen-perfil" for="toggle"><img class="img-perfil" src="../img/Oval.png" alt="foto de perfil extraida del email, google o facebook del usuario"/></label>
    <li><input type="search" class="search"></li>
    <li><img class="img2" src="../img/ring.png"/></li>
    </div>
    <input type="checkbox" class="hide" id="toggle">  
    <nav class="colorPrincipal navbar">  
      <ul class="main-nav flex">
        <li><a href="#/profile">Ver perfil</a></li>
        <li><a href=""><img src="../img/notificacion.png"/>Notificaciones</a></li>
        <li><a href=""><img src="../img/resumen1.png"/>Postulaciones</a></li>
        <li><a href=""><img src="../img/oportunidades1.png"/>Oportunidades</a></li>
        <li><a href=""><img src="../img/chat1.png"/>Mensajes</a></li>
        <li><a href="#/home" id="cerrar"></a></li>
      </ul>
    </nav> 
  </header>
  <main id="main">
  </main>
  <footer id="footer">
    <ul class="footer flex">
      <li><a class="registro" href="#/posts"><img src="../img/home.png"/></a>Inicio</li>
      <li><img src="../img/resumen.png"/>Mis Postulaciones</li>
      <li><img src="../img/oportunidades.png"/>Oportunidades</li>
      <li><img src="../img/chat.png"/>Mensajes</li>
    </ul>
</footer>`;
  homeContainer.innerHTML = homeTemplate;
  homeContainer.classList.add('container-home');

  const exit = homeContainer.querySelector('#cerrar');
  const buttonCompartir = homeContainer.querySelector('#compartir');
  const main = homeContainer.querySelector('#main');

  exit.addEventListener('click', controllerExit);

  query.forEach(doc => {
    main.appendChild(viewPosts(doc));
  })

  // const toggle = homeContainer.querySelector('#toogle');
  // const footer = homeContainer.querySelector('#footer');

  // toggle.addEventListener('click', () => {
  //   // main.classList.remove('hide');
  //   alert('hh');
  // })
  // buttonCompartir.addEventListener('click', createPost);
  // arrPost.forEach(obj => totalView.appendChild(viewPosts(obj)));

  return homeContainer;
};

