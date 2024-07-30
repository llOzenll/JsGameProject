<?php 
    include 'bd.php';

    session_start();

    // Verificar si el usuario está logueado
    if (!isset($_SESSION['name'])) {
        header("Location: /proyecto/index.php");
        exit;
    }


    $score =  $_POST['score'];
    $name = $_SESSION['name'];

    // Insertar los datos en la base de datos
    $sql = "UPDATE user SET score = ? WHERE name = ?";
    $stmt = $conn->prepare($sql);


    if ($stmt) {
        $stmt->bind_param('is', $score, $name);

        if ($stmt->execute()) {
            // Redirigir a la página home.html
            header("Location: /proyecto/MainPage+game/home.html");
        } else {
            // Mostrar error si falla la ejecución de la consulta
            echo "Error: " . $stmt->error;
        }
    
        $stmt->close();
    } else {
        // Mostrar error si falla la preparación de la consulta
        echo "Error: " . $conn->error;
    }
    
    $conn->close();

?>