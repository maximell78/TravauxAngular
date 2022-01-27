<?php
	include_once 'include/config.php'; 
		
	$mysqli = new mysqli($host, $username, $password, $database); // Établissement de la connexion à la base de données
	if ($mysqli -> connect_errno) { // Affichage d'une erreur si la connexion échoue
		echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
		exit();
	} 

	$res = $mysqli->query("SELECT * FROM produits");
?>

<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Liste produits HTML</title>
  </head>
  <body>
	<table border="1px" cellspacing="0" cellpadding="3">
		<tr>
			<th>Nom</th>
			<th>Description</th>
			<th>Prix</th>
		</tr>
		<?php 
			while ($row = $res->fetch_assoc()) { 		
		?>
			<tr>
				<td><a href="fiche-produit-html.php?id=<?= $row["id"]?>"><?= $row["nom"] ?></td>
				<td><?= $row["description"] ?></td>
				<td><?= $row["prix"] ?></td>
			</tr>
		<?php 
			}
		?>
	</table>
  </body>
</html>

<?php
	$res->close();
	$mysqli->close();
?>