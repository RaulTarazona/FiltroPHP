const urlDepartamento="http://localhost/FiltroPHP/BackEnd/controller.php?op=GetAllDepartamento";


export const getDepartamento = async () => {
  try {
    const departamento = await fetch(urlDepartamento);
    const datosDepartamento = await departamento.json();
    return datosDepartamento;
  } catch (error) {
    console.log(error);
  }

};
