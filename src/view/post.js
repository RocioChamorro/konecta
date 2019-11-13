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
        <div class="flex align">
        <img class="img-perfil" src="../img/Oval.png" alt="foto de perfil extraida del email, google o facebook del usuario"/>
        <div>
        <p class="rrhh">Recursos Humanos</p>
        <p>${doc.fecha}</p>
        </div>
        </div>  
        <div class="flex-creador-privicity">
            <h3 class="margin">CONVOCATORIA</h3>
            <div class="margin">
            <p id="nombre" class="creador">${doc.puesto}</p>
            <p id="privacidad-no-user">Área: ${doc.area}</p>
            </div>
            <p>Funciones: </p>
            <p class="margin">- ${doc.descripcion}</p>
            <img class="imgConvocatoria margin" src="${doc.imagen}" alt="">
            <button class="btn-compartir pointer" id="">
              POSTULAR
            </button>
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