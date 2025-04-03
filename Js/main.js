console.log(document.title);

const integrante = document.getElementById("integrante").textContent;
const nombre = document.getElementById("name").textContent;
const segundonombre = document.getElementById("secondname").textContent;
const apellido = document.getElementById("lastname").textContent;
const segundoapellido = document.getElementById("secondlastname").textContent;
console.log(
  `${integrante}: ${nombre} ${segundonombre} ${apellido} ${segundoapellido}`
);

const integrante2 = document.getElementById("integrante2").textContent;
const nombre2 = document.getElementById("name2").textContent;
const segundonombre2 = document.getElementById("secondname2").textContent;
const apellido2 = document.getElementById("lastname2").textContent;
const segundoapellido2 = document.getElementById("secondlastname2").textContent;
console.log(
  `${integrante2}: ${nombre2} ${segundonombre2} ${apellido2} ${segundoapellido2}`
);

if (
  nombre == nombre2 ||
  segundonombre == segundonombre2 || 
  nombre == segundonombre2 ||
  segundonombre == nombre2 
) {
  console.log("Hubo coincidencias en los nombres");
  const color = prompt("Hubo coincidencias en uno de los nombres, por favor escriba un color para destacarlos:");

  if (color) {
      if (nombre === nombre2) {
          document.getElementById("name").style.color = color;
          document.getElementById("name2").style.color = color;
      }
      if (segundonombre === segundonombre2) {
          document.getElementById("secondname").style.color = color;
          document.getElementById("secondname2").style.color = color;
      }
      if (nombre === segundonombre2) {
          document.getElementById("name").style.color = color;
          document.getElementById("secondname2").style.color = color;
      }
      if (segundonombre === nombre2) {
          document.getElementById("secondname").style.color = color;
          document.getElementById("name2").style.color = color;
      }
    }
} else {
  console.log("No hubo coincidencias en los nombres de los integrantes");
  confirm("Desea comparar los apellidos de los integrantes?");
}


if (
  apellido == apellido2 ||
  segundoapellido == segundoapellido2 || 
  apellido == segundoapellido2 ||
  segundoapellido == apellido2
) {
  console.log("Hubo coincidencias en los apellidos");
  const color = prompt("Hubo coincidencias en uno de los apellidos, por favor escriba un color para destacarlos:");
  if (color) {
    if (apellido === apellido2) {
        document.getElementById("lastname").style.color = color;
        document.getElementById("lastname2").style.color = color;
    }
    if (segundoapellido === segundoapellido2) {
        document.getElementById("secondlastname").style.color = color;
        document.getElementById("secondlastname").style.color = color;
    }
    if (apellido === segundoapellido2) {
        document.getElementById("lastname").style.color = color;
        document.getElementById("secondlastname2").style.color = color;
    }
    if (segundoapellido === apellido2) {
        document.getElementById("secondlastname").style.color = color;
        document.getElementById("lastname2").style.color = color;
    }
  }
}
else{
  console.log("No hubo coincidencias en los apellidos de los integrantes");
}