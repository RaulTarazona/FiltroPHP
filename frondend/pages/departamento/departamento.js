import {getDepartamento} from "./API.js";

addEventListener('DOMContentLoaded',()=>{
    cargarDepartamento()
})



async function cargarDepartamento() {
    const pais = await getDepartamento()
    const tablaDepartamento = document.querySelector("#datosClientes")
    pais.forEach(element => {
        const {idDep,nombreDep,idPais} = element
        tablaDepartamento.innerHTML += `
        <tr>
          <th scope="row">${idDep}</th>
          <td>${nombreDep}</td>
          <td>${idPais}</td>

          <td><button class="btn btn-danger delete" id="${idDep}">eliminar</button></td>
        </tr>
        `
    });
    console.log(campers);
}


