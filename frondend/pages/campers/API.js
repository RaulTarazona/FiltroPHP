const urlCamper ="http://localhost/FiltroPHP/BackEnd/controller.php?op=GetAll";
const urlRegion="http://localhost/FiltroPHP/BackEnd/controller.php?op=GetAllRegion";
const urlPais="http://localhost/FiltroPHP/BackEnd/controller.php?op=GetAllPais";
const urlNuevoCamper= "http://localhost/FiltroPHP/BackEnd/controller.php?op=insert";
const urlCamperDelete = "http://localhost/FiltroPHP/BackEnd/controller.php?op=delete"


export const getCampers = async () => {
  try {
    const campers = await fetch(urlCamper);
    const datosCampers = await campers.json();
    return datosCampers;
  } catch (error) {
    console.log(error);
  }

};

export const getRegion = async () => {
  try {
    const region = await fetch(urlRegion);
    const datosRegion = await region.json();
    return datosRegion;
  } catch (error) {
    console.log(error);
  }

};

export const getPais = async () => {
  try {
    const region = await fetch(urlRegion);
    const datosRegion = await region.json();
    return datosRegion;
  } catch (error) {
    console.log(error);
  }

};

export const nuevoCamper = async (register) => {
  try {
    await fetch(urlNuevoCamper, {
      method: "POST",
      body: JSON.stringify(register),
      headers: {
        "Content-Type":"application/json",
      },
    });
    window.location = "cliente.html";
  } catch (error) {
    console.log(error);
  }
};


export const deleteCamper = async id =>{
  try {
      await fetch(`${urlCamperDelete}&id=${id}`,{
          method:'DELETE'
      });
  } catch (error) {
      console.log(error);
  }
  }
