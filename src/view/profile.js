import { currentUser } from '../model/model-firebase.js';

export const viewProfile = () => {
  const profileContainer = document.createElement('div');
  profileContainer.innerHTML = '';
  const profileTemplate = `
    <form class="form-profile">
      
      <a href="#/home" class="volver">Volver</a>
    </form>
    `;
  profileContainer.innerHTML = profileTemplate;
  profileContainer.classList.add('container-profile');
  return profileContainer;
};
