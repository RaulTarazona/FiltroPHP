import {getRegion} from "./API.js";

addEventListener('DOMContentLoaded',()=>{
    cargarRegion()
})



async function cargarRegion() {
    const pais = await getRegion()
    const tablaRegion = document.querySelector("#datosClientes")
    pais.forEach(element => {
        const {idReg,nombreReg,idDep} = element
        tablaRegion.innerHTML += `
        <tr>
          <th scope="row">${idDep}</th>
          <td>${idReg}</td>
          <td>${nombreReg}</td>
          <td>${idDep}</td>

          <td><button class="btn btn-danger delete" id="${idReg}">eliminar</button></td>
        </tr>
        `
    });
    console.log(campers);
}

