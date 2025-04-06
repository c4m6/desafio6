console.log(document.title);

/*
* Clase Persona
* Attributos: Array [{Name1, Name2, Lastname1, Lastname2}]
* Method: 
*         -getText: stg [Text]
*         -setText: stg [Text]
*         -getTagID: stg [TagID]
*         -setTagID: stg [TagID]
*/
class Person {
  // Atributos: name1, name2, lastname1, lastname2
  #attributes = {};

  constructor(attributes) {
    // creo mi array de objectos atributos
    for (let [key, value] of Object.entries(attributes)) {
      this.#attributes[key] = { text: value.text, tagId: value.tagId };
    }
  }

  // Getter & Setters
  get(attributeName) {
    if (this.#attributes.hasOwnProperty(attributeName)) {
      return {
        getText: () => this.#attributes[attributeName].text,  // Get text
        setText: (value) => { this.#attributes[attributeName].text = value; },  // Set text
        getTagId: () => this.#attributes[attributeName].tagId,  // Get tagId
        setTagId: (tagId) => { this.#attributes[attributeName].tagId = tagId; }  // Set tagId
      };
    } else {
      throw new Error(`Attribute ${attributeName} does not exist.`);
    }
  }
}

/*
 * Genera log con los nombres de los integrantes
 */
const createLog = (lstPerson) => {
  const linea1 = "-----";
  const linea2 = "---";
  const linea3 = fnIntegranteGetString(lstPerson);
 
  console.log(`${linea1}${linea3}\n${linea1}\n${linea2}`)

};

/*
* Recive una lista [Person(),...], y devuelve un string
* con la concatenación de Name1, Name2, Lastname1, Lastname2
* con salto de linea, para cada elemento de la lista.
*/
function fnIntegranteGetString (param) {
  let stg = "";

  for (let index = 0; index < param.length; index++) {
    const element = param[index];                            // Elemento de la lista
    const name1 = element.get("name1").getText();            // Nombre 1
    const name2 = element.get("name2").getText();            // Nombre 2
    const lastname1 = element.get("lastname1").getText();    // Apellido 1
    const lastname2 = element.get("lastname2").getText();    // Apellido 2


    stg = stg.concat(`\n`)
             .concat(name1 ? `${name1}`: "")
             .concat(name2 ? ` ${name2}` : "")
             .concat(lastname1 ? ` ${lastname1}` : "")
             .concat(lastname2 ? ` ${lastname2}` : "")
  }
  return stg;
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
  const integrantes = document.getElementsByTagName("dl"); // Levantar todos los integrantes
  
  let lista_integrantes = []; // Lista de integrantes a devolver

  for (let rows = 0; rows < integrantes.length; rows++) {

      const _name1 = { 
        text:  integrantes[rows].getElementsByTagName("dd")[0].innerText,              // Attribute Value,
        tagId: integrantes[rows].getElementsByTagName("dd")[0].getAttributeNode("id").textContent  // Attribute ID
      }

      const _name2 ={ 
        text:  integrantes[rows].getElementsByTagName("dd")[1].innerText,              // Attribute Value,
        tagId: integrantes[rows].getElementsByTagName("dd")[1].getAttributeNode("id").textContent  // Attribute ID
      }

      const _lastname1 ={ 
        text:  integrantes[rows].getElementsByTagName("dd")[2].innerText,              // Attribute Value,
        tagId: integrantes[rows].getElementsByTagName("dd")[2].getAttributeNode("id").textContent  // Attribute ID
      }

      const _lastname2 ={ 
        text:  integrantes[rows].getElementsByTagName("dd")[3].innerText,              // Attribute Value,
        tagId: integrantes[rows].getElementsByTagName("dd")[3].getAttributeNode("id").textContent  // Attribute ID
      }

      lista_integrantes.push( new Person( { name1: _name1,
                                            name2: _name2,
                                            lastname1: _lastname1,
                                            lastname2: _lastname2 } ))
          
    }

  return lista_integrantes;
};

/*
* Informo de los integrantes y pregunto si hay coincidencias
*/
const informarIntegrantes = () => {
  const integrantes = getIntegrantes();
  createLog(integrantes);

  compareNames(integrantes[0], integrantes[1]);
  compareLastnames(integrantes[0], integrantes[1]);

};

// Promp para elegir el color
function promptColor(msg){
  return color = prompt(msg);
}

// Compara NAME1 y NAME2 de dos personas [Person()]
function compareNames(person1, person2) {
  const MSG   = "Hubo coincidencias en uno de los nombres, por favor escriba un color para destacarlos:";
  const NAME1 = 'name1';
  const NAME2 = 'name2';

  if( !compareText( getListTextTagID(person1, NAME1, NAME2),
               getListTextTagID(person2, NAME1, NAME2),
               MSG ) 
    ){
  
     console.log("No hubo coincidencias en los nombres de los integrantes");
     confirm("Desea comparar los apellidos de los integrantes?");
    }

}

// Compara LASTNAME1 y LASTNAME2 de dos personas [Person()]
function compareLastnames(person1, person2) {
  const MSG   = "Hubo coincidencias en uno de los apellidos, por favor escriba un color para destacarlos:";
  const NAME1 = 'lastname1';
  const NAME2 = 'lastname2';

  if( !compareText( getListTextTagID(person1, NAME1, NAME2),
               getListTextTagID(person2, NAME1, NAME2),
               MSG ) 
    ){
  
     console.log("No hubo coincidencias en los nombres de los integrantes");
     confirm("Desea comparar los apellidos de los integrantes?");
    }}

/*
* Devuelve una lista [Text, TagID]
*/
function getListTextTagID(person, name1, name2 ){

  const lstTextTagID = [ [person.get(name1).getText(), person.get(name2).getText()],
                       [person.get(name1).getTagId(), person.get(name2).getTagId()]
                     ];

  return lstTextTagID;
}

/*
* Comparar texto en una lista [Text, TagID] y settea un color
* utilizando el TagID.
*/
function compareText(lstPerson1, lstPerson2, msg) {

for (let a = 0; a < lstPerson1[0].length; a++) {
  
  for (let b = 0; b < lstPerson2[0].length; b++) {

    if( lstPerson1[0][a] == lstPerson2[0][b] ){
      const color = promptColor(msg);

      document.getElementById(`${lstPerson1[1][a]}`).style.color = color; // Ex. "#ff0000"
      document.getElementById(`${lstPerson2[1][b]}`).style.color = color;

      return true;
    }
     
  }
}

return false;
}




// INICIO DE LA CONSULTA  

console.log(document.title);

informarIntegrantes();







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
