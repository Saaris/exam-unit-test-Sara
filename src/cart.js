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

// Denna funktion returnerar antalet produkter i kundvagnen
function getCartItemCount() {
	 if (cart.length === 0) {
        throw new Error("Din varukorg är tom")
    }
    return cart.length
}

function addToCart(newItem) {
	if( !isProduct(newItem) ) {
		return false
	}

	const newId = idCounter
	const index = cart.findIndex(ci => ci.item.id === newItem.id)
	if( index === -1 ) {
		const cartItem = { id: idCounter, amount: 1, item: newItem }
		idCounter++
		cart.push(cartItem)
	} else {
		cart[index].amount++
	}
}
	//Rensa cart
function clearCart() {
	cart = []
}

//Testa om getItem returnerar false om item med id inte finns i cart
function getItem(itemId) {
    const found = cart.find(cartItem => cartItem.item.id === itemId)
    return found ? found.item : false
}
// denna funktion returnerar 0 om kundvagnen är tom
function getCartValue() {
    if (cart.length === 0) 
		return 0

	return cart.reduce((total, cartItem) => {
		return total + (cartItem.item.price * cartItem.amount)
	}, 0)

}
function removeFromCart(itemId) {
	 const index = cart.findIndex(cartItem => cartItem.item.id === itemId)
    if (index === -1) {
        return null
}
}


export { getCartItemCount, addToCart, clearCart, getItem, getCartValue, removeFromCart }
