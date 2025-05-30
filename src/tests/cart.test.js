import { clearCart, addToCart, getCartItemCount, getItem, getTotalCartValue, removeFromCart, editCart, getCart } from "../cart"

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

	test('addToCart returnerar false om produkten (isProduct) inte är giltig', () => {
		const input = { id: 1002, name: 'Vattenpistol' } 
		const result = addToCart(input)
		expect(result).toBe(false)
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

	test('getCartItemCount kastar ett fel om antalet produkter är 0', () => {

		expect(() => {
			getCartItemCount()
		}).toThrow('Din varukorg är tom')		
	})
})

describe('getItem', () => {

	test('getItem returnerar false om giltigt ID inte finns i cart', () => {
		const itemId = 0 //ID som ej finns i cart
		const actual = getItem(itemId)
		expect(actual).toBe(false)
	})

	test('getItem returnerar objektet om id finns i cart', () => {
    const item = { id: 1002, name: 'Vattenpistol', price: 40 }
    addToCart(item)
    const actual = getItem(1002)
    expect(actual).toEqual(item)
	})
})

describe('getTotalCartValue', () => {

    test('getTotalCartValue returnerar 0 om kundvagnen är tom', () => {
        const actual = getTotalCartValue()
        const expected = 0
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
	
	test('removeFromCart returnerar null om produkten inte finns i kundvagnen', () => {
		const itemId = 1001
		const result = removeFromCart(itemId)
		const expected = null
		expect(result).toBe(expected)

	})

	test('removeFromCart returnerar true om man tar bort en produkt från kundvagnen', ()  => {	
    const item = exampleProduct
    addToCart(item) 
    const actual = removeFromCart(item.id)
	const expected = true 
    expect(actual).toBe(expected)
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