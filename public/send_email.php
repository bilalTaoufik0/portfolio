<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération des données du formulaire
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Nettoyage des données
    $name = htmlspecialchars($name);
    $email = htmlspecialchars($email);
    $message = htmlspecialchars($message);

    // Configuration de l'email
    $to = "bll.taoufik@gmail.com"; // Remplacez par votre adresse email
    $subject = "Nouveau message de contact de " . $name;
    $body = "Nom: " . $name . "\n";
    $body .= "Email: " . $email . "\n";
    $body .= "Message: \n" . $message;
    $headers = "From: " . $email;

    // Envoi de l'email
    if (mail($to, $subject, $body, $headers)) {
        echo "Votre message a été envoyé avec succès.";
    } else {
        echo "Une erreur est survenue. Veuillez réessayer plus tard.";
    }
} else {
    echo "Méthode de requête invalide.";
}
?>
