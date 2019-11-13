import {detallesPostActual} from "../view/detallepostsactual.js"

export const viewDetallePostActual = () => {
  const postulacionContainer = document.createElement('div');
  postulacionContainer.innerHTML = '';
  
  const postulacionTemplate = `  
  <header id="header">
    <div class="logo-bars">
    <label id="imagen-perfil" for="toggle"><img class="img-perfil" src="../img/Oval.png" alt="foto de perfil extraida del email, google o facebook del usuario"/></label>
    <li><input type="search" class="search"></li>
    <li><img class="img2" src="../img/ring.png"/></li>
    </div>
    <input type="checkbox" class="hide" id="toggle">  
    <nav class="colorPrincipal navbar"> 
      <ul class="main-nav flex">

        <li class="hide" id="perfil-add"><a><img class="img-perfil" src="../img/Oval.png" alt="foto de perfil"/> Gestión humana </a></li>
        <li><a href=""><img class="img-margin" src="../img/notificacion.png"/>Notificaciones</a></li>
        <li><a href="#/mispostulaciones"><img class="img-margin" src="../img/resumen1.png"/>Postulaciones</a></li>
        <li><a href="#/postulantes"><img class="img-margin" src="../img/oportunidades1.png"/>Oportunidades</a></li>
        <li><a href=""><img class="img-margin" src="../img/chat1.png"/>Mensajes</a></li>
        <li><a href="#/home" id="cerrar"></a></li>
      </ul>
    </nav> 
  </header>
  <main id="mainMisPostulaciones">
  </main>
  <footer id="footer">
    
      <p><a class="registro" href="#/home"><img src="../img/home.png"/></a><br>Inicio</p>
      <p class="hide" id="option-rrhh"><a class="registro" ><i class="fa fa-plus-circle more-post" aria-hidden="true"></i></a><br>Nueva oportunidad</p>

      <p id="option-col" ><a class="registro" ><img src="../img/resumen.png"/></a><br>Mis Postulaciones</p>
      <p id="oportunidades"><a class="registro"><img src="../img/oportunidades.png"/></a><br>Oportunidades</p>
      
      <p><img src="../img/chat.png"/><br>Mensajes</p>

      <!--<p><a class="registro" href="#/home"><img src="../img/home.png"/></a><br>Inicio</p>
      <p><a class="registro" href="#/mispostulaciones"><img src="../img/resumen.png"/></a><br>Mis Postulaciones</p>
      <p><a class="registro" href="#/postulantes"><img src="../img/oportunidades.png"/></a><br>Oportunidades</p>-->
</footer>`;
postulacionContainer.innerHTML = postulacionTemplate;
postulacionContainer.classList.add('container-home');

  const exit = postulacionContainer.querySelector('#cerrar');
  const buttonCompartir = postulacionContainer.querySelector('#compartir');
  const mainPost = postulacionContainer.querySelector('#mainMisPostulaciones');

  // exit.addEventListener('click', controllerExit);

  mainPost.appendChild(detallesPostActual())

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
