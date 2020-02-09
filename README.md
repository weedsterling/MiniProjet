# MiniProjet
 Il s'agit du mini Projet de gestion d'un restaurant  réalisée avec VueJs

# Mini Projet avec Le framework Vue.js

 Voici les differentes Fonctionnalités qui seront présentes dans notre projet
    
   - Permettre d’afficher les restaurants les plus proches de la position de l’utilisateur
   - La page d’accueil de votre site doit afficher une liste de restaurant à la une en fonction de la position courante de l’utilisateur         ainsi que la liste des cuisines disponibles (Chinoise, Thai, …). Sentez-vous libres de choisir les critères permettant d’afficher les       écrans à la une (nombre d’étoiles, commentaires, etc…)
   - En cliquant sur un restaurant, afficher une liste d’images sous forme de slider (qui se défilent automatiquement) ; les images peuvent      être gérées de manière statique  (côté client) ou dynamiquement (côté serveur)
   - Dans l’écran de détail d’un restaurant, permettre à un utilisateur d’y affecter un nombre d’étoiles (allant de 1 à 5) ; ces notations      doivent être affichés sous forme de vignettes quand un restaurant est affiché dans la liste des résultats de recherche.
   - Gérer des commentaires pour un restaurant
   - Afficher les écrans sur une Map (Google Maps) et utiliser les fonctions cluster
     pour regrouper les restaurants les plus proches.


Notre Approche sera la suivante :

Au lieu d'utiliser ce que l'on a réalisée précédemment en cours, nous avons décidé de refaire le CRUD et donc faire une partie BackEnd d'une part 
et une partie FrontEnd d'autre part pour que cela soit plus claire.

# Partie BackEnd

   - Dabord, Récupérez cette base de données de restaurants : le fichier primer-dataset.json (qui se trouve dans le repertoire "restaurant-backend") et exécuter la commande suivante, qui va créer 
une bd "test" et ajouter dedans la collection "restaurants" :

    mongoimport --db test --collection restaurants --drop --file primer-dataset.json

   - Vous devez lancer VScode ou tout autre IDE afin d'ouvrir le repertoire "restaurant-backend" 
   - Exécutez node myserver.js (ou nodemon) afin de demarrer le serveur
   - Pour afficher la liste des restaurants vous n'avez qu'a aller sur cette URL http://localhost:3333/restaurants/
   
# Partie FrontEnd

  - En plus d'avoir demarrer le serveur, lancer VScode ou tout autre IDE afin d'ouvrir le repertoire "restaurant-frontend"
  - Au sein de ce repertoire, se trouve egalement un fichier Readme.md qui vous donnera des indiquations quant-au démarrage du front end
  - Une fois le frontend démaré, vous aurez acces à la page d'accueil avec un Menu Hamburger. Lorsque vous cliquerez la dessus vous verez un Menu contextuel; 
    Cliquez sur l'icone de Restaurant list et vous aurez acces à l'ensemble des restaurants
  - Si vous souhaitez affichez les details concernant un restaurant, cliquez juste sur le panier qui se trouve sur la photo .   
