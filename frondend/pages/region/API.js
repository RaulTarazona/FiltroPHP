const urlRegion="http://localhost/FiltroPHP/BackEnd/controller.php?op=GetAllRegion";

export const getRegion = async () => {
  try {
    const region = await fetch(urlRegion);
    const datosRegion = await region.json();
    return datosRegion;
  } catch (error) {
    console.log(error);
  }

};
