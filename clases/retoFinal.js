const usersDatabase = [
  { username: "andres", password: "123" },
  { username: "caro", password: "456" },
  { username: "mariana", password: "789" },
];

const usersTimeline = [
  { username: "Estefany", timeline: "¡Me encanta Javascript!" },
  { username: "Oscar", timeline: "¡Bebeloper es lo mejor!" },
  { username: "Mariana", timeline: "A mí me gusta más el café que el té" },
  { username: "Andrés", timeline: "Yo hoy no quiero trabajar" },
];

const username = prompt("¿Cuál es tu usuario?");
const password = prompt("¿Cuál es tu contraseña?");
function usuarioExistente(username, password) {
  for (let i = 0; i < usersDatabase.length; i++) {
    if (
      usersDatabase[i].username === username &&
      usersDatabase[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (usuarioExistente(username, password)) {
    alert(`Bienvenido a tu cuenta ${username}`);
    console.log(usersTimeline);
  } else {
    alert("Uuups, usuario o contraseña incorrectos!");
  }
}

signIn(username, password);