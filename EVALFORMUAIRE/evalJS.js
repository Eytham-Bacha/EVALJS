// On créer une constante qui va récupérer la valeur de l'élément "CodePP"
const Code = document.querySelector("#CodePP");

// On ajoute des écouteurs d'évenements qui déclanchent les 2 fonctions 'Recherche...'lorsque ces événements se produisent
Code.addEventListener("input", RechercheCodePos);
document.addEventListener("submit", RechercheVille);

// CodePostal
//Cette fonction est appelée lorsqu'un événement "input" se produit sur l'élément HTML ayant l'ID "CodePP"
function RechercheCodePos(event) {
  //Lorsqu'elle est appelée, elle empêche le comportement par défaut de l'événement (rechargement de la page)
  event.preventDefault();
// On créer une constante 'codeValue' qui est égal a la valeur de la constante 'Code'
  const codeValue = Code.value;
// On lance uniquement la fonction si la constante 'codeValue' a une longueur strictement égal a 5
  if (codeValue.length === 5) {
    // On sélectionne l'élément CodePP puis on vérifie si tous le champ du formulaire a été remplis correctement
    document.querySelector("#CodePP").reportValidity();
    // On créer une constante pour interroger une API  pour récupérer les communes correspondant à ce code postal
    const URLCodeP = `https://geo.api.gouv.fr/communes?codePostal=${codeValue}&fields=nom`;

    // ON utilise la méthode fetch pour récupérer les données JSON de cette URL
    fetch(URLCodeP)
      .then((response) => response.json())
      //  Si les données sont récupérées avec succès, on appelle la fonction "showData" pour afficher les communes correspondantes dans une liste déroulante
      .then((data) => {
        showData(data);
      })
      // Si une erreur se produit, la fonction affiche un message d'erreur dans les éléments HTML ayant les ID "Ville" et "CodePP"
      .catch((error) => {
        console.error(error);
        document.querySelector("#Ville").textContent = "Non";
        document.querySelector("#CodePP").textContent = "Valide!";
      });
      // Si la longueur de codeValue n'est strictement pas égal a 5 alors l'élément 'Ville' sélectionné sera vide
  } else {
    document.querySelector("#Ville").innerHTML = "";
  }
}

// Ville
// Cette fonction est appelée lorsque l'événement "submit" est déclenché sur l'élément HTML ayant l'ID "Ville"
function RechercheVille(event) {
  //Lorsqu'elle est appelée, elle empêche le comportement par défaut de l'événement (rechargement de la page)
  event.preventDefault();
}

// La fonction 'showData' est définie, prenant un argument 'data'
function showData(data) {
  // Cette condition vérifie si la longueur de 'data' est strictement égal à 0. Si c'est le cas alors cela signifie qu'aucune donnée n'a été retournée pour la recherche effectuée par l'utilisateur
  if (data.length === 0) {
    // Dans ce cas on créé une constante 'select' qui la sélectionne l'élément 'Ville'
    const select = document.querySelector("#Ville");
// Ensuite elle efface tout le contenu de l'élément en affectant une chaîne vide
    select.innerHTML = "";
// On crée une constante 'option' qui sélectionne l'élément HTML 'option'
    const option = document.createElement("option");
    // La propriété 'value' de la constante 'option' est initialisé à une chaîne vide
    option.value = "";
// Le texte de la constante 'option' sera initialisé à 'Code Postal Incorrect'
    option.textContent = "Code Postal Incorrect";
// On ajoute l'élément 'option' a l'élément 'select' qui indique à l'utilisateur que la recherche n'a retourné aucun résultat correspondant a l'entrée saisie
    select.appendChild(option);
// Si cette condition est utilisé alors on exécute pas le reste du code de la fonction
    return;
  }

  // La fonction utilise la méthode map pour extraire le nom de chaque commune de l'objet data et stocker ces noms dans un tableau communes
  const communes = data.map((d) => d.nom);
  const select = document.querySelector("#Ville");

  select.innerHTML = "";
// On utilise une boucle 'forEach' pour parcourir le tableau 'communes'.
  communes.forEach((commune, index) => {
    const option = document.createElement("option");
// On définit la propriété 'value' de l'élément 'option' a la valeur de la variable 'communes' et a son texte correspondant
    option.value = commune;
    option.textContent = commune;
// Si l'index est égal à 0, la fonction définit l'attribut 'selected' de l'élément 'option'à une chaîne vide
// Cela permet de définir la première option du menu déroulant comme étant sélectionner par défaut
    if (index == 0) {
      option.setAttribute("selected", "");
    }
// La fonction ajoute l'élément 'option' à l'élément 'select'
// Cela permet d'ajouter chaque 'option' créée à l'élément 'select' correspondant
    select.appendChild(option);
  });
}

