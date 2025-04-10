// INICIO DE LA CONSULTA
console.log(document.title);

informarIntegrantes();



// INICIO DE LA LOGICA

//---> Informo datos sobre los integrantes
function informarIntegrantes() {
  const listaIntegrantes = getIntegrantes();
  createLog(listaIntegrantes);

   compareNames(listaIntegrantes[0], listaIntegrantes[1]);
   compareLastnames(listaIntegrantes[0], listaIntegrantes[1]);
}

//---> Creo un log con los datos de los integrantes
function createLog(lstIntegrante) {
  const linea1 = "-----";
  const linea2 = "---";

  const IntegranteGetString = (param) => {
    let stg = "";

    for (let index = 0; index < param.length; index++) {
      const element = param[index];
      stg = stg
        .concat(`\n`)
        .concat(element.name1 ? `${element.name1}` : "")
        .concat(element.name2 ? ` ${element.name2}` : "")
        .concat(element.lastname1 ? ` ${element.lastname1.toUpperCase()}` : "")
        .concat(element.lastname2 ? ` ${element.lastname2.toUpperCase()}` : "");
    }

    return stg;
  };

  const linea3 = IntegranteGetString(lstIntegrante);

  console.log(`${linea1}${linea3}\n${linea1}\n${linea2}`);
}

//---> Recupero una lista de cada integrante junto con su text y TagID
function getIntegrantes() {
  const integrantes = document
    .getElementById("integrantes")
    .getElementsByTagName("dl");
  let listaIntegrantes = [];

  for (let index = 0; index < integrantes.length; index++) {
    const values = {};

    values.name1 = integrantes[index].getElementsByTagName("dd")[0].innerText;
    values.name1TagID = integrantes[index].getElementsByTagName("dd")[0].getAttributeNode("id").textContent;

    values.name2 = integrantes[index].getElementsByTagName("dd")[1].innerText;
    values.name2TagID = integrantes[index].getElementsByTagName("dd")[1].getAttributeNode("id").textContent;

    values.lastname1 =integrantes[index].getElementsByTagName("dd")[2].innerText;
    values.lastname1TagID =integrantes[index].getElementsByTagName("dd")[2].getAttributeNode("id").textContent;

    values.lastname2 =integrantes[index].getElementsByTagName("dd")[3].innerText;
    values.lastname2TagID =integrantes[index].getElementsByTagName("dd")[3].getAttributeNode("id").textContent;

    listaIntegrantes.push(values);
  }

  return listaIntegrantes;
}

//---> Compara Nombres
function compareNames(integrante1, integrante2) {
  // Mensaje
  const MSG ="Hubo coincidencias en uno de los nombres, por favor escriba un color para destacarlos:";
  // Integrante 1 [[text], [TagID]]
  const listaIntegrante1 = [ [ integrante1.name1, integrante1.name2 ],
                             [ integrante1.name1TagID, integrante1.name2TagID ] ];
  // Integrante 2 [[text], [TagID]]
  const listaIntegrante2 = [ [ integrante2.name1, integrante2.name2 ],
                             [ integrante2.name1TagID, integrante2.name2TagID ] ];


  return compareText(listaIntegrante1, listaIntegrante2, MSG);
 
}

//---> Compara Apellidos
function compareLastnames(integrante1, integrante2) {
  // Mensaje
  const MSG ="Hubo coincidencias en uno de los apellidos, por favor escriba un color para destacarlos:";
  // Integrante 1 [[text], [TagID]]
  const listaIntegrante1 = [ [ integrante1.lastname1, integrante1.lastname2 ],
                             [ integrante1.lastname1TagID, integrante1.lastname2TagID ] ];
  // Integrante 2 [[text], [TagID]]
  const listaIntegrante2 = [ [ integrante2.lastname1, integrante2.lastname2 ],
                             [ integrante2.lastname1TagID, integrante2.lastname2TagID ] ];


  return compareText(listaIntegrante1, listaIntegrante2, MSG);
 
}

//---> Comparar textos y settear styles...
function compareText(lstPerson1 = [], lstPerson2 = [], msg = "") {
  // Loop persona 1 & persona 2
  for (let a = 0; a < lstPerson1[0].length; a++) {
    for (let b = 0; b < lstPerson2[0].length; b++) {
      if (lstPerson1[0][a] == lstPerson2[0][b]) {
        // Evaluo texto que no sea vacío
        if( !lstPerson1[0][a] == ""){  
        const color = promptColor(msg);

        document.getElementById(`${lstPerson1[1][a]}`).style.color = color; // Ex. "#ff0000"
        document.getElementById(`${lstPerson2[1][b]}`).style.color = color;

        return true;
      }
      }
    }
  }
  return false;
}

//--->  Promp para elegir el color
function promptColor(msg) {
  return (color = prompt(msg));
}