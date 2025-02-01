let users = [];
function handleResponse(response) {
  return response.json();
}

const handleData = (data) => {
  users = data;
  displayTable(data);
};

const displayTable = () => {
  let tableLines = "";
  // DEPRECATED
  for (let index = 0; index < users.length; index++) {
    const user = users[index];
    const tableLine = `
          <tr>
              <td>${user.name}</td>
              <td>${user.phone}</td>
              <td>${user.email}</td>
          </tr>
      `;
    tableLines = tableLines + tableLine;
  }
  console.log("====================================");
  console.log(users);
  console.log("====================================");
  const usersAsTable = users.map(
    ({ name, phone, email, address: { street } }) =>
      `
          <tr>
              <td>${name}</td>
              <td>${phone}</td>
              <td>${email}</td>
              <td>${street}</td>
          </tr>
      `
  );

  const usersGrid = document.getElementById("users-grid");
  usersGrid.classList.remove("grid");
  usersGrid.classList.add("d-none");

  const table = document.getElementById("users-table");
  table.classList.remove("d-none");
  table.classList.add("table");
  document.getElementById("users-body").innerHTML = usersAsTable.join("");
};

const displayGrid = () => {
  let cells = "";
  users.forEach((user) => {
    const cell = `
    <div class="col">
            <div class="card">
                <div class="card-body">
                <h3>${user.name}</h3>
                <p>${user.phone}</p>
                <p>${user.email}</p>
            </div></div>
            </div>
        `;
    cells = cells + cell;
  });
  const usersAsCells = users.map(
    (user) =>
      `
          <div class="col">
            <div class="card">
                <div class="card-body">
                <h3>${user.name}</h3>
                <p>${user.phone}</p>
                <p>${user.email}</p>
            </div></div>
            </div>
      `
  );

  const usersTable = document.getElementById("users-table");
  usersTable.classList.remove("d-block");
  usersTable.classList.add("d-none");

  const usersGrid = document.getElementById("users-grid");
  usersGrid.classList.remove("d-none");
  usersGrid.classList.add("row");
  usersGrid.classList.add("g-4");
  usersGrid.classList.add("row-cols-2");
  usersGrid.innerHTML = usersAsCells.join("");
};

const search = () => {
  const searchInput = document.getElementById("search");
  const filterCriteria = searchInput.value;
  const usersAsCells = users
    .filter(
      ({ name }) =>
        name.toLowerCase().indexOf(filterCriteria.toLowerCase()) > -1
    )
    .map(
      (user) =>
        `
            <div class="col">
              <div class="card">
                  <div class="card-body">
                  <h3>${user.name}</h3>
                  <p>${user.phone}</p>
                  <p>${user.email}</p>
              </div></div>
              </div>
        `
    );

  const usersTable = document.getElementById("users-table");
  usersTable.classList.remove("d-block");
  usersTable.classList.add("d-none");

  const usersGrid = document.getElementById("users-grid");
  usersGrid.classList.remove("d-none");
  usersGrid.classList.add("row");
  usersGrid.classList.add("g-4");
  usersGrid.classList.add("row-cols-2");
  usersGrid.innerHTML = usersAsCells.join("");
};

const sortUsers = () => {
  const field = document.getElementById("sortField").value;
  const usersToDisplay = users.sort((a, b) => {
    if (field === "address") {
      return a["address"]["street"] > b["address"]["street"]
        ? 1
        : b["address"]["street"] > a["address"]["street"]
        ? -1
        : 0;
    }
    return a[field] > b[field] ? 1 : b[field] > a[field] ? -1 : 0;
  });
  handleData(usersToDisplay);
};
function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => handleResponse(response))
    .then((data) => handleData(data));
}
