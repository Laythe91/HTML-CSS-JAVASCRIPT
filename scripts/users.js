function handleResponse(response) {
  return response.json();
}

const handleData = (data) => {
  console.log(data);
  let tableLines = "";
  let gridMode = '<div class="grid-container">';
  for (let index = 0; index < data.length; index++) {
    const user = data[index];
    const tableLine = `
        <tr>
            <td>${user.name}</td>
            <td>${user.phone}</td>
            <td>${user.email}</td>
        </tr>
    `;
    tableLines += tableLine;

    gridMode += `
        <div class="user-card">
            <div><strong>${user.name}</strong></div>
            <div>${user.phone}</div>
            <div>${user.email}</div>
        </div>
    `;
    console.log(tableLines);
  }
  gridMode += "</div>"; // Fermeture de .grid-container

  // Par défaut, on charge le mode tableau
  document.getElementById("users-body").innerHTML = tableLines;

  // On stocke aussi le mode tableau pour plus tard lorsqu'on voudra recharger la page
  document.getElementById("users-body").dataset.tableContent = tableLines;

  // On stocke aussi le mode grille pour plus tard
  document.getElementById("users-body").dataset.gridContent = gridMode;
};

function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => handleResponse(response))
    .then((data) => handleData(data));
}

function setTableView() {
  const usersBody = document.getElementById("users-body");
  const table = document.querySelector("table");

  usersBody.innerHTML = usersBody.dataset.tableContent; // Charge le mode tableau
  usersBody.classList.remove("grid-view"); // Supprime le mode grille
  table.classList.remove("grid-view-active"); // Réaffiche l'en-tête
}

function setGridView() {
  const usersBody = document.getElementById("users-body");
  const table = document.querySelector("table");

  usersBody.innerHTML = usersBody.dataset.gridContent; // Charge le mode grille
  usersBody.classList.add("grid-view"); // Active la grille
  table.classList.add("grid-view-active"); // Cache l'en-tête
}

// Ajouter les événements aux boutons une fois la page chargée
document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector(".boutton button:nth-child(1)")
    .addEventListener("click", setTableView);
  document
    .querySelector(".boutton button:nth-child(2)")
    .addEventListener("click", setGridView);
});
