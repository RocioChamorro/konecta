import { currentUser } from '../model/model-firebase.js';

export const viewProfile = () => {
  const profileContainer = document.createElement('div');
  profileContainer.innerHTML = '';
  const profileTemplate = `
    <form class="form-profile">
      <img class="img-profile" src="../img/user.png" alt="imagen de usuario por defecto"/>
      <label class="name-profile" id="nombre">Nombre</label>
      <label class="name-profile" id="nombre">Puesto</label>
      <label class="name-profile" id="nombre">Sobre mi</label>

      <label class="label-profile">Nombres y Apellidos: </label>
      <label class="label-profile">DNI: </label>
      <label class="label-profile">Cargo: </label>

      <div class="editar">
      
      <label><i class="fa fa-pencil" aria-hidden="true"></i>Editar</label>
      <label class="label-profile">Correo: </label>
      <label class="label-profile">Teléfono celular: </label>
      </div>
      <!--<a href="#/home" class="volver">Volver</a>-->
    </form>
    `;
  profileContainer.innerHTML = profileTemplate;
  profileContainer.classList.add('container-profile');
  return profileContainer;
};
