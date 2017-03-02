// product constraction
function menu(id, name, description, price, image){
	this.id = id
	this.name = name
	this.description = description
	this.price = price
	this.image = image
}

// create new products from the product constructor
var menu1 = new menu (18, 'Cesar Poulet Pane', 'Poulet Pane, Salade, Tomate et la fameuse sauce Cesar', 8.9, '../images/sa1.png')
var menu2 = new menu (19, 'Cesar Poulet Grille', 'Poulet Grille, Salade, Tomate et la fameuse sauce Cesar', 8.9, '../images/sa2.png')
var menu3 = new menu (20, 'Salade Light', 'Salade, Tomate, Concombre, Mais et Vinaigre balsamique', 5.9, '../images/sa3.png')
var menu4 = new menu (21, 'Poulet Pane', 'Poulet Pane, Salade, Tomate et la sauce de votre choix', 7.9, '../images/sa4.png')
var menu5 = new menu (22, 'Poulet Grille', 'Poulet Grille, Salade, Tomate et la sauce de votre choix', 7.9, '../images/sa5.png')




// create an array to add products to
var menuArray = new Array

// add products to array of products

menuArray.push(menu1, menu2, menu3, menu4, menu5)

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
	var icon = document.createElement("glyphicon")
	


	// create texte for the element

	var tid = document.createTextNode(menuArray[i].id)
	var tName = document.createTextNode(menuArray[i].name)
	var tDescription = document.createTextNode(menuArray[i].description)
	var tPrice = document.createTextNode("$ " + menuArray[i].price)
	var tButton = document.createTextNode(" Commander")
	

	// update source attribute
	image.src = menuArray[i].image

	image.className = "img-responsive"
	btn.className = "btn-order"
	newItem.className = "col-sm-6 col-md-4"
	newDiv.className = "menu menuName" + [i] + " thumbnail"
	priceH4.className = "price"
	icon.className ="glyphicon glyphicon-shopping-cart"

	// add text to elements
	idH1.appendChild(tid)
	nameH3.appendChild(tName)
	descriptionH5.appendChild(tDescription)
	priceH4.appendChild(tPrice)
	btn.appendChild(icon)
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
