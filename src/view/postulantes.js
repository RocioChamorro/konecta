export const viewPostulantes = () => {
    const postulantesContainer = document.createElement('div');
    postulantesContainer.innerHTML = '';
    const postulantesTemplate = `
    <header>
    <div class="logo-bars">
    <label id="imagen-perfil" for="toggle"><i class="fa fa-bars" aria-hidden="true"></i></label>
    <li><input type="search"></li>
    <li><img src="../img/ring.png"/></li>
    </div>
    <input type="checkbox" class="hide" id="toggle">  
    <nav class="colorPrincipal">  
      <ul class="main-nav flex">
      <li><a href="#/profile">Nombre</a></li>
        <li><a href="">Notificaciones</a></li>
        <li><a href="#/home" id="cerrar"></a></li>
      </ul>
    </nav> 
  </header>
  <main>
  <h1 class="title-oportunidad">N postulantes</h1>
    <label class="text-label">Mostrar</label>
    <select class="inputs" id="area" >
    </select>

    <label class="text-label">Filtrar-cumplen</label>
    <form class="form-check" id="etapas" >
        <input class="check" type="checkbox" id="etapa1" name="etapa" value="Assesment"> Antiguedad <br>
        <input class="check" type="checkbox" id="etapa2" name="etapa" value="Entrevista cliente/técnica"> Sanciones<br>
        <input class="check" type="checkbox" id="etapa3" name="etapa" value="Entrevista individual" checked> Presentismo<br><br>
    </form>

    <label class="text-label">Filtar - Estado de proceso postulante</label>
    <form class="form-check" id="etapas" >
        <input class="check" type="checkbox" id="etapa1" name="etapa" value="Assesment"> Convocatoria <br>
        <input class="check" type="checkbox" id="etapa2" name="etapa" value="Entrevista cliente/técnica"> Assement<br>
        <input class="check" type="checkbox" id="etapa3" name="etapa" value="Entrevista individual" checked> Entrevista cliente/técnica<br>
        <input class="check" type="checkbox" id="etapa4" name="etapa" value="Entrevista personal"> Entrevista personal<br>
    </form>

    <label class="text-label">POSTULANTES</label>
    <div class="cajaPostulante">
        <label id="imagen-perfil" for="toggle"><img class="img-perfil" src="../img/Oval.png" alt="foto de perfil extraida del email, google o facebook del usuario"/></label>
        <a href="#/profile">Ver perfil</a>
        <div class = "caja2Postulante">
            <ul class="flex styleNone">
                <li>Antiguedad</li>
                <li>Presentismo</li>
                <li>Sanciones</li>
            </ul>
        </div>
        <div>
            <label class="text-label">ESTADO DE PROCESO</label>
            <div class="flex">
                <div class="circulo"></div>
                <div class="circulo verde"></div>
                <div class="circulo"></div>
                <div class="circulo"></div>
            </div>
            <div>
            <button class="botones">RECHAZAR</button>
            <button class="botones">PASA</button>
            </div>
        </div>
    </div>
    `
    postulantesContainer.innerHTML = postulantesTemplate;
    return postulantesContainer;
}