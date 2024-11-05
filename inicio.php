<?php
session_start();
if (!isset($_SESSION['email'])) {
    header('Location: login.php'); // Redirigir si no hay sesión iniciada
    exit();
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página de Inicio</title>
</head>
<body>
    <h1>Bienvenido, <?php echo $_SESSION['email']; ?>!</h1>
    <p>Has iniciado sesión correctamente.</p>
</body>
</html>