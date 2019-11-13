export const viewOportunidadesrh = () => {
    const oportunidadesrhContainer = document.createElement('div');
    oportunidadesrhContainer.innerHTML = '';
    const oportunidadesrhTemplate = `
        <header class="header1">
            <a href="#/home"><img class="marginFlecha" src="../img/flecha.png"/></a>
            <label class="letraHeader">ANALISTA DE CDG - CAPACITACIÓN</label>
            <img class="img2" src="../img/ring.png"/>
        </header>
        <main class ="main1" >
            <label class="text-label">OPORTUNIDADES</label>
            <div class="cajaPostulante">
                <div class = "caja2Postulante encabezadoCaja">  
                    <label class="letraHeader">ANALISTA DE CDG - CAPACITACIÓN</label><br>
                </div>
            <div class="flex positionDiv">    
                <div class="flex">
                    <div class="circulo"></div>
                    <div class="circulo"></div>
                    <div class="circulo"></div>
                    <div class="circulo"></div>
                </div>
                <button class="btnVermas"><a class=" letraHeader" href="#/postulantes">VER MÁS</button>
            </div>    
            
        </main>
    
    `
    oportunidadesrhContainer.innerHTML = oportunidadesrhTemplate;
    return oportunidadesrhContainer;
};