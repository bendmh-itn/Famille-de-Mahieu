var allData = [];

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

export const DataInOptions = () => {
  var options = [];
  allData
    .filter((person) => person.generation !== "4")
    .map((element) => {
      return options.push({
        value: element.generation + "/" + element.numberFamilly,
        label: element.firstName + " " + element.lastName,
      });
    });
  return options;
};

function trieArray(a, b) {
  if (a.birthDate !== b.birthDate) {
    return a.birthDate > b.birthDate ? 1 : -1;
  }
  return 0;
}

export const MoisPersons = () => {
  let data = [];
  const now = new Date();
  allData.forEach((element) => {
    if (element.birthDate.split("/")[1] === (now.getMonth() + 1).toString()) {
      data.push(element);
    }
  });
  data.sort(trieArray);
  return data;
};
