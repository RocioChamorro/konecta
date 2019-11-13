import { controllerExit, createPost } from '../controller.js';
import { addPost } from '../model/model-firestore.js';
import { viewPosts } from './post.js';

export const viewOportunidad = () => {
  const oportunidadContainer = document.createElement('div');
  oportunidadContainer.innerHTML = '';
  const oportunidadTemplate = `  
  
  <h1 class="title-oportunidad">NUEVA OPORTUNIDAD LABORAL</h1>
    <label class="text-label">Área solicitante</label>
    <select class="inputs" id="area" >
        <option value="" selected="true" disabled="disabled">Seleccionar</option>
        <option value="calidad" id="">Calidad</option>
        <option value="control" id="">Control de gestión</option>
        <option value="humana" id="">Gestión humana</option>
        <option value="operaciones" id="">Operaciones</option>
    </select>

    <label class="text-label">Puesto</label>
    <select class="inputs" id="puesto" >
        <option value="" selected="true" disabled="disabled">Seleccionar</option>
        <option value="analista" id="">Analista calidad</option>
        <option value="asistente" id="">Asistente calidad</option>
        <option value="jefe" id="">Jefe calidad</option>
        <option value="coordinador" id="">Coordinador calidad</option>
    </select>

    <label class="text-label">Descripción del puesto/función</label>
    <textarea class="inputs height-textarea" name="descripcion" required id="descripcion"></textarea>

    <label class="text-label">Requisitos obligatorios</label>

    <div class="select-time">
    <p class="text-label no-bold">Antiguedad</p>
    <select class="time" id="antiguedad" >
        <option value="3" id="">3 meses</option>
        <option value="4" id="">4 meses</option>
        <option value="5" id="">5 meses</option>
        <option value="6" id="">6 meses</option>
    </select>
    </div>

    <p class="text-label no-bold">Presentismo</p>
    <div class="select-time">
    <label><input type="text" class="time" id="presentismo"/><span class="bolder">%</span></label>
    
    <select class="time" id="presentismo-time" >
        <option value="3" id="">3 meses</option>
        <option value="4" id="">4 meses</option>
        <option value="5" id="">5 meses</option>
        <option value="6" id="">6 meses</option>
    </select>
    </div>

    <div class="select-time">
    <p class="text-label no-bold">No sanciones en los últimos:</p>
    <select class="time" id="sanciones" >
        <option value="3" id="">3 meses</option>
        <option value="4" id="">4 meses</option>
        <option value="5" id="">5 meses</option>
        <option value="6" id="">6 meses</option>
    </select>
    </div>

    <label class="text-label">Requisitos adicionales/conocimientos</label>
    <textarea class="inputs height-textarea" name="adicional" id="requisitos"></textarea>

    <label class="text-label">Beneficios</label>
    <textarea class="inputs height-textarea" name="descripcion" id="beneficios"></textarea>

    <label class="text-label">Etapas de selección</label>
    <form class="form-check" id="etapas" >
        <input class="check" type="checkbox" id="etapa1" name="etapa" value="Assesment"> Assesment <br>
        <input class="check" type="checkbox" id="etapa2" name="etapa" value="Entrevista cliente/técnica"> Entrevista cliente/técnica<br>
        <input class="check" type="checkbox" id="etapa3" name="etapa" value="Entrevista individual" checked> Entrevista individual<br><br>
    </form>
    
    <label class="text-label">Cierre de convocatoria</label>
    <input class="date" type="date" id="cierre" name="" placeholder="dd/mm/aaaa">

    <button class="btn-login oportunidad" name="button" type="submit" id="crear-oportunidad">CREAR OPORTUNIDAD</button>
  `;
  oportunidadContainer.innerHTML = oportunidadTemplate;
  oportunidadContainer.classList.add('container-home', 'auto');

  const exit = oportunidadContainer.querySelector('#cerrar');
  const buttonCompartir = oportunidadContainer.querySelector('#compartir');
  const totalView = oportunidadContainer.querySelector('#posts-content');

  // exit.addEventListener('click', controllerExit);

  const area = oportunidadContainer.querySelector('#area');
  const puesto = oportunidadContainer.querySelector('#puesto');
  const descripcion	 = oportunidadContainer.querySelector('#descripcion');
  const antiguedad = oportunidadContainer.querySelector('#antiguedad');
  const presentismoTime = oportunidadContainer.querySelector('#presentismo-time');
  const presentismo = oportunidadContainer.querySelector('#presentismo');
  const sanciones = oportunidadContainer.querySelector('#sanciones');
  const requisitos = oportunidadContainer.querySelector('#requisitos');
  const beneficios = oportunidadContainer.querySelector('#beneficios');
  const etapa1 = oportunidadContainer.querySelector('#etapa1');
  const etapa2 = oportunidadContainer.querySelector('#etapa2');
  const etapa3 = oportunidadContainer.querySelector('#etapa3');
  const cierre = oportunidadContainer.querySelector('#cierre');



  const addOportunidad = oportunidadContainer.querySelector("#crear-oportunidad");

  addOportunidad.addEventListener('click', () => {

    const area1 = area.value;
    const puesto1 = puesto.value;
    const descripcion1 = descripcion.value;
    const antiguedad1 = antiguedad.value;
    const presentismoTime1 = presentismoTime.value;
    const presentismo1 = presentismo.value;
    const sanciones1 = sanciones.value;
    const requisitos1 = requisitos.value;
    const beneficios1 = beneficios.value;
    const check = [etapa1,etapa2,etapa3];
    // const check2 = etapa2.checked;
    // const check3 = etapa3.checked;
    const cierre1 = cierre.value;
    const img = 'https://www.enfoquederecho.com/wp-content/uploads/2018/09/1__cZLHi_Zs-IhrfHSCm6EYA.jpeg';
    let arr = [];
    for(let i = 0; i< check.length; i++) {
      
      if(check[i].checked === true) {
        arr.push(check[i].value);
      } else {
        arr.push('');
      }  
    }
    // console.log(arr);
    const fecha = new Date();
    const options = {
      year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'
  };
  const hora = `${fecha.toLocaleDateString("es-ES", options)}`;
    addPost(area1, puesto1, descripcion1, antiguedad1, presentismoTime1, presentismo1, sanciones1, requisitos1, beneficios1, arr[0], arr[1], arr[2], cierre1, hora, img)
    
    

    // console.log(uno,dos,tres,cuatro,cinco,seis,siete,ocho,nueve, 
    //   etapa1.value, etapa1.checked, 
    //   etapa2.value, etapa2.checked, 
    //   etapa3.value, etapa3.checked)
    // editPrivacity(objPost.id, indice);
  });


// buttonCompartir.addEventListener('click', createPost);
// arrPost.forEach(obj => totalView.appendChild(viewPosts(obj)));

// const menuHamburguesa = homeContainer.querySelector('#imagen-perfil');
// menuHamburguesa.addEventListener('click', () => {
//   const menuPerfil = document.createElement('div');
//   const hamburguesaTemplate = `<ul>
//   <li><button>kfgkdngkfdj</button></li>
//   </ul>`
//   menuPerfil.innerHTML = hamburguesaTemplate;

// })

return oportunidadContainer;
};

