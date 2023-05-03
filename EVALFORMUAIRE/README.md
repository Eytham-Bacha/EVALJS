# MON PROJET FORMULAIRE
# Consigne


 Créer un formulaire avec un fieldset contenant un champ permettant de saisir un
code postal et un champ permettant de saisir la ville. Le champ de la ville
s'auto-remplit avec la liste des villes ayant ce code postal dès qu'un code
postal complet est saisi. La première ville de la liste est auto-sélectionnée.

---

## Environnement technique

Le projet est enregistré sur Git et utilise Bootstrap si possible.

---

## Choix des éléments

Le champ de saisie du code postal est un champ texte avec une contrainte sur le
format (5 chiffres dont le premier peut être un 0). Le champ de saisie de la
ville est à déterminer.

---

## Choix de l'événement

La recherche des villes correspondant au code postal saisi doit se faire dès que
possible et sans action particulière autre que la saisie du cinquième chiffre.

---

## Recherche de l'API

Une API de l'INSEE permet de retrouver la ou les villes ayant un code postal
donné.

---

## Validation

Chaque étape du projet doit être validée après avoir été poussée sur Git :

- la maquette HTML ;
- le JS correspondant à l'événement choisi ;
- le choix de l'API, renseigné dans le README ;
- le JS de la recherche des villes.

---

# Exercice

## Fonctionnement

### Explication du JavaScript utilisé:

J'ai mis un input dédié au code postal.Ensuite j'ai créer une première fonction qui me servira pour la partie Code Postal. Dans cette fonction j'ai utilisé un if pour que l'input ce lance uniquement si la longueur du Code Postal est égal a 5 caractère. J'ai précisé que ces caractères pouvait être uniquement des nombres.
J'ai ensuite créer une constante pour faire fonctionné ce input qui va rechercher dans l'API de l'INSEE le code Postal que l'utilisateur a entré et j'y ai ajouté un élément qui filtre grâce a un fields pour récupéré uniquement le nom correspondant a ce Code Postal et pas les autres informations tel que le Code Département ou d'autres informations dont je ne souhaite pas récupérer.
Si la longueur du Code Postal entré par l'utilisateur n'est pas strictement égal a 5 alors l'élément Ville sera Vide.
Ensuite j'ai créer une fonction qui me servira pour la partie Ville.
Cette fonction englobe une seconde fonction qui sera exécuté si l'élément data est strictement égal a 0, ce qui signifie que l'élément data ne trouve aucune données dans l'API correspondant a ce que l'utilisateur a entré.
 Dans ce cas l'ID Ville utilisé dans le HTML sera vide et l'élément option aura une valeur vide et affichera un message "Code Postal Incorrect".
 Si cette fonction est utilisé alors le code s'arrete ici et il n'éxécute pas le reste du code.
 Pour finir j'ai créer une premiere constante qui utilise la méthode "map", celle-ci créer un tableau à partir des données "data". Ce tableau contiendra les noms de toutes les communes présentes dans les données.
 Ensuite on va parcourir ce tableau à l'aide d'une boucle "forEach".Pour chaque élément de ce tableau, on crée un nouvel élément "option" à l'aide de la méthode "createElement".
 Pour chaque élément "option" créé, on définit sa valeur et son texte à l'aide de la propriété "value" et de la méthode "textContent".
 Si "index" est égal à 0, alors on ajoute l'attribut "selected" à cet élément. Cela permettra de sélectionner automatiquement cette option lors de l'affichage initial de la liste déroulante.
 Enfin, on ajoute l'élément "option" à l'élément "select" à l'aide de la méthode "appendChild".

### Explication du HTML utilisé:

Pour commencer j'ai placé mon titre à l'aide d'une balise "legend".
En dessous du titre j'ai entré une phrase à l'aide d'une balise "p", utilisé pour créer un paragraphe et d'une balise "strong" qui mettra cette phrase en gras. Cette phrase sera "l'objet" de mon projet, elle définit l'utilité du projet.
J'ai ensuite utilisé les fonctionnalités de Bootstrap pour créer un tableau dans lequel je lui ai demandé de faire une colonne de 8/12 avec un offset de 2 pour que la colonne de 8 soit centré et qu'il laisse 2 colonnes vides de chaque côté de la page.
Pour la partie Code Postal j'ai mis un élément "input" qui sert à créer l'emplacement ou l'utilisateur peut rentrer son code postal.
Je lui ai mis un "maxlenght" pour limiter la taille des caractères a 5 ainsi qu'un élément "patern" qui sera utile pour préciser que les caractères attendus sont uniquement des nombres entre 0 et 9 pour éviter à l'utilisateur de rentrer des lettres qui ne seront alors pas compatible pour  le code postal.
J'ai effectué la meme opération pour la partie Ville sauf que je n'ai pas utilisé d'élément "input" mais un élément "select" qui sera utile pour créer une liste déroulante.

