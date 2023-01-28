let form = document.getElementById("form-users");
let table = document.getElementById("table-users");
let tbody = document.getElementById("tbody-users");

form.addEventListener("submit", saveUser);

if (localStorage.getItem("users")) {
  let users = JSON.parse(localStorage.getItem("users"));
  for (let i = 0; i < users.length; i++) {
    createRow(users[i]);
  }
}

function saveUser(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let apellido = document.getElementById("apellido").value;
  let email = document.getElementById("email").value;
  let user = { name, apellido, email };

  if (localStorage.getItem("users")) {
    let users = JSON.parse(localStorage.getItem("users"));
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  } else {
    let users = [user];
    localStorage.setItem("users", JSON.stringify(users));
  }

  createRow(user);

  form.reset();
}

function createRow(user) {
    let row = document.createElement("tr");
  
    let name = document.createElement("td");
    let apellido = document.createElement("td");
    let email = document.createElement("td");
    let actions = document.createElement("td");
  
    name.innerHTML = user.name;
    apellido.innerHTML = user.apellido;
    email.innerHTML = user.email;
    
    row.appendChild(name);
    row.appendChild(apellido);
    row.appendChild(email);
  
    tbody.appendChild(row);
  } 