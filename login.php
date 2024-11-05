<?php
//ESTE ES EL ARCHIVO DEL INICIO DE SESION

// Incluir el archivo de conexión
include 'conexion.php';

session_start();

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    // Recoger los datos del formulario
    $email = $_GET['Email'];
    $password = $_GET['password'];

    if (empty($email) || empty($password)) {
        echo "Por favor, rellene todos los campos";
    }
    
    $stm = $conn->prepare("SELECT Email, password FROM trabajadores WHERE Email = ?");

    $stm->bind_param("ss",$emai,$password);
    $stm->execute();
    $result = $stm->get_result();
    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        $_SESSION['email'] = $user['Email'];
        $_SESSION['password'] = $user['password'];
        header('content-Type: text/html');
        header('Location: inicio.php');
        exit();
    } else {
        echo "Email o contraseña incorrectos";
    }

    $stm->close();
} else {
    header("location: index.html");
    exit();
}
$conn->close();
?>