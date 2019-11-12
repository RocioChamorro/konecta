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

export const viewPosts = query => {
  console.log(query);

  const postContainer = document.createElement("div");

  let postTemplate = "";
  query.forEach(doc => {
    console.log(doc);
    postTemplate += `   
      <div class="comandos-post">
        <div>
          <div class="flex-creador-privicity">
            <h3>Convocatoria</h3>
            <div>
            <p id="nombre" class="creador">${doc.puesto}</p>
            <p id="privacidad-no-user"><strong>Área: </strong> ${doc.area}</p>
            </div>
            <strong>Funciones: </strong>
            <p>- ${doc.descripcion}</p>
            <div><img class="imgConvocatoria" src="${doc.imagen}" alt=""></div>
            <button class="" id="">
              POSTULAR
            </button>
          </div>
          <p class="clock"><i class="fa fa-clock-o" aria-hidden="true"></i> hora</p>
        </div>
      </div>
    `;
    postContainer.innerHTML = postTemplate;
    // postContainer.classList.add("");
  });
  return postContainer;
};
