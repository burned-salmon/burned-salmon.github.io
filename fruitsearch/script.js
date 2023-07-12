const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	// I search for the fruit in multiple ways in order to roughly sort the results by relevancy
	// First by exact match, then starting-with, then containing
	const strLower = str.toLowerCase();
	//const exactMatch = fruit.filter(function (value) {
	//	return value.toLowerCase() == strLower;
	//});
	const startsWith = fruit.filter(function (value) {
		return value.toLowerCase().startsWith(strLower);
	});
	const contains = fruit.filter(function (value) {
		return value.toLowerCase().indexOf(strLower) > 0;
	});

	//const results = exactMatch.concat(startsWith, contains);
	const results = startsWith.concat(contains);
	return results;
}

function searchHandler(e) {
	const searchText = e.target.value;
	const searchResults = search(searchText);
	showSuggestions(searchResults, searchText);
}

function showSuggestions(results, inputVal) {
	// First, remove all current children
	while (suggestions.firstChild) {
		suggestions.removeChild(suggestions.firstChild);
	}
	results.forEach(function (value) {
		const listItem = document.createElement("li");
		//const highlight = document.createElement("b");
		//highlight.innerText = inputVal;
		//const highlighted = value.replaceAll(inputVal, highlight);
		listItem.innerText = value;
		suggestions.appendChild(listItem);
	});
}

function useSuggestion(e) {
	if (e.target.tagName = "LI") {
		input.value = e.target.innerText;
		while (suggestions.firstChild) {
			suggestions.removeChild(suggestions.firstChild);
		}
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);