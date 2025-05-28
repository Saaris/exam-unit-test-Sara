// importera här
import { clearCart, addToCart, getCartItemCount, getItem, getTotalCartValue, removeFromCart } from "../cart"




// describe('Cart', () => {
// 	beforeEach(() => {
// 		// Denna kod körs före varje test. Det är för att rensa kundvagnen, så inte saker ligger kvar från föregående test.
// 		clearCart()

// 		})
		
// })

	// -------------------------------------------------- //
	// Skriv dina testfall här

	// Du får ett test att börja med
describe('addToCart', () => {

	test('addToCart lägger till en ny produkt i kundvagnen', () => {
		const itemCountBefore = getCartItemCount()
		const input = { id: 1002, name: 'Vattenpistol', price: 40 }

		// addToCart returnerar inget - den påverkar kundvagnen
		// vi behöver använda getCartItemCount för att se om det har lagts till en ny produkt i kundvagnen
		addToCart(input)
		const itemCountAfter = getCartItemCount()

		expect(itemCountAfter).toBe(itemCountBefore + 1)
	})

	test('addToCart returnerar false om produkten inte är giltig', () => {
    const input = { id: 1002, name: 'Vattenpistol' } 
    const result = addToCart(input)
    expect(result).toBe(false)
	})
})

describe('getCartItemCount', () => {
	beforeEach(() => {
		clearCart()
	})

	test('getCartItemCount returnernar antalet produkter i kundvagnen', () => {
		const item1 = { id: 1002, name: 'Vattenpistol', price: 40 }
		const item2 = { id: 1003, name: 'Badanka', price: 50 }
		addToCart(item1)
		addToCart(item2)
		const actual = getCartItemCount()
		const expected = 2
		expect(actual).toBe(expected)
		
	})
})

describe('getItem', () => {

	test('getItem returnerar false om id inte finns i cart', () => {
		const itemId = 0
		const actual = getItem(itemId)
		expect(actual).toBe(false)
	})
})

describe('getTotalCartValue', () => {

    beforeEach(() => {
        clearCart()
    })

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

describe('removeFromCart tar bort en produkt från kundvagnen', () => {
	
	test('removeFromCart returnerar null om produkten inte finns i kundvagnen', () => {
		const itemId = 1001
		const result = removeFromCart(itemId)
		const expected = null
		expect(result).toBe(expected)

	})


		
})	// -------------------------------------------------- //