import {deleteCamper, getCampers,getRegion,nuevoCamper} from "./API.js";

addEventListener('DOMContentLoaded',()=>{
    cargarCamper()
})



async function cargarCamper() {
    const campers = await getCampers()
    const tablaCampers = document.querySelector("#datosClientes")
    campers.forEach(element => {
        const {idCamper,nombreCamper,apellidoCamper,fechaNac,idReg} = element
        tablaCampers.innerHTML += `
        <tr>
          <th scope="row">${idCamper}</th>
          <td>${nombreCamper}</td>
          <td>${apellidoCamper}</td>
          <td>${fechaNac}</td>
          <td>${idReg}</td>
          <td><button class="btn btn-danger delete" id="${idCamper}">eliminar</button></td>
        </tr>
        `
    });
    console.log(campers);
}




// document.addEventListener('DOMContentLoaded',seleccionarID);

// // async function seleccionarID(){
// //     const selector = document.querySelector("#selector");
// //     const region = await getRegion();
// //     region.forEach(element => {
// //         const {idReg} = element
// //         const option = document.createElement('option')
// //         option.classList.add("idReg")
// //         option.value = element.idReg
// //         option.textContent = element.idReg
    
// //         document.querySelector('#selector').appendChild(option)
// //     })
// // }

const formulario = document.getElementById("registro")
formulario.addEventListener("submit",nuevoCampers)

function nuevoCampers(e){
    e.preventDefault();

    const nombreCamper = document.querySelector("#nombreCamper").value
    const apellidoCamper = document.querySelector("#apellidoCamper").value
    const fechaNac = document.querySelector("#fechaNac").value
    const idReg = document.querySelector("#idReg").value

    const registro={
        nombreCamper,
        apellidoCamper,
        fechaNac,
        idReg

    }

    console.log(registro);
    return nuevoCamper(registro);

    
}

const eliminar = document.querySelector('#datosClientes')
eliminar.addEventListener('click',borrar)


function borrar(e){
    if(e.target.classList.contains('delete')){
        console.log(e.target);
        const idCamper = e.target.getAttribute('id')
        console.log(idCamper);

        const confir = confirm("desea eliminarlo?")
            if (confir) {
                deleteCamper(idCamper)
                window.location = "cliente.html";
            }
        
    }
    
}
