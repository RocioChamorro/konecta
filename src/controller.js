/* eslint-disable no-console */
// aqui exportaras las funciones que necesites
import {
  loginEmail,
  loginFacebook,
  loginGoogle,
  loginRegister,
  loginOut,
  currentUser,
  findDni,
} from './model/model-firebase.js';

import { addPost } from './model/model-firestore.js';

const changeRoute = (route) => {
  window.location.hash = route;
};

const findColaborador = (dni1) => {
  firebase.firestore().collection('colaboradores').doc(dni1).get().then(dni1 => {
    if (!dni1.exists) {
      console.log("No existe el colaborador");
      document.getElementById('error').innerHTML = 'No existe el colaborador';
      //Entiendo que aqui va el código para asignar el mail e imagen
    }
    else {
      controllerRegister();
      console.log("Existe el colaborador");
    }
  }).catch(function (error) {
    
    console.error("Error updating document: ", error);
  });
};

const updateColaborador = (dni1, talentkEmail) => {
  firebase.firestore().collection('colaboradores').doc(dni1).update({
    Email_Personal: talentkEmail
  })
    .then(function () {
      console.log("Document successfully updated!");
    })
    .catch(function (error) {
      console.error("Error updating document: ", error);
    });
};



const maysFirst = (string) => {
  const resultFirst = string.charAt(0).toUpperCase() + string.slice(1);
  return resultFirst;
};
export const controllerLogin = () => {
  window.event.preventDefault();
  const dni1 = document.getElementById('dni').value;
  const dni = dni1 + '@grupokonecta.pe';
  const password = document.getElementById('password').value;
  loginEmail(dni, password).then((result) => {

    console.log(result);
    console.log(result.user.emailVerified);
    changeRoute('#/home');
    /*  if (result.user.emailVerified === false) {
       document.getElementById('error').innerHTML = 'No has verificado tu dirección de email';
     } else {
       changeRoute('#/home');
     } */
  }).catch((error) => {
    const errorMessage = error.message;
    if (dni1 === '' || password === '') {
      document.getElementById('error').innerHTML = 'Ingresa los campos completos';
    } else if (errorMessage) {
      document.getElementById('error').innerHTML = 'La contraseña no es válida o el usuario no está registrado.';
    }
  });
};
const emailVerification = () => {
  currentUser().sendEmailVerification()
    .then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
};

export const controllerRegister = () => {
  window.event.preventDefault();
  const dni1 = document.getElementById('dni').value;
  const dni = dni1 + '@grupokonecta.pe'
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const passwordTwo = document.getElementById('second-password').value;
  if (password === passwordTwo) {
    loginRegister(dni, password).then((response) => {
      //  const use = currentUser();
      updateColaborador(dni1, email);
      // emailVerification();
      const newName = maysFirst(email.toLowerCase());
      document.getElementById('screen-register').innerHTML = `
      <h1 class="register-ok">¡Bienvenid@, ${newName}!</h1>
      <p class="ok">Te enviamos un correo electrónico para que actives tu cuenta.</p>
      <img src="../img/confeti.gif">
      <a class="ir-login" href="#/login" id="registrate">Ir a Log in</a>`;

    }).catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      /* if (errorMessage === 'The email address is badly formatted.') {
        document.getElementById('error').innerHTML = 'Completa correctamente los campos.';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        document.getElementById('email').classList.add('focus');
        document.getElementById('password').classList.add('focus');
      } else  */
      /*  if (errorCode === 'auth/weak-password') {
         document.getElementById('error').innerHTML = 'La contraseña debe tener 6 caracteres o más.';
         document.getElementById('password').value = '';
         document.getElementById('email').classList.remove('focus');
         document.getElementById('password').classList.add('focus');
       } else {
         document.getElementById('error').innerHTML = 'Ya existe un registro con ésta cuenta';
       } */
    });
  }
  else {
    document.getElementById('error').innerHTML = 'Las contraseñas deben coincidir';
  }
};

export const controllerExit = () => {
  loginOut().then((response) => {
    changeRoute('#/login');
    console.log('Saliendo....');
    console.log(response);
  }).catch((error) => {
    console.log(error);
  });
};

export const controllerFacebook = () => {
  loginFacebook().then((response) => {
    console.log(response);
    changeRoute('#/home');
  }).catch((error) => {
    console.log(error);
  });
};

export const controllerGoogle = () => {
  loginGoogle().then((response) => {
    console.log(response);
    changeRoute('#/home');
  }).catch((error) => {
    console.log(error);
  });
};

const twoDecimal = (num) => {
  let newNum = num;
  if (newNum <= 9) {
    newNum = `0${num}`;
  }
  return newNum;
};

export const timePublic = (fullDate) => {
  const mes = twoDecimal(fullDate.getMonth() + 1);
  const day = twoDecimal(fullDate.getDate());
  const year = twoDecimal(fullDate.getFullYear());
  const hour = twoDecimal(fullDate.getHours());
  const minutes = twoDecimal(fullDate.getMinutes());
  const seconds = twoDecimal(fullDate.getSeconds());
  const cad = `${day}/${mes}/${year} - ${hour}:${minutes}:${seconds}`;
  console.log(cad);
  return cad;
};

export const createPost = () => {
  const comentario = document.getElementById('comentario').value;
  const privacidad = document.getElementById('post-privacy').value;
  // const f = new Date();
  const date = timePublic(new Date());
  let likes = document.getElementById('contador');
  likes = 0;
  console.log(privacidad);
  addPost(comentario, currentUser().email, currentUser().uid, privacidad, likes, date)
    .then((response) => {
      document.getElementById('comentario').value = '';
      console.log('se agrego a tu colleccion', response.id);
    }).catch((error) => {
      console.log('no se agrego', error);
    });
};

export const getData = (coleccionName) => {
  return  firebase.firestore().collection(coleccionName).get();
};