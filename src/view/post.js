/* eslint-disable no-console */
import {
  deletePost,
  editPost,
  addComment,
  readComments,
  editLikes,
  editPrivacity
} from "../model/model-firestore.js";

import { currentUser } from "../model/model-firebase.js";
import { viewComment } from "./comment.js";
import { timePublic } from "../controller.js";

export const viewPosts = doc => {
  console.log(doc);

  const postContainer = document.createElement("div");

  let postTemplate = "";
 
    postTemplate += `   
      <div class="comandos-post">
        <div>
          <div class="flex-creador-privicity ">
            <h3>Convocatoria</h3>
            <div>
            <p id="nombre" class="creador">${doc.puesto}</p>
            <p id="privacidad-no-user"><strong>Área: </strong> ${doc.area}</p>
            </div>
            <strong>Funciones: </strong>
            <p>- ${doc.descripcion}</p>
            <div><img class="imgConvocatoria" src="${doc.imagen}" alt=""></div>
            <button class="btn-compartir pointer" id="">
              POSTULAR
            </button>
          </div>
          <p class="clock"><i class="fa fa-clock-o" aria-hidden="true"></i> hora</p>
        </div>
        
      </div>
      <a class="registro" href="#/oportunidad" id="registrate">VER OPORTUNIDAD</a>
      <a class="registro" href="#/postulantes" id="registrate">POSTULANTES</a>
    `;
    postContainer.innerHTML = postTemplate;
    // postContainer.classList.add("");

  return postContainer;
};

// const postularse = postContainer.querySelector('#postularse');
// postularse.addEventListener('click', () => {
//   alert('dhffjhh')

// })