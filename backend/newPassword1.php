<?php
    include 'bd.php';

    // Verificar si se ha enviado el formulario de inicio de sesión
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        // Obtener los datos del formulario
        $id = $_POST['id'];
        $password = $_POST['newPassword'];

        // Consulta para verificar si el usuario y la contraseña son correctos
        $sql = "UPDATE user set password ='$password' WHERE id = '$id'";
        $conn->query($sql);

        header("Location: /proyecto/index.php?message=success_password"); 
    }
    // Cerrar la conexión
    $conn->close();
?>
 