import { readPostulaciones } from '../model/model-firestore.js';
import { currentUser } from "../model/model-firebase.js";
export const detallesPostActual = () => {
  console.log('oh')
  //   const header = `<header>
  //   <div class="logo-bars">
  //   <a class="fas fa-arrow-left" href=""></a>
  //   <h2>Mis Postulaciones</h2>
  //   </div>
  //   <input type="checkbox" class="hide" id="toggle">  
  // </header>`;
    const homeContainer = document.createElement('div');
    homeContainer.innerHTML = ''
    let homeTemplate=''
    const dniUser = currentUser();
    const dni=dniUser.email.slice(0,8);

    readPostulaciones(dni,(doc)=>doc.forEach(e => {
      console.log(e)
         
     homeTemplate += `  
        <div class="puesto1">
        <h1 class="oport-puesto">${e.puesto}</h1>
          <div class="card-title"><h3 class="title2">Descripciòn del puesto</h3></div>
          <div class="card-body" id="margin-card">
          <p><span class="spanTitulo">Cargo : </span>${e.puesto}</p>
          <p><span class="spanTitulo">Área : </span>${e.area}</p>
          <p><span class="spanTitulo class="oport-rec"">Fin del Proceso : </span>${e.cierre}</p></div>
          <div class="card-title class="oport-rec"><h3 class="title2">Funciones:</h3></div>
          <p>${e.requisitos}</p>
          <div class="card-title class="oport-rec"><h3 class="title2">Conocimientos:</h3></div>
          <p>${e.descripcion}</p>
          <div class="card-title class="oport-rec"><h3 class="title2">Beneficios:</h3></div>
          <p>${e.beneficios}</p>
        </div>`;
  
  homeContainer.innerHTML = homeTemplate;
}));

  // const historialDiv = document.createElement('div');
//  const  historial=<h1>Historial</h1>
//   <div>
//           Estado: Concluido
//           Cargo: Líder Latan Unificado
//           <button>Detalle</button>
//           <img src="" alt="latan">
//   </div>
//   <div>
//           Estado: Concluido
//           Cargo: Representante Latam Pass
//           <button>Detalle</button>
//           <img src="" alt="latan">
//   </div>


    return homeContainer;
  };