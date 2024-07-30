<?php
    session_start();
    include 'bd.php';

    if($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = $_POST['nameLogin'];
        $password = $_POST['passwordLogin'];


        // Consulta para verificar si el usuario y la contraseña son correctos
        $sql = "SELECT score FROM user WHERE name = '$name' AND password = '$password'";
        $result = $conn->query($sql);
        $row = mysqli_fetch_assoc($result);
        echo "<script>localStorage.setItem('highscore', ". $row['score'].");</script>";

        // Verificar si se encontró una coincidencia
        if ($result->num_rows == 1) {
            $_SESSION['name'] = $name;
            //sleep(2);
            header("Location: /proyecto/MainPage+game/home.html");
        } else {
            // Usuario o contraseña incorrectos
            header("Location: /proyecto/index.php?message=loginError");
        }
    }

    // Cerrar la conexión
    $conn->close();
?>
