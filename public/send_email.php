<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = 'bll.taoufik@gmail.com';
    $subject = 'Message de ' . $name;
    $body = "Nom: $name\nE-mail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo 'Message envoyé avec succès.';
    } else {
        echo 'Échec de l\'envoi du message.';
    }
}
?>
