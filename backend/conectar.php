<?php
class Conexion {

    protected $db;
    
    protected function conexion(){
        try {
            $conectar = $this->db= new PDO("mysql:local=localhost;dbname=campuslands","root","");
            return $conectar;

        } catch (\Exception $e){
            return $e->getMessage();
        }
    }

    public function set_name(){
        return $this->db->query("SET NAMES 'utf8'");
    }

}

?>