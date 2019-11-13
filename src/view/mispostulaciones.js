
import { readPostulaciones } from '../model/model-firestore.js';
import { currentUser } from "../model/model-firebase.js";
export const viewMisPostulaciones = () => {
    const header = `<header>
    <div class="logo-bars">
    <a class="fas fa-arrow-left" href=""></a>
    <h2>Mis Postulaciones</h2>
    </div>
    <input type="checkbox" class="hide" id="toggle">  
  </header>`;
    const homeContainer = document.createElement('div');
    homeContainer.innerHTML = ''
    let homeTemplate=''
    const dniUser = currentUser();
    const dni=dniUser.email.slice(0,8);
    console.log('dniiiiii', dni);
    console.log(typeof(dni));
    console.log(dniUser);
    console.log(dniUser.email)

    readPostulaciones(dni,(doc)=>doc.forEach(e => {
      console.log(e)
         
     homeTemplate += `  
    <main>
        <h1>Postulación Actual</h1>
      <div class="">
        <div class="">
          <h1>${e.puesto}</h1>
        </div>
        <div class="posts-content" id="posts-content">
            <p><strong>Área : </strong>${e.area}</p>
            <p><strong>Cierre de Convocatoria : </strong>${e.cierre}</p>
            <button>Ver más</button>
        </div>

      </div>
    </main>
    <section>
    <h1>Historial</h1>
    <div>
            Estado: Concluido
            Cargo: Líder Latan Unificado
            <button>Detalle</button>
            <img src="" alt="latan">
    </div>
    <div>
            Estado: Concluido
            Cargo: Representante Latam Pass
            <button>Detalle</button>
            <img src="" alt="latan">
    </div>
    </section>

    <footer class="footer">
    <div class="flex">
        
    </div>
  </footer>`;
  homeContainer.innerHTML = header + homeTemplate;
})
);
    return homeContainer;
  };