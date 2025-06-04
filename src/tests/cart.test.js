import { clearCart, addToCart, getCartItemCount, getItem, getTotalCartValue, removeFromCart, editCart, getCart } from "../cart.js"

 const exampleProduct = { id: 1002, name: 'Vattenpistol', price: 40 }
   


describe('Cart', () => {
 	beforeEach(() => {
 		clearCart()
	})		


	test('addToCart lägger till en ny produkt i kundvagnen', () => {
		const itemCountBefore = getCartItemCount()
		const input = { id: 1002, name: 'Vattenpistol', price: 40 }

		addToCart(input)
		const itemCountAfter = getCartItemCount()

		expect(itemCountAfter).toBe(itemCountBefore + 1)
	})

	test('addToCart kastar fel om produkten inte är giltig', () => {
	const input = { id: 1002, name: 'Vattenpistol' } //tog bort pris

		expect(() => 

		addToCart(input)).toThrow("Produkten är inte giltig")
	})



describe('getCartItemCount', () => {

	test('getCartItemCount returnernar antalet produkter i kundvagnen', () => {
		const item1 = { id: 1002, name: 'Vattenpistol', price: 40 }
		const item2 = { id: 1003, name: 'Badanka', price: 50 }
		addToCart(item1)
		addToCart(item2)
		const actual = getCartItemCount()
		const expected = 2
		expect(actual).toBe(expected)
	})

	test('getCartItemCount returnerar 0 om kundvagnen är tom', () => {
		const actual = getCartItemCount()
		const expected = 0
		expect(actual).toBe(expected)
	})
})

describe('getItem', () => {

	test('getItem returnerar false om giltigt ID inte finns i cart', () => {
		const itemId = 0 //ID som ej finns i cart
		const actual = getItem(itemId)
		expect(actual).toBe(false)
	})

	test('getItem returnerar objektet om id finns i cart', () => {
    const expected = { id: 1002, name: 'Vattenpistol', price: 40 }
    addToCart(expected)
    const actual = getItem(1002)
    expect(actual).toEqual(expected)
	})
})

describe('getTotalCartValue', () => {

    test('getTotalCartValue returnerar "Din varukorg är tom" om kundvagnen är tom', () => {
        const actual = getTotalCartValue()
        const expected = "Din varukorg är tom"
        expect(actual).toBe(expected)
    })

    test('getTotalCartValue returnerar summan av alla produkter i kundvagnen', () => {
        const item1 = { id: 1002, name: 'Vattenpistol', price: 40 }
        const item2 = { id: 1003, name: 'Badanka', price: 50 }
        addToCart(item1)
        addToCart(item2)
        const actual = getTotalCartValue()
        const expected = item1.price + item2.price
        expect(actual).toBe(expected)
    })
})

describe('removeFromCart tar bort produkter från kundvagnen', () => {

	test('removeFromCart returnerar true om man tar bort en produkt från kundvagnen', ()  => {	
    const item = exampleProduct
    addToCart(item) 
    const actual = removeFromCart(item.id)
	const expected = true 
    expect(actual).toBe(expected)
	})

	test('removeFromCart kastar fel om produkten inte finns', () => {
		expect(() => 
		removeFromCart(0)).toThrow("Produkten finns inte i kundvagnen")
	})

})	

describe('editCart', () => {

	test('editCart ändrar antalet produkter man har i kundvagnen', () => {

		const item = { id: 1002, name: 'Vattenpistol', price: 40 }
    	addToCart(item)

		const newValues = { amount: 5 }
    	editCart(1002, newValues)

		const cartItem = getCart().find(cartItem => cartItem.item.id === 1002)

		const actual = cartItem.amount
		const expected = 5
    	expect(actual).toBe(expected)
	})
})
})