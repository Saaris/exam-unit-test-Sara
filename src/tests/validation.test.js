import { isCartItem, isProduct } from "../validation.js"
// Examples of a valid product and a valid cart item. You may use these when testing below.
const exampleProduct = {
	id: 1001,
	name: 'Badanka',
	price: 500
}

const exampleCartObject = {
	id: 2001,
	amount: 1,
	item: exampleProduct
}

// Group tests using "describe"
describe('Validation', () => {

	test('isProduct returnerar true för en giltig produkt', () => {
		expect(isProduct(exampleProduct)).toBe(true)
	})

	test('isProduct returnerar false för en ogiltig produkt', () => {
		const invalidProduct = { id: "fel", name: 123, price: "dyrt" }
		expect(isProduct(invalidProduct)).toBe(false)
	})

	test('isCartItem returnerar true för ett giltigt cart-objekt', () => {
		expect(isCartItem(exampleCartObject)).toBe(true)
	})

	test('isCartItem returnerar false för ett ogiltigt cart-objekt', () => {
		const invalidCartItem = { id: 1, amount: "en", item: {} }
		expect(isCartItem(invalidCartItem)).toBe(false)
	})
})
