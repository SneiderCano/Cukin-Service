<?php
//Datos para la conexion con la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cukinService";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

//Verificar si hay errores
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error); //Mostrar error si la conexion falla
} else {
    echo "Conexión exitosa a la base de datos";
}
?>
