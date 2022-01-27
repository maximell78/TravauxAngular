<?php
  include_once 'include/config.php';
  
  // Vérification que la page reçoit un identifiant en paramètre
  if(!isset($_GET['id'])) { 
    echo 'Identifiant manquant';
    exit();
  }
      
  $mysqli = new mysqli($host, $username, $password, $database); 
  if ($mysqli -> connect_errno) { 
    echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
    exit();
  } 

  if ($requete = $mysqli->prepare("SELECT * FROM produits WHERE id=?")) {  

    $requete->bind_param("i", $_GET['id']); 
    $requete->execute();

    $result = $requete->get_result(); 
    $produit = $result->fetch_assoc(); 

    $requete->close(); 
  }

  $mysqli->close(); 

?>
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Liste produits HTML</title>
  </head>
  <body>
    <h1><?= $produit["nom"] ?></h1>
    <p><?= $produit["description"] ?></p>
    Prix: <b><?= $produit["prix"] ?></b>
  </body>
</html>



