const urlPais="http://localhost/FiltroPHP/BackEnd/controller.php?op=GetAllPais";

export const getPais = async () => {
  try {
    const pais = await fetch(urlPais);
    const datosPais = await pais.json();
    return datosPais;
  } catch (error) {
    console.log(error);
  }

};
