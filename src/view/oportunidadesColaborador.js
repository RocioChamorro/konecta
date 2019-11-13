// import { controllerExit, createPost } from "../controller.js";
// import { colaborador } from '../model/model-firebase.js';
import { viewOporColaborador } from "./oporColaborador.js";

export const viewOporColaboradores = () => {
    const oporContainer = document.createElement('div');
    oporContainer.innerHTML = '';
    const oportunidadTemplate = `  
  <h1 class="oport-rec">Oportunidades Recientes:</h1>
  <div id="mainMisPostulaciones"></div>
  `;
    oporContainer.innerHTML = oportunidadTemplate;
    oporContainer.classList.add('container-home');

    const mainPost = oporContainer.querySelector('#mainMisPostulaciones');

    mainPost.appendChild(viewOporColaborador());

    return oporContainer;
};
