export const viewPostulantes = () => {
    const postulantesContainer = document.createElement('div');
    postulantesContainer.innerHTML = '';
    const postulantesTemplate = `
    <header class="header1">
        <a href="#/home"><img class="marginFlecha" src="../img/flecha.png"/></a>
        <label class="letraHeader">ANALISTA DE CDG - CAPACITACIÓN</label>
        <img class="img2" src="../img/ring.png"/>
    </header>
    <main class ="main1" >
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
            <div class="posicionDiv">
                <label id="imagen-perfil" for="toggle"><img class="img-perfil" src="../img/Oval.png" alt="foto de perfil extraida del email, google o facebook del usuario"/></label>
                <div class="posicionLabel">
                    <label class="text-label">Fiorela Sanchez Rodriguez</label><br>
                    <a href="#/profile" class="" >Ver perfil</a>
                </div>
            </div>
            <div class = "caja2Postulante">
                <ul class="flex styleNone">
                    <li class="letraPostulacion">Antiguedad</li>
                    <li class="letraPostulacion">Presentismo</li>
                    <li class="letraPostulacion">Sanciones</li>
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
    </main>
    <footer id="footer">
    
      <p><a class="registro" href="#/home"><img src="../img/home.png"/></a><br>Inicio</p>
      <p><img src="../img/resumen.png"/><br>Mis Postulaciones</p>
      <p><img src="../img/oportunidades.png"/><br>Oportunidades</p>
      
      <p><img src="../img/chat.png"/><br>Mensajes</p>
  
</footer>
    `
    postulantesContainer.innerHTML = postulantesTemplate;
    return postulantesContainer;
}