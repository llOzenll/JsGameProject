<?php
session_start();

    $response = array('loggedIn' => false);

    if (isset($_SESSION['name'])) {
        $response['loggedIn'] = true;
        $response['name'] = $_SESSION['name'];
        // Puedes agregar más información si es necesario
    } else {
        $response['message'] = 'User not logged in';
    }

    header('Content-Type: application/json');
    echo json_encode($response);
?>
