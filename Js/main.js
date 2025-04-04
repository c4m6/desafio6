class Person {

  constructor(name1, name2, lastname1, lastmname2) {
  this.name1      = name1;
  this.name2      = name2;
  this.lastname1  = lastname1;
  this.lastname2  = lastmname2;
}

setReference(id1, id2, id3, id4) {
  this.id1 = id1;
  this.id2 = id2;
  this.id3 = id3;
  this.id4 = id4;
}

getReference(id){
  switch (id) {
    case 'id1':
      return this.id1;
    case 'id2':
      return this.id2;
    case 'id3':
      return this.id3;
    case 'id4':
      return this.id4;  
    default:
      return null;
  }
}

}

/* 
* Genera log con Nombre 1, Nombre 2, Apellido 1, Apllido 2
*/
const CreateLog = (person) => {
console.log(`Integrante: ${person.name1} ${person.name2} ${person.lastname1} ${person.lastname2}`);
}

/*
* Devuelve una lista de los integrantes que se encuentra dentro del 
* Tag ID = dl bajo el Tag ID = dd
* 
* Ex. <dl> <dt>Campo_1</dt> <dd id="Campo_1">Valor 1</dd> </dl>
* 
* Return:
*  List = [Person1(),...]
*/
const getIntegrantes = () => {

const integrantes       = document.getElementsByTagName("dl");         // Levantar todos los integrantes
const lista_integrantes = [];                                          // Lista de integrantes a devolver

for (let index = 0; index < integrantes.length; index++) {
  // Crear un nuevo integrante
  const integrante = new Person(  
    integrantes[index].getElementsByTagName("dd")[0].innerText,        // Name 1
    integrantes[index].getElementsByTagName("dd")[1].innerText,        // Name 2
    integrantes[index].getElementsByTagName("dd")[2].innerText,        // Lastname 1
    integrantes[index].getElementsByTagName("dd")[3].innerText         // Lastname 2
                               );

   // Me guardo el ID de cada componente
   integrante.setReference(
    integrantes[index].getElementsByTagName("dd")[0].getAttributeNode("id"),
    integrantes[index].getElementsByTagName("dd")[1].getAttributeNode("id"),
    integrantes[index].getElementsByTagName("dd")[2].getAttributeNode("id"),
    integrantes[index].getElementsByTagName("dd")[3].getAttributeNode("id")
                               );

lista_integrantes.push(integrante);
}

return lista_integrantes;
}

/* 
* Informar la información de cada integrante...
*/
const informarIntegrantes = () => {
let integrantes = getIntegrantes();

for (let index = 0; index < integrantes.length; index++) {
  CreateLog(integrantes[index])
  
  const id = integrantes[index].getReference("id1");
  
  console.log( id )  

  document.getElementById(id).style.color = "#bf1010";
  document.getElementById("name").style.color = "#bf1010";
}  
}


const isNameRepeated = (person1, person2) =>{
  
  if( person1.name1 == person2.name1 ){

  }
  
  if ( person1.name1 == person2.name2 ){

  }
  
  if ( person1.name2 == person2.name2 ){

  }
    
  if ( person1.lastmname1 == person2.lastmname1 ){

  }
    
  if ( person1.lastmname1 == person2.lastmname2 ){

  }
  
  if ( person1.lastmname2 == person2.lastmname2 ){

  }

      return false;
}


console.log(document.title);

informarIntegrantes()

/* 
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
  const color = prompt(
    "Hubo coincidencias en uno de los nombres, por favor escriba un color para destacarlos:"
  );

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
  const color = prompt(
    "Hubo coincidencias en uno de los apellidos, por favor escriba un color para destacarlos:"
  );
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
} else {
  console.log("No hubo coincidencias en los apellidos de los integrantes");
}
 */