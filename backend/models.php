<?php 

class Campus extends Conexion{


    public function get_campers(){
        try {
            $conectar = parent::conexion();
            parent::set_name();
            $stm = $conectar->prepare("SELECT * FROM campers");
            $stm->execute();
            return $stm->fetchAll(PDO::FETCH_ASSOC);
        } catch (\Exception $e){
            return $e->getMessage();
        }
    }
    
    public function get_region(){
        try {
            $conectar = parent::conexion();
            parent::set_name();
            $stm = $conectar->prepare("SELECT * FROM region");
            $stm->execute();
            return $stm->fetchAll(PDO::FETCH_ASSOC);
        } catch (\Exception $e){
            return $e->getMessage();
        }
    }

    public function get_pais(){
        try {
            $conectar = parent::conexion();
            parent::set_name();
            $stm = $conectar->prepare("SELECT * FROM pais");
            $stm->execute();
            return $stm->fetchAll(PDO::FETCH_ASSOC);
        } catch (\Exception $e){
            return $e->getMessage();
        }
    }

    public function get_departamento(){
        try {
            $conectar = parent::conexion();
            parent::set_name();
            $stm = $conectar->prepare("SELECT * FROM departamento");
            $stm->execute();
            return $stm->fetchAll(PDO::FETCH_ASSOC);
        } catch (\Exception $e){
            return $e->getMessage();
        }
    }



    public function insertar_campers($nombreCamper,$apellidoCamper,$fechaNac,$idReg){
        try {
            $conectar = parent::conexion();
            parent::set_name();
            $stm = "INSERT INTO campers(nombreCamper,apellidoCamper,fechaNac,idReg) VALUES (?,?,?,?)";
            $stm = $conectar->prepare($stm);
            $stm-> bindValue(1,$nombreCamper);
            $stm-> bindValue(2,$apellidoCamper);
            $stm-> bindValue(3,$fechaNac);
            $stm-> bindValue(4,$idReg);

            $stm -> execute();
            return $stm->fetchAll(PDO::FETCH_ASSOC);
        } catch (\Exception $e){
            return $e->getMessage();
        }
    } 


    public function delete_campers($id){
        $conectar=parent::conexion();
        parent::set_name();
        $sql= "DELETE FROM campers WHERE idCamper=?";
        $sql = $conectar->prepare($sql);
        $sql->bindValue(1,$id);
        $sql->execute();
        return $resultado=$sql->fetchAll(PDO::FETCH_ASSOC);

    }

    


}


?>