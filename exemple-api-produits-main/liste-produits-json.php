<?php
    header('Content-Type: application/json');
    
    include_once 'include/config.php'; 
    
    $mysqli = new mysqli($host, $username, $password, $database); 
    if ($mysqli -> connect_errno) { 
      echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
      exit();
    } 

  $requete = $mysqli->query("SELECT * FROM produits");
	$donnees_tableau = $requete->fetch_all(MYSQLI_ASSOC);
	echo json_encode($donnees_tableau, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

  $requete->close();
  $mysqli->close(); 
?>