console.log(campers);

//6. Selectors
const nombreCamper = document.querySelector('#nombre');
const edadCamper = document.querySelector('#edad');
const minPromedio = document.querySelector('#minimo');
const maxPromedio = document.querySelector('#maximo');
const nivelCamper = document.querySelector('#nivelCampus');
const nivelIngles = document.querySelector('#nivelIngles');
const especialidad = document.querySelector('#especialidad');
const expertoTecnologia = document.querySelector('#expertoTecnologia');
const celular = document.querySelector ('#celular')
const direccion = document.querySelector ('#direccion')

/* Version2 - taller simulacro */

let search = document.querySelector('#input1')

/* 1. Llenar dinámicamente valores en select de nombres de Campers*/

campers.forEach((optionCamper)=>{
    const opcion = document.createElement('option');
    opcion.value = optionCamper.nombre;
    opcion.textContent = optionCamper.nombre;
    document.querySelector('#nombre').appendChild(opcion);
})

/* 2. Llenar el select con edades dentro del rango permitido por campus */

for (let n = 15 ; n < 45 ; n++){
    const opcion = document.createElement('option');
    opcion.value = n;
    opcion.textContent = n;
    document.querySelector('#edad').appendChild(opcion);
}

/* 7. Event Listeners Filtros */

search.addEventListener('input' , (e) =>{
    parametros.search = e.target.value;
    filtrarCamper(); 
})

/* getatribute */


nombreCamper.addEventListener('input', (e)=>{
    parametros.nombre = e.target.value;

    //8. Llamado de funcion de alto nivel
    filtrarCamper()
})

edadCamper.addEventListener('input', (e)=>{
    parametros.edad = Number(e.target.value);
    filtrarCamper();
})

minPromedio.addEventListener('input', (e)=>{
    parametros.minPromedio = parseFloat(e.target.value);
    filtrarCamper();
})

maxPromedio.addEventListener('input', (e)=>{
    parametros.maxPromedio = parseFloat(e.target.value);
    filtrarCamper();
    
})

nivelCamper.addEventListener('input', (e)=>{
    parametros.nivelCampus = e.target.value;
    filtrarCamper();
})

nivelIngles.addEventListener('input', (e)=>{
    parametros.nivelIngles = e.target.value;
    filtrarCamper();
})

especialidad.addEventListener('input', (e)=>{
    parametros.especialidad = e.target.value;
    filtrarCamper();
})

expertoTecnologia.addEventListener('input', (e)=>{
    parametros.expertoTecnologia = e.target.value;
    filtrarCamper();
})

/* 3. Event Listeners */

document.addEventListener('DOMContentLoaded', ()=>{
    showCampers(campers);
    selectCamper();
})

/* 4. Funcion para inyectar dinamicamente html */

function showCampers(campers){
    //Selecciono el elemento html parent que contendra mis cards
    const contenedorTarjetas = document.querySelector('#tarjetas');

    //Limpiar
    limpiar()

    //html para cada camper
    campers.forEach((camper)=>{
        const camperHTML = document.createElement('p');

        //Destructuring
        const {imagen, nombre, detalle, promedio, especialidad , expertoTecnologia , celular , direccion , id} = camper;

        camperHTML.innerHTML = `
        <div class="card" style="width: 20rem">
            <img src="img/${imagen}" class="card-img-top" alt="..." id="imgCard">
        <div class="card-body">
          <h5 class="card-title ">${nombre}</h5>
          <p class="card-text">${detalle}</p>
        </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${especialidad}</li>
                <a class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" imagen="${imagen}" promedio="${promedio}" nombre ="${nombre}" especialidad = "${especialidad}" expertoTecnologia = "${expertoTecnologia}" celular = "${celular}" direccion = "${direccion} ">Details</a>
                <a href="#" class="btn btn-primary boton" id = "${id}" >Job Cart- Hire</a>
            </ul>
        </div>
        
        `
        contenedorTarjetas.appendChild(camperHTML)
    })
    
}
{/* <button onclick="window.modal.close();">Cerrar</button> "Agregar modal" */}
/* 5. Objeto con parametros para la busqueda */
const parametros = {
    buscar : "",
    nombre : "",
    edad : "",
    minPromedio : "",
    maxPromedio : "",
    nivelCampus : "",
    nivelIngles : "",
    especialidad : "",
    expertoTecnologia : "",
    search: "",
}

/* 8.1 Declaracion funcion de alto nivel */

function filtrarCamper(){
    const resultado = campers
    .filter(filtrarNombre)
    .filter(filtrarEdad)
    .filter(filtrarPromedioMin)
    .filter(filtrarPromedioMax)
    .filter(filtrarNivelCampus)
    .filter(filtrarNivelIngles)
    .filter(filtrarEspecialidad)
    .filter(filtrarExpertoTecnologia)
    .filter(filtrarSearch)

    showCampers(resultado);
    if (resultado.length == 0){
        notResult();
    }
    console.log(resultado);
}

function filtrarNombre(camper){
    if(parametros.nombre){
        return camper.nombre === parametros.nombre;
    }
    return camper;
}

function filtrarEdad(camper){
    if (parametros.edad){
        return camper.edad === parametros.edad;
    }
    return camper;
}

function filtrarPromedioMin(camper){
    if (parametros.minPromedio){
        return camper.promedio >= parametros.minPromedio;
    }
    return camper;
}

function filtrarPromedioMax(camper){
    if (parametros.maxPromedio){
        return camper.promedio <= parametros.maxPromedio;
    }
    return camper;
}

function filtrarNivelCampus(camper){
    if (parametros.nivelCampus){
        return camper.nivelCampus === parametros.nivelCampus;
    }
    return camper;
}

function filtrarNivelIngles(camper){
    if (parametros.nivelIngles){
        return camper.nivelIngles === parametros.nivelIngles;
    }
    return camper;
}

function filtrarEspecialidad(camper){
    if (parametros.especialidad){
        return camper.especialidad === parametros.especialidad;
    }
    return camper;
}

function filtrarExpertoTecnologia(camper){
    if (parametros.expertoTecnologia){
        return camper.expertoTecnologia === parametros.expertoTecnologia;
    }
    return camper;
}

function filtrarSearch (camper) {
    if(parametros.search){
        return camper.nombre.includes(parametros.search)
    }else{
        return camper
    }
}

function limpiar(){
    let m = document.querySelectorAll('p');
    for (let n = 0 ; n < m.length ; n++){
        m[n].remove();
    }
}

function notResult() {
    const notResult = document.createElement ('p');
    notResult.classList.add("alert");
    notResult.appendChild(document.createTextNode("Results Not Found"))
    document.querySelector("#tarjetas").appendChild(notResult)
}

const tbody = document.querySelector('tbody')
const rowModal = document.createElement ('tr')
function selectCamper() {
    const camperDetails = document.querySelector('#tarjetas');
    camperDetails.addEventListener ('click' , (loadDetail))
}
let reporte;
let color;
function loadDetail(e) {
    const celular = e.target.getAttribute ('celular')
    const direccion = e.target.getAttribute ('direccion')
    const expertoTecnologia = e.target.getAttribute ('expertoTecnologia')
    const title = e.target.getAttribute ('nombre')
    const especialidad = e.target.getAttribute ('especialidad')
    const promedio = e.target.getAttribute ('promedio')
    const titulo = document.querySelector('#exampleModalLabel')
    titulo.textContent = `${title}`
    if (promedio >= 4.5){
        color = "green"
        reporte = "Apto/a para trabajo remoto"
    }else{
        color = "red"
        reporte = "No esta apto/a, debe estudiar mas"
    }
    const imagen = e.target.getAttribute('imagen') 
    rowModal.innerHTML = 
    
    `
    <td>
        <img src = "img/${imagen}" width = "220px" height = "260px">
        
    </td>
    <td class = "promedio">
        <p>${promedio}</p> 
        <p style = "color: ${color}">${reporte} </p>  
    </td>
    <td class = "especialidad">
        <p>${especialidad} </p>
    </td>
    <td class = "especialidad">
        <p>${expertoTecnologia} </p>
    </td>
    <td>
        <p>${celular} </p>
    </td>
    <td>
        <p>${direccion} </p>
    </td>
    `;
    tbody.appendChild(rowModal)
}


/*  -------------------Job Cart - Hiring Campers---------------------*/

const cards = document.querySelector('#tarjetas')
let arrayCards = []
const tbodie = document.querySelector("#tbodie")
const deleteListCards = document.querySelector("#deleteListCards")
const cleanCart = document.querySelector("#cleanCart")
/* listeners */

cards.addEventListener ('click' , selectCards);
deleteListCards.addEventListener ('click' , deleteCards);
cleanCart.addEventListener ('click' , trashCart);

function selectCards(e) {
    e.preventDefault();
    if(e.target.classList.contains("boton")){
        const selectedCamper = e.target.parentElement.parentElement;
        console.log(selectedCamper);
        detail(selectedCamper)
    }
}

function detail(selectedCamper) {
    const camperDetail = {
        imagen: selectedCamper.querySelector("img").src,
        nombre: selectedCamper.querySelector("h5").textContent,
        detalles: selectedCamper.querySelector("p").textContent,
        id: selectedCamper.querySelector(".boton").getAttribute("id"),
    }
    arrayCards =[...arrayCards,camperDetail]
    console.log(arrayCards);
    inyectingCampersHtml()
}

function deleteCards(e) {
    if (e.target.classList.contains("deleteCard")){
        const cardToDelete = e.target.getAttribute("id");
        console.log(cardToDelete)
        arrayCards = arrayCards.filter((cd) => cd.id !== cardToDelete)
        inyectingCampersHtml();
    }
}

function inyectingCampersHtml() {
    cleanHTML()
    arrayCards.forEach ((arrayCard)=>{
        const{imagen, nombre , detalle , id} = arrayCard
        const row = document.createElement("tr")
        row.innerHTML=`
        <td>
            <img src ="${imagen}" width = "160px" height = "200px">
        </td>
        <td>
            ${nombre}
        </td>
        <td>
            ${detalle}
        </td>
        <td>
            <a href= "#" class = "equis deleteCard btn btn-danger" id="${id}" > X </a>
        </td>

        `;
        tbodie.appendChild(row)
    })

}
  function trashCart() {
        arrayCards = []
        cleanHTML();
    }

 function cleanHTML() {
    tbodie.innerHTML = ""
    }

/*--------------------- LOCAL STORAGE-------------------- */
