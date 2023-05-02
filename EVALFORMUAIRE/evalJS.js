// On créer une constante qui va récupèrer la valeur de l'élément "CodePP"
const Code = document.querySelector("#CodePP");

// On ajoute des écouteurs d'évenements qui déclanchent les 2 fonctions 'Recherche...'lorsque ces événements se produisent
Code.addEventListener("input", RechercheCodePos);
document.addEventListener("submit", RechercheVille);

// CodePostal
//Cette fonction est appelée lorsqu'un événement "input" se produit sur l'élément HTML ayant l'ID "CodePP"
function RechercheCodePos(event) {
  //Lorsqu'elle est appelée, elle empêche le comportement par défaut de l'événement (rechargement de la page)
  event.preventDefault();

  const codeValue = Code.value;

  if (codeValue.length === 5) {
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
  if (data.length === 0) {
    const select = document.querySelector("#Ville");

    select.innerHTML = "";

    const option = document.createElement("option");
    option.value = "";
    option.textContent = "Code Postal Incorrect";

    select.appendChild(option);

    return;
  }

  // La fonction utilise la méthode map pour extraire le nom de chaque commune de l'objet data et stocker ces noms dans un tableau communes
  const communes = data.map((d) => d.nom);
  const select = document.querySelector("#Ville");

  select.innerHTML = "";

  communes.forEach((commune, index) => {
    const option = document.createElement("option");
    option.value = commune;
    option.textContent = commune;

    if (index == 0) {
      option.setAttribute("selected", "");
    }

    select.appendChild(option);
  });
}
