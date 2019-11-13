import { controllerExit, createPost } from '../controller.js';
// import { colaborador } from '../model/model-firebase.js';
// import { currentUser } from "../model/model-firebase.js";
import { viewPosts } from './post.js';
import { currentUser } from '../model/model-firebase.js';

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

        <li class="hide" id="perfil-add"><a href=""><img class="img-perfil" src="../img/Oval.png" alt="foto de perfil"/> Gestión humana </a></li>
        <li><a href=""><img class="img-margin" src="../img/notificacion.png"/>Notificaciones</a></li>
        <li><a href=""><img class="img-margin" src="../img/resumen1.png"/>Postulaciones</a></li>
        <li><a href=""><img class="img-margin" src="../img/oportunidades1.png"/>Oportunidades</a></li>
        <li><a href=""><img class="img-margin" src="../img/chat1.png"/>Mensajes</a></li>
        <li><a href="#/home" id="cerrar"></a></li>
      </ul>
    </nav> 
  </header>
  <main id="main">
  </main>
  <footer id="footer">
    
      <p><a class="registro" href="#/posts"><img src="../img/home.png"/></a><br>Inicio</p>
      <p><a class="registro" href="#/mispostulaciones"><img src="../img/resumen.png"/></a><br>Mis Postulaciones</p>
      <p><img src="../img/oportunidades.png"/><br>Oportunidades</p>
      
      <p><img src="../img/chat.png"/><br>Mensajes</p>
    
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

  const addUser = homeContainer.querySelector('#perfil-add');

  if(currentUser().email.slice(0,8)==='75892951') {
    addUser.classList.remove('hide');
    // console.log('holi');
  } else {
    addUser.classList.add('hide');
  }
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

