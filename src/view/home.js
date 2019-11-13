import { controllerExit, createPost } from '../controller.js';
// import { colaborador } from '../model/model-firebase.js';
import { viewPosts } from './post.js';

export const viewHome = () => {
  const homeContainer = document.createElement('div');
  homeContainer.innerHTML = '';
  const homeTemplate = `  
  <header>
    <div class="logo-bars">
    <label id="imagen-perfil" for="toggle"><i class="fa fa-bars" aria-hidden="true"></i></label>
    <li><input type="search"></li>
    <li><img src="../img/ring.png"/></li>
    </div>
    <input type="checkbox" class="hide" id="toggle">  
    <nav class="colorPrincipal">  
      <ul class="main-nav flex">
      <li><a href="#/profile">Nombre</a></li>
        <li><a href="">Notificaciones</a></li>
        <li><a href="#/home" id="cerrar"></a></li>
      </ul>
    </nav> 
  </header>
  <main>
    <div class="total">
      <div class="colunm-post">
        <textarea class="estilotextarea" name="comentarios" required  placeholder="¿Que quieres compartir?" id="comentario"></textarea>
        <div class= "options-post">
          <a class="registro" href="#/oportunidad" id="registrate">OPORTUNIDAD</a>
          <input type="submit" value="POSTULAR"class="btn-compartir pointer" id="compartir">
        </div>
      </div>
      <div class="posts-content" id="posts-content"></div>
    </div>
  </main>
  <footer class="footer">
  <div class="flex">
      
  </div>
</footer>`;
  homeContainer.innerHTML = homeTemplate;
  homeContainer.classList.add('container-home');

  const exit = homeContainer.querySelector('#cerrar');
  const buttonCompartir = homeContainer.querySelector('#compartir');
  const totalView = homeContainer.querySelector('#posts-content');

  exit.addEventListener('click', controllerExit);
  // buttonCompartir.addEventListener('click', createPost);
  // arrPost.forEach(obj => totalView.appendChild(viewPosts(obj)));

  // const menuHamburguesa = homeContainer.querySelector('#imagen-perfil');
  // menuHamburguesa.addEventListener('click', () => {
  //   const menuPerfil = document.createElement('div');
  //   const hamburguesaTemplate = `<ul>
  //   <li><button>kfgkdngkfdj</button></li>
  //   </ul>`
  //   menuPerfil.innerHTML = hamburguesaTemplate;
    
  // })

  return homeContainer;
};

