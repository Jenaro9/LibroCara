const form = document.querySelector(".user-form");
const main = document.querySelector("main");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  login();
});

function login() {
  const inputs = [...document.querySelectorAll("input")];
  console.log(inputs);
  let usuario = inputs[0].value;
  let Contraseña = inputs[1].value;

  if (!(usuario = "infotec" && Contraseña == "2022"))
    return alert("Verifique sus credenciales");

  const userName = document.querySelector(".userName");
  userName.innerHTML = "Juan Perez";
  main.classList.remove("oculto");
}
