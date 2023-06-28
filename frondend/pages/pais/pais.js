import {getPais} from "./API.js";

addEventListener('DOMContentLoaded',()=>{
    cargarPais()
})



async function cargarPais() {
    const pais = await getPais()
    const tablaPais = document.querySelector("#datosClientes")
    pais.forEach(element => {
        const {idPais,nombrePais,} = element
        tablaPais.innerHTML += `
        <tr>
          <th scope="row">${idPais}</th>
          <td>${nombrePais}</td>

          <td><button class="btn btn-danger delete" id="${idPais}">eliminar</button></td>
        </tr>
        `
    });
    console.log(campers);
}

