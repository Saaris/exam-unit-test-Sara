
import { isCartItem, isProduct } from "../validation.js"

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
describe('Validering för cart och produkt', () => {
	
	test('Om isProduct är en giltig produkt returnera true', () => {
		const validProduct = exampleProduct
		const expected = true
		const actual = isProduct(validProduct)
		expect (actual).toBe(expected)
	})
	
	const invalidProducts = 
	[
		{}, 
		{ id: 1001, name: 123, price: 500 },
		{ id: null, name: 'Badanka', price: 500 }, 
		{ id: 1001, name: 'Badanka', price: '500' },
		{ id: '1001', name: 'Badanka', price: 500 }, 
	]
	
	test.each(invalidProducts)('isProduct returnerar false för ogiltigt produkt-objekt: %p', (input) => {
		const expected = false
		const actual = isProduct(input)
		expect(actual).toBe(expected)
	})
	
	
	test('isCartItem returnerar true för ett giltigt cart objekt', () => {
		const expected = true
		const actual =  isCartItem(exampleCartObject)
		expect(actual).toBe(expected)
		
	})
	
	const invalidCartObjects = 
	[
		false,
		null,
		{},
		{ id: 2001, amount: 1, item: null }, 
		{ id: "2001", amount: 1, item: exampleProduct },
		{ id: 2001, amount: "1", item: exampleProduct }, 
	]
	
	test.each(invalidCartObjects)('isCartItem returnerar false för ogiltigt cart-objekt: %p', (input) => {
		const expected = false
		const actual = isCartItem(input)
		expect(actual).toBe(expected)
	})
	
})
