import { readPostulaciones } from '../model/model-firestore.js';
import { currentUser } from "../model/model-firebase.js";
export const viewMisPosts = () => {
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
        <div class="cards">
          <div class="card-title"><h1>${e.puesto}</h1></div>
          <div class="card-body" id="margin-card"><p><span class="spanTitulo">Área : </span>${e.area}</p>
          <p><span class="spanTitulo">Cierre de Convocatoria : </span>${e.cierre}</p></div>
          <div class="btnContainer"><button id="verMasBtn">Ver más</button></div>
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