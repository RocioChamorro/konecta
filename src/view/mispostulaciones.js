import { controllerExit, createPost } from "../controller.js";
// import { colaborador } from '../model/model-firebase.js';
import { viewMisPosts } from "./misposts.js";

export const viewMisPostulaciones = () => {
  const homeContainer = document.createElement("div");
  homeContainer.innerHTML = "";
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
      <li><a href=""><img class="img-perfil" src="../img/Oval.png" alt="foto de perfil"/> Gestiòn humana </a></li>

        <li><a href=""><img class="img-margin" src="../img/notificacion.png"/>Notificaciones</a></li>
        <li><a href=""><img class="img-margin" src="../img/resumen1.png"/>Postulaciones</a></li>
        <li><a href=""><img class="img-margin" src="../img/oportunidades1.png"/>Oportunidades</a></li>
        <li><a href=""><img class="img-margin" src="../img/chat1.png"/>Mensajes</a></li>
        <li><a href="#/home" id="cerrar"></a></li>
      </ul>
    </nav> 
  </header>
  <main>
  <h1>Postulación Actual</h1>
  <div id="mainMisPostulaciones"></div>
  <section>
    <h1>Historial</h1>
    <div>
      Estado: Concluido
      Cargo: Líder Latan Unificado
      <button>Detalle</button>
      <img src="" alt="latan">
    </div>
    <div>
      Estado: Concluido
      Cargo: Representante Latam Pass
      <button>Detalle</button>
      <img src="" alt="latan">
    </div>
  </section>
  </main>
  
  <footer id="footerMisPostulaciones">
    
      <p><a class="registro" href="#/home"><img src="../img/home.png"/></a><br>Inicio</p>
      <p><a class="registro" href="#/mispostulaciones"><img src="../img/resumen.png"/></a><br>Mis Postulaciones</p>
      <p><img src="../img/oportunidades.png"/><br>Oportunidades</p>
      
      <p><img src="../img/chat.png"/><br>Mensajes</p>
    
</footer>`;
  homeContainer.innerHTML = homeTemplate;
  homeContainer.classList.add("container-home");

  const exit = homeContainer.querySelector("#cerrar");
  const buttonCompartir = homeContainer.querySelector("#compartir");
  const main = homeContainer.querySelector("#mainMisPostulaciones");

  exit.addEventListener("click", controllerExit);

  main.appendChild(viewMisPosts());

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
