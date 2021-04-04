function zadanie1() {
	var str = '';
	var i = 0;

	while (i <= 100) {
		str += i + ' ';
		i++;
	}

	console.log(str);
}

zadanie1()



var price_products = [33, 122, 9, 3];

function countBasketPrice(products) {
	var all_price = 0;
	for (var i in products) {
		all_price += price_products[i];
	}
	
	return all_price;
}

console.log(countBasketPrice(price_products));



function zadanie3() {
	var str = '';
	for (var i = 0; i <= 9; str += i++ + ' ') {}

	console.log(str);
}

function zadanie4() {
	var str = '';
	for (var x = 1; x <= 20; x++) {
		for (var v = 1; v <= x; v++) {
			str += 'x';
		}
		str += '\n'
	}

	console.log(str);
}

zadanie3();
zadanie4();
