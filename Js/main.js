console.log(document.title);

const integrante = document.getElementById("integrante").textContent;
const nombre = document.getElementById("name").textContent;
const segundonombre = document.getElementById("secondname").textContent;
const apellido = document.getElementById("lastname").textContent;
const segundapellido = document.getElementById("secondlastname").textContent;
console.log(
  `${integrante}: ${nombre} ${segundonombre} ${apellido} ${segundapellido}`
);

const integrante2 = document.getElementById("integrante2").textContent;
const nombre2 = document.getElementById("name2").textContent;
const segundonombre2 = document.getElementById("secondname2").textContent;
const apellido2 = document.getElementById("lastname2").textContent;
const segundapellido2 = document.getElementById("secondlastname2").textContent;
console.log(
  `${integrante2}: ${nombre2} ${segundonombre2} ${apellido2} ${segundapellido2}`
);

if (
  nombre == nombre2 ||
  segundonombre == segundonombre2 || 
  nombre == segundonombre2 ||
  segundonombre == nombre2 
) {
  console.log("Hubo coincidencias");
  prompt("Hubo coincidencias, por favor ingresar el nombre de un color");
} else {
  console.log("No hubo coincidencias");
}