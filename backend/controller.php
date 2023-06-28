<?php

header('Content-Type: application/json');

require_once('conectar.php');
require_once('models.php');

$campus = new Campus();
$body = json_decode(file_get_contents("php://input"),true);

switch($_GET['op']){
    case "GetAll":
        $datos = $campus->get_campers();
        echo json_encode($datos);
        break;
    case "GetAllRegion":
            $datos= $campus->get_region();
            echo json_encode($datos);
    break;
    case "GetAllPais":
        $datos= $campus->get_pais();
        echo json_encode($datos);
    break;
    case "GetAllDepartamento":
        $datos= $campus->get_departamento();
        echo json_encode($datos);
    break;
    case "GetAllRegion":
        $datos= $campus->get_region(); 
        echo json_encode($datos);
    break;

    case "insert":
        $datos = $campus->insertar_campers($body['nombreCamper'], $body['apellidoCamper'], $body['fechaNac'], $body['idReg']);
        echo json_encode($datos);
        break;

    case "delete":
        $datos=$campus->delete_campers($_GET["id"]);
        echo json_encode("Camper eliminado");  
        break;

        


    
}



?>