<?php 

    session_start();

    include 'bd.php';

    if($_SERVER["REQUEST_METHOD"] == "POST") {

        $name = $_POST['nameRegister'];
        $email = $_POST['email'];
        $password = $_POST['passwordRegister'];


        // Verificar si el usuario ya existe
        $sql = "SELECT * FROM user WHERE name = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $name);
        $stmt->execute();
        $result = $stmt->get_result();


        if ($result->num_rows > 0) {
            header("Location: /proyecto/index.php?message=e");
        } else {
            //  registrar al usuario si no existe
            $sql_insert = "INSERT INTO user (name, email, password) VALUES ('$name', '$email', '$password')";
            
            if ($conn->query($sql_insert) === TRUE) {
                header("Location: /proyecto/index.php?message=success_register"); 
            } else {
                header("Location: /proyecto/index.php?message=registerFailed");
                $conn->error;
            }
        }
    }
    $stmt->close();
    $conn->close();
?>