// product constraction
function menu(id, name, description, price, image){
	this.id = id
	this.name = name
	this.description = description
	this.price = price
	this.image = image
}

// create new products from the product constructor
var menu1 = new menu (1, 'Menu Classic', 'Sandwich: Burger, Salade, Tomate, Cornichon + Frites + Boisson', 8.9, '../images/m1.png')
var menu2 = new menu (2, 'Menu Bacon', 'Sandwich: Burger, Fromage, Bacon, Salade, Tomate + Frites + Boisson', 9.5, '../images/m2.png')
var menu3 = new menu (3, 'Menu Big', 'Sandwich: Double Burger, Fromage, Cornichon, Salade + Frites + Boisson', 10.9, '../images/m3.png')
var menu4 = new menu (4, 'Menu Chicken', 'Sandwich: Poulet Frit, Tomate, Salade, Mayonnaise + Frites + Boisson', 9.9, '../images/m4.png')
var menu5 = new menu (5, 'Menu Fish', 'Sandwich: Poisson, Salade, Mayonnaise, Cornichon + Frites + Boisson', 10.9, '../images/m5.png')
var menu6 = new menu (6, 'Menu Double Steak', 'Sandwich: Double Burger, Fromage, Bacon, Salade, Tomate + Frites + Boisson', 11.9, '../images/m6.png')
// var burger1 = new burger (7, 'Classic', 'Sandwich: Burger, Salade, Tomate, Cornichon', 5.9, 'images/b1.png')
// var burger1 = new burger (8, 'Bacon', 'Sandwich: Burger, Fromage, Bacon, Salade, Tomate', 6.5, 'images/b2.png')
// var burger1 = new burger (9, 'Big', 'Sandwich: Double Burger, Fromage, Cornichon, Salade', 6.9, 'images/b3.png')
// var burger1 = new burger (10, 'Chicken', 'Sandwich: Poulet Frit, Tomate, Salade, Mayonnaise', 5.9, 'images/b4.png')
// var burger1 = new burger (11, 'Fish', 'Sandwich: Poisson PanÃ©, Salade, Mayonnaise, Cornichon', 6.5, 'images/b5.png')
// var burger1 = new burger (12, 'Double Steak', 'Sandwich: Double Burger, Fromage, Bacon, Salade, Tomate', 7.5, 'images/b6.png')
// var snacks = new burger (13, 'Frites', 'Pommes de terre frites', 3.9, 'images/s1.png')
// var snacks = new burger (14, 'Onion Rings', "Rondelles d'oignon frits", 3.4, 'images/s2.png')
// var snacks = new burger (15, 'Nuggets', 'Nuggets de poulet frits', 5.9, 'images/s3.png')
// var snacks = new burger (16, 'Nuggets Fromage', 'Nuggets de fromage frits', 3.5, 'images/s4.png')
// var snacks = new burger (17, 'Ailes de Poulet', 'Ailes de poulet Barbecue', 5.9, 'images/s5.png')
// var salade = new burger (18, 'CÃ©sar Poulet PanÃ©', 'Poulet PanÃ©, Salade, Tomate et la fameuse sauce CÃ©sar', 8.9, 'images/sa1.png')
// var salade = new burger (19, 'CÃ©sar Poulet GrillÃ©', 'Poulet GrillÃ©, Salade, Tomate et la fameuse sauce CÃ©sar', 8.9, 'images/sa2.png')
// var salade = new burger (20, 'Salade Light', 'Salade, Tomate, Concombre, MaÃ¯s et Vinaigre balsamique', 5.9, 'images/sa3.png')
// var salade = new burger (21, 'Poulet PanÃ©', 'Poulet PanÃ©, Salade, Tomate et la sauce de votre choix', 7.9, 'images/sa4.png')
// var salade = new burger (22, 'Poulet GrillÃ©', 'Poulet GrillÃ©, Salade, Tomate et la sauce de votre choix', 7.9, 'images/sa5.png')
// var drinks = new burger (23, 'Coca-Cola', 'Au choix: Petit, Moyen ou Grand', 1.9, 'images/bo1.png')
// var drinks = new burger (24, 'Coca-Cola Light', 'Au choix: Petit, Moyen ou Grand', 1.9, 'images/bo2.png')
// var drinks = new burger (25, 'Coca-Cola ZÃ©ro', 'Au choix: Petit, Moyen ou Grand', 1.9, 'images/bo3.png')
// var drinks = new burger (26, 'Fanta', 'Au choix: Petit, Moyen ou Grand', 1.9, 'images/bo4.png')
// var drinks = new burger (27, 'Sprite', 'Au choix: Petit, Moyen ou Grand', 1.9, 'images/bo5.png')
// var drinks = new burger (28, 'Nestea', 'Au choix: Petit, Moyen ou Grand', 1.9, 'images/bo6.png')
// var desserts = new burger (29, 'Fondant au chocolat', 'Au choix: Chocolat Blanc ou au lait', 4.9, 'images/d1.png')
// var desserts = new burger (30, 'Muffin', 'Au choix: Au fruits ou au chocolat', 2.9, 'images/d2.png')
// var desserts = new burger (31, 'Beignet', 'Au choix: Au chocolat ou Ã  la vanille', 2.9, 'images/d3.png')
// var desserts = new burger (32, 'Milkshake', 'Au choix: Fraise, Vanille ou Chocolat', 3.9, 'images/d4.png')
// var desserts = new burger (33, 'Sundae', 'Au choix: Fraise, Caramel ou Chocolat', 4.9, 'images/d5.png')




// create an array to add products to
var menuArray = new Array

// add products to array of products

menuArray.push(menu1, menu2, menu3, menu4, menu5, menu6)

// loop through products array
for(var i = 0; i < menuArray.length; i++) {
	// creation the element
	var newItem = document.createElement("div")
	var newDiv = document.createElement("div")
	var idH1 = document.createElement("h1")
	var nameH3 = document.createElement("h3")
	var descriptionH5 = document.createElement("h5")
	var priceH4 = document.createElement("h4")
	var image = document.createElement("img")
	var btn = document.createElement("button")
	


	// create texte for the element

	var tid = document.createTextNode(menuArray[i].id)
	var tName = document.createTextNode(menuArray[i].name)
	var tDescription = document.createTextNode("description : " + menuArray[i].description)
	var tPrice = document.createTextNode("Price : $" + menuArray[i].price)
	var tButton = document.createTextNode("Commander")
	

	// update source attribute
	image.src = menuArray[i].image

	image.className = "img-responsive"
	btn.className = "btn btn-warning btn-lg"
	newItem.className = "col-sm-6 col-md-4"
	newDiv.className = "burger burgerName" + [i] + " thumbnail"
	priceH4.className = ".price"
	

	// add text to elements
	idH1.appendChild(tid)
	nameH3.appendChild(tName)
	descriptionH5.appendChild(tDescription)
	priceH4.appendChild(tPrice)
	btn.appendChild(tButton)

	// add elements to new div
	newDiv.appendChild(nameH3)
	newDiv.appendChild(image)
	newDiv.appendChild(idH1)
	newDiv.appendChild(descriptionH5)
	newDiv.appendChild(priceH4)
	newDiv.appendChild(btn)

	// add new div to new item div
	newItem.appendChild(newDiv)

	// add new item to the element with id="shirts"
	document.getElementById("menu").appendChild(newItem)
	
}
// product constraction
function burger(id, name, description, price, image){
	this.id = id
	this.name = name
	this.description = description
	this.price = price
	this.image = image
}

// create new products from the product constructor

var burger1 = new burger (7, 'Classic', 'Sandwich: Burger, Salade, Tomate, Cornichon', 5.9, '../images/b1.png')
var burger2 = new burger (8, 'Bacon', 'Sandwich: Burger, Fromage, Bacon, Salade, Tomate', 6.5, '../images/b2.png')
var burger3 = new burger (9, 'Big', 'Sandwich: Double Burger, Fromage, Cornichon, Salade', 6.9, '../images/b3.png')
var burger4 = new burger (10, 'Chicken', 'Sandwich: Poulet Frit, Tomate, Salade, Mayonnaise', 5.9, '../images/b4.png')
var burger5 = new burger (11, 'Fish', 'Sandwich: Poisson PanÃ©, Salade, Mayonnaise, Cornichon', 6.5, '../images/b5.png')
var burger6 = new burger (12, 'Double Steak', 'Sandwich: Double Burger, Fromage, Bacon, Salade, Tomate', 7.5, '../images/b6.png')





// create an array to add products to
var burgerArray = new Array


// add products to array of products

burgerArray.push(burger1, burger2, burger3, burger4, burger5, burger6)

// loop through products array
for(var i = 0; i < burgerArray.length; i++) {
	// creation the element
	var newItem = document.createElement("div")
	var newDiv = document.createElement("div")
	var idH1 = document.createElement("h1")
	var nameH3 = document.createElement("h3")
	var descriptionH5 = document.createElement("h5")
	var priceH4 = document.createElement("h4")
	var image = document.createElement("img")
	var btn = document.createElement("button")
	
console.log(burgerArray)

	// create texte for the element

	var tid = document.createTextNode(burgerArray[i].id)
	var tName = document.createTextNode(burgerArray[i].name)
	var tDescription = document.createTextNode("description : " + burgerArray[i].description)
	var tPrice = document.createTextNode("Price : $" + burgerArray[i].price)
	var tButton = document.createTextNode("Commander")
	

	// update source attribute
	image.src = burgerArray[i].image

	image.className = "img-responsive"
	btn.className = "btn btn-warning btn-lg"
	newItem.className = "col-sm-6 col-md-4"
	newDiv.className = "burger burgerName" + [i] + " thumbnail"
	priceH4.className = ".price"
	

	// add text to elements
	idH1.appendChild(tid)
	nameH3.appendChild(tName)
	descriptionH5.appendChild(tDescription)
	priceH4.appendChild(tPrice)
	btn.appendChild(tButton)

	// add elements to new div
	newDiv.appendChild(nameH3)
	newDiv.appendChild(image)
	newDiv.appendChild(idH1)
	newDiv.appendChild(descriptionH5)
	newDiv.appendChild(priceH4)
	newDiv.appendChild(btn)

	// add new div to new item div
	newItem.appendChild(newDiv)

	// add new item to the element with id="shirts"
	document.getElementById("burger").appendChild(newItem)
	
}

// // product constraction
// function snacks(id, name, description, price, image){
// 	this.id = id
// 	this.name = name
// 	this.description = description
// 	this.price = price
// 	this.image = image
// }

// // create new products from the product constructor

// var snacks1 = new snacks (13, 'Frites', 'Pommes de terre frites', 3.9, '../images/s1.png')
// var snacks2 = new snacks (14, 'Onion Rings', "Rondelles d'oignon frits", 3.4, '../images/s2.png')
// var snacks3 = new snacks (15, 'Nuggets', 'Nuggets de poulet frits', 5.9, '../images/s3.png')
// var snacks4 = new snacks (16, 'Nuggets Fromage', 'Nuggets de fromage frits', 3.5, '../images/s4.png')
// var snacks5 = new snacks (17, 'Ailes de Poulet', 'Ailes de poulet Barbecue', 5.9, '../images/s5.png')
// // var salade = new burger (18, 'CÃ©sar Poulet PanÃ©', 'Poulet PanÃ©, Salade, Tomate et la fameuse sauce CÃ©sar', 8.9, 'images/sa1.png')
// // var salade = new burger (19, 'CÃ©sar Poulet GrillÃ©', 'Poulet GrillÃ©, Salade, Tomate et la fameuse sauce CÃ©sar', 8.9, 'images/sa2.png')
// // var salade = new burger (20, 'Salade Light', 'Salade, Tomate, Concombre, MaÃ¯s et Vinaigre balsamique', 5.9, 'images/sa3.png')
// // var salade = new burger (21, 'Poulet PanÃ©', 'Poulet PanÃ©, Salade, Tomate et la sauce de votre choix', 7.9, 'images/sa4.png')
// // var salade = new burger (22, 'Poulet GrillÃ©', 'Poulet GrillÃ©, Salade, Tomate et la sauce de votre choix', 7.9, 'images/sa5.png')
// // var drinks = new burger (23, 'Coca-Cola', 'Au choix: Petit, Moyen ou Grand', 1.9, 'images/bo1.png')
// // var drinks = new burger (24, 'Coca-Cola Light', 'Au choix: Petit, Moyen ou Grand', 1.9, 'images/bo2.png')
// // var drinks = new burger (25, 'Coca-Cola ZÃ©ro', 'Au choix: Petit, Moyen ou Grand', 1.9, 'images/bo3.png')
// // var drinks = new burger (26, 'Fanta', 'Au choix: Petit, Moyen ou Grand', 1.9, 'images/bo4.png')
// // var drinks = new burger (27, 'Sprite', 'Au choix: Petit, Moyen ou Grand', 1.9, 'images/bo5.png')
// // var drinks = new burger (28, 'Nestea', 'Au choix: Petit, Moyen ou Grand', 1.9, 'images/bo6.png')
// // var desserts = new burger (29, 'Fondant au chocolat', 'Au choix: Chocolat Blanc ou au lait', 4.9, 'images/d1.png')
// // var desserts = new burger (30, 'Muffin', 'Au choix: Au fruits ou au chocolat', 2.9, 'images/d2.png')
// // var desserts = new burger (31, 'Beignet', 'Au choix: Au chocolat ou Ã  la vanille', 2.9, 'images/d3.png')
// // var desserts = new burger (32, 'Milkshake', 'Au choix: Fraise, Vanille ou Chocolat', 3.9, 'images/d4.png')
// // var desserts = new burger (33, 'Sundae', 'Au choix: Fraise, Caramel ou Chocolat', 4.9, 'images/d5.png')




// // create an array to add products to
// var snacksArray = new Array

// // add products to array of products

// snacksArray.push(snacks1, snacks2, snacks3, snacks4, snacks5)

// // loop through products array
// for(var i = 0; i < snacksArray.length; i++) {
// 	// creation the element
// 	var newItem = document.createElement("div")
// 	var newDiv = document.createElement("div")
// 	var idH1 = document.createElement("h1")
// 	var nameH3 = document.createElement("h3")
// 	var descriptionH5 = document.createElement("h5")
// 	var priceH4 = document.createElement("h4")
// 	var image = document.createElement("img")
// 	var btn = document.createElement("button")
	


// 	// create texte for the element

// 	var tid = document.createTextNode(snacksArray[i].id)
// 	var tName = document.createTextNode(snacksArray[i].name)
// 	var tDescription = document.createTextNode("description : " + snacksArray[i].description)
// 	var tPrice = document.createTextNode("Price : $" + snacksArray[i].price)
// 	var tButton = document.createTextNode("Commander")
	

// 	// update source attribute
// 	image.src = snacksArray[i].image

// 	image.className = "img-responsive"
// 	btn.className = "btn btn-warning btn-lg"
// 	newItem.className = "col-sm-6 col-md-4"
// 	newDiv.className = "burger burgerName" + [i] + " thumbnail"
// 	priceH4.className = ".price"
	

// 	// add text to elements
// 	idH1.appendChild(tid)
// 	nameH3.appendChild(tName)
// 	descriptionH5.appendChild(tDescription)
// 	priceH4.appendChild(tPrice)
// 	btn.appendChild(tButton)

// 	// add elements to new div
// 	newDiv.appendChild(nameH3)
// 	newDiv.appendChild(image)
// 	newDiv.appendChild(idH1)
// 	newDiv.appendChild(descriptionH5)
// 	newDiv.appendChild(priceH4)
// 	newDiv.appendChild(btn)

// 	// add new div to new item div
// 	newItem.appendChild(newDiv)

// 	// add new item to the element with id="shirts"
// 	document.getElementById("snacks").appendChild(newItem)
	
// }

// // product constraction
// function salade(id, name, description, price, image){
// 	this.id = id
// 	this.name = name
// 	this.description = description
// 	this.price = price
// 	this.image = image
// }

// // create new products from the product constructor

// var salade1 = new salade (18, 'CÃ©sar Poulet PanÃ©', 'Poulet PanÃ©, Salade, Tomate et la fameuse sauce CÃ©sar', 8.9, '../images/sa1.png')
// var salade2 = new salade (19, 'CÃ©sar Poulet GrillÃ©', 'Poulet GrillÃ©, Salade, Tomate et la fameuse sauce CÃ©sar', 8.9, '../images/sa2.png')
// var salade3 = new salade (20, 'Salade Light', 'Salade, Tomate, Concombre, MaÃ¯s et Vinaigre balsamique', 5.9, '../images/sa3.png')
// var salade4 = new salade (21, 'Poulet PanÃ©', 'Poulet PanÃ©, Salade, Tomate et la sauce de votre choix', 7.9, '../images/sa4.png')
// var salade5 = new salade (22, 'Poulet GrillÃ©', 'Poulet GrillÃ©, Salade, Tomate et la sauce de votre choix', 7.9, '../images/sa5.png')
// // var drinks = new burger (23, 'Coca-Cola', 'Au choix: Petit, Moyen ou Grand', 1.9, 'images/bo1.png')
// // var drinks = new burger (24, 'Coca-Cola Light', 'Au choix: Petit, Moyen ou Grand', 1.9, 'images/bo2.png')
// // var drinks = new burger (25, 'Coca-Cola ZÃ©ro', 'Au choix: Petit, Moyen ou Grand', 1.9, 'images/bo3.png')
// // var drinks = new burger (26, 'Fanta', 'Au choix: Petit, Moyen ou Grand', 1.9, 'images/bo4.png')
// // var drinks = new burger (27, 'Sprite', 'Au choix: Petit, Moyen ou Grand', 1.9, 'images/bo5.png')
// // var drinks = new burger (28, 'Nestea', 'Au choix: Petit, Moyen ou Grand', 1.9, 'images/bo6.png')
// // var desserts = new burger (29, 'Fondant au chocolat', 'Au choix: Chocolat Blanc ou au lait', 4.9, 'images/d1.png')
// // var desserts = new burger (30, 'Muffin', 'Au choix: Au fruits ou au chocolat', 2.9, 'images/d2.png')
// // var desserts = new burger (31, 'Beignet', 'Au choix: Au chocolat ou Ã  la vanille', 2.9, 'images/d3.png')
// // var desserts = new burger (32, 'Milkshake', 'Au choix: Fraise, Vanille ou Chocolat', 3.9, 'images/d4.png')
// // var desserts = new burger (33, 'Sundae', 'Au choix: Fraise, Caramel ou Chocolat', 4.9, 'images/d5.png')




// // create an array to add products to
// var saladeArray = new Array

// // add products to array of products

// saladeArray.push(salade1, salade2, salade3, salade4, salade5)

// // loop through products array
// for(var i = 0; i < saladeArray.length; i++) {
// 	// creation the element
// 	var newItem = document.createElement("div")
// 	var newDiv = document.createElement("div")
// 	var idH1 = document.createElement("h1")
// 	var nameH3 = document.createElement("h3")
// 	var descriptionH5 = document.createElement("h5")
// 	var priceH4 = document.createElement("h4")
// 	var image = document.createElement("img")
// 	var btn = document.createElement("button")
	


// 	// create texte for the element

// 	var tid = document.createTextNode(saladeArray[i].id)
// 	var tName = document.createTextNode(saladeArray[i].name)
// 	var tDescription = document.createTextNode("description : " + saladeArray[i].description)
// 	var tPrice = document.createTextNode("Price : $" + saladeArray[i].price)
// 	var tButton = document.createTextNode("Commander")
	

// 	// update source attribute
// 	image.src = saladeArray[i].image

// 	image.className = "img-responsive"
// 	btn.className = "btn btn-warning btn-lg"
// 	newItem.className = "col-sm-6 col-md-4"
// 	newDiv.className = "burger burgerName" + [i] + " thumbnail"
// 	priceH4.className = ".price"
	

// 	// add text to elements
// 	idH1.appendChild(tid)
// 	nameH3.appendChild(tName)
// 	descriptionH5.appendChild(tDescription)
// 	priceH4.appendChild(tPrice)
// 	btn.appendChild(tButton)

// 	// add elements to new div
// 	newDiv.appendChild(nameH3)
// 	newDiv.appendChild(image)
// 	newDiv.appendChild(idH1)
// 	newDiv.appendChild(descriptionH5)
// 	newDiv.appendChild(priceH4)
// 	newDiv.appendChild(btn)

// 	// add new div to new item div
// 	newItem.appendChild(newDiv)

// 	// add new item to the element with id="shirts"
// 	document.getElementById("salades").appendChild(newItem)
	
// }

