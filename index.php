<!DOCTYPE html>
<html>

    <head>
        <title>JumpBall</title>
        <meta charset="UTF-8">
        
        <link rel="stylesheet" href="/proyecto/style/style-index.css">

    </head>

    <body>

        <img id="img" src="/proyecto/images/videoTuto2.gif">


        <?php
            if (isset($_GET['message'])) {

                switch($_GET['message']){
                    case 'Ok' :
                        echo '<h2 class= "e"> Por favor revisa tu correo</h2>';
                    break;

                    case 'error':
                        echo '<h2 class= "e"> Algo salio mal, intentalo de nuevo </h2>';
                    break;

                    case 'usuario_no_encontrado' :
                        echo '<h2 class= "e"> Usuario no encontrado</h2>';
                    break;


                    case 'success_register' :
                        echo '<h2 class= "e"> Registrado correctamente</h2>';
                    break;
                                 
                    case 'registerFailed':
                        echo '<h2 class= "e"> Error al registrarse </h2>';
                    break;
                    case 'e':
                        echo '<h2 class= "e"> Usuario ya existe </h2>';
                    break;


                    case 'loginError':
                        echo '<h2 class= "e"> Usuario o contraseña incorrecto </h2>';
                    break;

                    case 'success_password':
                        echo '<h2 class= "e"> Inicie sesion con su nueva contraseña </h2>';
                    break;
                }
                
            }
        ?>

        <form id="formLogin" action="/proyecto/backend/login.php" method="POST"  style="display: block;">
            <h2>Iniciar sesion</h2>

            <label for="nameLogin">Nombre</label><br>
            <input  name="nameLogin" type="text" id="nameLogin" ><br><br>


            <label for="passwordLogin">contraseña</label><br>
            <input name="passwordLogin" type="password"  id="passwordLogin"  ><br><br>


            <button form="formLogin" class="button" type="submit" onclick="goHome()">Login</button>
            <br><br>
            <button  type="button" class="button" onclick="showRegister()">¿no estas registrado?</button>
            <br><br>
            <button  type="button" class="button" onclick="showPassword()">¿olvidaste contraseña?</button>
            <br><br>
            
        </form>





        <form id="formRegister" action="/proyecto/backend/register.php" method="POST" style="display: none;">
            <h2>Registro</h2>

            <label for="nameRegister">Nombre</label><br>
            <input name="nameRegister" type="text" id="nameRegister" required ><br><br>


            <label for="emailR">email</label><br>
            <input name="email" type="email" id="emailR" placeholder="email@email.com" required><br><br>


            <label for="passwordRegister">contraseña</label><br>
            <input name="passwordRegister" type="password" id="passwordRegister" required><br><br>
            

            <button form="formRegister" type="submit" class="button">Registrarse</button><br><br>

            <button type="button" class="button" onclick="goBack()">volver</button>
            <br>
        </form>




        <form id='formEmail' action="/proyecto/backend/sendEmail.php" method="POST" style="display: none;">

            <h2>Escribe tu Email para cambiar tu contraseña</h2>
            
            <label for="emailC">Email:</label><br>
            <input name="email" type="email" id="emailC" ><br><br><br>

            <button form="formEmail" type="submit" class="button">Enviar</button><br><br>
            <button type="button" class="button" onclick="goBack()">volver</button>

        </form>

        <script src="/proyecto/scripts/script-index.js"></script>
        
    </body>

</html>