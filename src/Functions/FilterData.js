import { ACTUAL_GENERATION } from "../constant";

var allData = [];

export const clearAllData = () => {
  allData = [];
};

export const addEmail = (numberFamilly, email) => {
  const person = FindOnePersonByNumberFamilly(numberFamilly);
  person.email = email;
};

export const getData = () => {
  return allData;
};

export const copyData = (data) => {
  allData = [];
  data.forEach((element) => {
    allData.push(element);
  });
};

export const MyFilter = (numberFamilly, generation) => {
  var filteredData = [];
  var valueCompare = numberFamilly.toString().slice(0, generation - 1);
  allData
    .filter(
      (person) =>
        person.numberFamilly.toString().slice(0, generation - 1) ===
          valueCompare && person.numberFamilly < valueCompare * 10 + 10
    )
    .map((person) => {
      return filteredData.push(person);
    });
  return filteredData;
};

export const ChildrenInOptions = (numberFamilly, generation) => {
  var options = [];
  var valueCompare = numberFamilly.toString().slice(0, generation - 1);
  if (generation === "3") {
    allData
      .filter(
        (person) =>
          person.numberFamilly.toString().slice(0, generation - 1) ===
            valueCompare && person.numberFamilly < valueCompare * 10 + 10
      )
      .map((element) => {
        return options.push({
          value: element.generation + "/" + element.numberFamilly,
          label: element.firstName + " " + element.lastName,
        });
      });
  } else {
    allData
      .filter(
        (person) =>
          person.numberFamilly.toString().slice(0, generation - 1) ===
            valueCompare && person.numberFamilly <= valueCompare * 10
      )
      .map((element) => {
        return options.push({
          value: element.generation + "/" + element.numberFamilly,
          label: element.firstName + " " + element.lastName,
        });
      });
  }
  return options;
};

export const DataInOptions = () => {
  var options = [];
  allData
    .filter((person) => person.generation !== ACTUAL_GENERATION)
    .map((element) => {
      return options.push({
        value: element.generation + "/" + element.numberFamilly,
        label: element.firstName + " " + element.lastName,
      });
    });
  return options;
};

export const FindOnePersonByNumberFamilly = (numberFamilly) => {
  var filteredData = [];
  allData
    .filter((person) => person.numberFamilly === numberFamilly)
    .map((person) => {
      return filteredData.push(person);
    });
  return filteredData[0];
};

export const FindOnePersonByEmail = (email) => {
  var filteredData = [];
  allData
    .filter((person) => person.email === email)
    .map((person) => {
      return filteredData.push(person);
    });
  return filteredData[0];
};

/**
 * Cette permet de créer des options pour une liste déroulante en évitant la génération 1 et actuelle
 * @returns array
 */
export const AllDataInOptions = () => {
  var options = [];
  allData
    .filter(
      (person) =>
        (person.generation !== "1" &&
          person.generation !== ACTUAL_GENERATION &&
          person.email === undefined) ||
        person.email === ""
    )
    .map((element) => {
      return options.push({
        value: element.generation + "/" + element.numberFamilly,
        label: element.firstName + " " + element.lastName,
      });
    });
  return options;
};

/**
 * Cette permet de créer des options pour une liste déroulante de tous les utilisateurs
 * @returns array
 */
export const AllDataInOptionsNoException = () => {
  var options = [];
  allData.map((element) => {
    return options.push({
      value: element.generation + "/" + element.numberFamilly,
      label: element.firstName + " " + element.lastName,
    });
  });
  return options;
};

function trieArray(a, b) {
  let anneeA = a.birthDate.split("/")[2];
  let anneeB = b.birthDate.split("/")[2];
  let moisA = a.birthDate.split("/")[1];
  let moisB = b.birthDate.split("/")[1];
  let jourA = a.birthDate.split("/")[0];
  let jourB = b.birthDate.split("/")[0];
  if (anneeA !== anneeB) {
    return anneeA > anneeB ? 1 : -1;
  }
  if (moisA !== moisB) {
    return moisA > moisB ? 1 : -1;
  }
  if (jourA !== jourB) {
    return jourA > jourB ? 1 : -1;
  }
  return 0;
}

function trieArrayByBirthdate(a, b) {
  if (a.birthDate !== b.birthDate) {
    return a.birthDate > b.birthDate ? 1 : -1;
  }
  return 0;
}

/**
 * Cette fonction permet de renvoyer les personnes qui sont né durant le mois actuel. C'est pour afficher les anniversaires
 * @returns array
 */
export const MoisPersons = () => {
  let data = [];
  const now = new Date();
  let moisAnnee =
    now.getMonth() + 1 < 10
      ? "0" + (now.getMonth() + 1).toString()
      : (now.getMonth() + 1).toString();
  allData.forEach((element) => {
    if (element.birthDate.split("/")[1] === moisAnnee) {
      data.push(element);
    }
  });
  data.sort(trieArrayByBirthdate);
  return data;
};

/**
 * Cette fonction permet de récupérer uniquement les personnes d'une certaine génération. De plus il trie ce tableau par date de naissance
 * @param {correspond à la generation demandée} e
 * @returns array
 */
export const FilterByGeneration = (e) => {
  let data = [];
  allData.forEach((element) => {
    if (element.generation === e) {
      data.push(element);
    }
  });
  data.sort(trieArray);
  return data;
};

/**
 * Cette fonction permet de filtrer pour éviter les personnes qui n'ont pas de photo de profil
 * @returns array
 */
const FilterByPicture = () => {
  const data = allData.filter(
    (element) =>
      element.pictureName !==
        "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2Fnaruto-g5ac97839f_640.png?alt=media&token=89f220af-2915-4dcc-9fd7-6e69de09fe7c" &&
      element.pictureName !==
        "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2Fhomme.PNG?alt=media&token=e9014335-a2b9-48a8-9732-f9997269b515" &&
      element.pictureName !==
        "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2Ffemme.PNG?alt=media&token=1e2723b0-31a3-44de-a503-d2d7c0694e88"
  );
  return data;
};

//fonction qui permet d'obtenir un nombre aléatoire entre 0 et max
/*function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}*/

export const RandomizeArray = () => {
  let data = [];
  let dataFiltred = FilterByPicture(allData);
  data = randomize(dataFiltred);
  return data;
};

//Cette fonction permet de mélanger les données dans un tableau
function randomize(tab) {
  var i, j, tmp;
  for (i = tab.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    tmp = tab[i];
    tab[i] = tab[j];
    tab[j] = tmp;
  }
  return tab;
}
