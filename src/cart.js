/*
Din uppgift:
- skriv testfall för alla funktionerna nedan i cart.test.js (RED)
- skriv kod här för att implementera funktionerna (GREEN)

Tips:
- börja med att identifiera VAD som ska testas.
- om du testar t.ex. removeFromCart får du använda addToCart i början av testet. Den kommer nämligen ha sina egna tester

*/
// function getCartItemCount()
// function getItem(index)
// function getTotalCartValue()
// function addToCart(newItem)
// function removeFromCart(itemId)
// function editCart(itemId, newValues)
// function clearCart()
// -------------------------------------------------- //

import { isCartItem, isProduct } from "./validation.js"

let cart = []
let idCounter = 2002
// -------------------------------------------------- //


// Din kod börjar här
// Du får en funktion att börja med

// denna funktion returnerar antalet produkter i kundvagnen
function getCartItemCount() {
	return cart.length
	throw new Error('TODO')
}

function addToCart(newItem) {
	if( !isProduct(newItem) ) {
		return false
	}

	const cartItem = { id: idCounter, amount: 1, item: newItem }
	idCounter++
	cart.push(cartItem)
}
//rensa cart
function clearCart() {
	cart = []
}

//testa om getItem returnerar false om item med id inte finns i cart
function getItem(index) {
	if (index < 0 || index >= cart.length) {
		return false
	}
	return cart[index].item

}





export { getCartItemCount, addToCart, clearCart, getItem }
