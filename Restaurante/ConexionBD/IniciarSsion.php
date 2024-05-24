<?php
include 'conexion.php';

// Obtener los datos del formulario
$nombre_usuario = $_POST['nombre_usuario'];
$correo = $_POST['correo'];
$contraseña = password_hash($_POST['contraseña'], PASSWORD_DEFAULT);

// Insertar los datos en la base de datos
$sql = "INSERT INTO usuarios (nombre_usuario, correo, contraseña) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->execute([$nombre_usuario, $correo, $contraseña]);

echo "Usuario registrado exitosamente";

$conn = null; // Cerrar la conexión
?>
