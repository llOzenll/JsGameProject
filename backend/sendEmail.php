<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    use PHPMailer\PHPMailer\SMTP;
    require 'PHPMailer/Exception.php';
    require 'PHPMailer/PHPMailer.php';
    require 'PHPMailer/SMTP.php';


    include 'bd.php';

    
    // Obtener el nombre de usuario del formulario
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Recuperar datos del formulario

        $email = $_POST['email'];
        

        // Verificar si el usuario ya existe
        $sql = "SELECT * FROM user WHERE email = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();
        $row = $result->fetch_assoc();

        if ($result->num_rows > 0){
            // enviar correo
            $mail = new PHPMailer(true);

            try {
                $mail->isSMTP();                                                 //Send using SMTP
                $mail->Host       = 'smtp-mail.outlook.com';                    //Set the SMTP server to send through
                $mail->SMTPAuth   = true;                                      //Enable SMTP authentication
                $mail->Username   = 'llljooglelll2@outlook.com';               //SMTP username
                $mail->Password   = 'google.com2';                           //SMTP password
                $mail->Port       =  587;                                 
            
                //Recipients
                $mail->setFrom('llljooglelll2@outlook.com', 'JumpBall');
                $mail->addAddress($email, 'JumpBall');                         //Add a recipient
                
            
            
                //Content
                $mail->isHTML(true);                                  //Set email format to HTML
                $mail->Subject = 'recuperacion de password';
                $mail->Body    = 'Hola este es un correo para la recuperacion de tu contraseña, por favor ingresa 
                a este enlace: <a href="localhost/proyecto/newPassword.php?id='.$row['ID'].'">Recuperar contraseña</a>';
                $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
                
                $mail->send();
                header("Location: /proyecto/index.php?message=Ok");
            }
            catch (Exception $e) {
                header("Location: /proyecto/index.php?message=error");
            }
            
        }else {
            header("Location: /proyecto/index.php?message=usuario_no_encontrado");
        }
    }
    $stmt->close();
    $conection->close();
?>
