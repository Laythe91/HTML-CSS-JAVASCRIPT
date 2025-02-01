function handleResponse(response) {
  return response.json();
}

const handleData = (data) => {
  console.log(data);
};

function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => handleResponse(response))
    .then((data) => handleData(data));
}
