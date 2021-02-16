export const MyFilter = (data, numberFamilly, generation) => {
	var filteredData = [];
	var valueCompare = numberFamilly.toString().slice(0, generation-1);
	data.map((person) => {
        if(person.numberFamilly.toString().slice(0, generation-1) === valueCompare && person.numberFamilly < valueCompare*10 + 10){
           return filteredData.push(person);
        }
    }
    )
	return filteredData;
};
