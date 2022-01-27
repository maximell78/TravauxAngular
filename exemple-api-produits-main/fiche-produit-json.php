<?php
  header('Content-Type: application/json;');
    
  include_once 'include/config.php'; 
    
	// Vérification que la page reçoit un identifiant en paramètre
  if(!isset($_GET['id'])) { 
    echo 'Identifiant manquant';
    exit();
  }

	// Établissement de la connexion à la base de données
  $mysqli = new mysqli($host, $username, $password, $database); 
	
	// Affichage d'une erreur si la connexion échoue
  if ($mysqli -> connect_errno) { 
    echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
    exit();
  } 

	// Création d'une requête préparée 
  if ($requete = $mysqli->prepare("SELECT * FROM produits WHERE id=?")) {  

    $requete->bind_param("i", $_GET['id']); // Envoi des paramètres à la requête
    $requete->execute(); // Exécution de la requête

    $resultat_requete = $requete->get_result(); // Récupération de résultats de la requête
    $objet = $resultat_requete->fetch_assoc(); // Récupération de l'enregistrement

    echo json_encode($objet, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

  // Fermeture du traitement 
    $requete->close(); 
  }

	// Fermeture de la connexion
  $mysqli->close();  
?>