import { controllerExit, createPost } from "../controller.js";
// import { colaborador } from '../model/model-firebase.js';
import { viewMisPosts } from "./misposts.js";


export const viewMisPostulaciones = () => {
  const postulacionContainer = document.createElement('div');
  postulacionContainer.innerHTML = '';
  const postulacionTemplate = `  

  <h2 class="oport-rec" >Oportunidades recientes</h2>
  <div id="mainMisPostulaciones"></div>
  <section>
    <h1  class="oport-rec">Historial</h1>
    <div>
      <p>Estado: Concluido</p>
    <div>
      Cargo: Líder Latan Unificado
      <button>Detalle</button>
    </div>
      <img src="" alt="latan">
    </div>
  </section>
  `;
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
