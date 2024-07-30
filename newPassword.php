<!DOCTYPE html>
<html>

    <head>
        <title>JumpBall</title>
        <meta charset="UTF-8">
        
        <link rel="stylesheet" href="/proyecto/style/style-index.css">

    </head>

    <body>

        <img id="img" src="/proyecto/images/videoTuto2.gif">


        <form id='formNewpassword' action="/proyecto/backend/newPassword1.php" method="POST">

            <h2>Escribe tu nueva contraseña</h2>
            <input type="hidden" id="id" name="id" value="<?php echo $_GET['id'];?>"><br><br>
        
            <label for="newPassword">Nueva contraseña:</label><br>
            <input type="password" id="newPassword" name="newPassword" ><br><br>

            <button form="formNewpassword" type="submit" class="button">Confirmar</button>
            </form>
        </form>

        <script src="/proyecto/scripts/script-index.js"></script>
        
    </body>

</html>