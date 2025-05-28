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

	test('isProduct returnerar false om det inte är ett giltigt egenskap i objekt', () => {
		const invalidObject = [
		[{}],
		[{id: 1001, name: 123, price: 500}],
		[{id: null, name: 'Badanka', price: 500 }],
		[{id: 1001, name: 'Badanka', price:'500'}],
		[{id: '1001', name: 'Badanka', price: 500}],
		]

		const input = invalidObject 
		const expected = false 
		const actual = isProduct(input)
		expect(actual).toBe(expected)
	
	})
	

	test('isCartItem returnerar true för ett giltigt cart objekt', () => {
		const input = exampleCartObject
		const expected = true
		const actual = isCartItem(input)
		expect(actual).toBe(expected)
		
	})
 
		const invalidCartObject1 = 
			[
			[false, 'inte ett objekt'],
			[false, null]
			]

	test.each(invalidCartObject1)('om isCartItem inte är ett objekt, returnera false', (expected, input) => {
		const actual = isCartItem(input)
		expect(actual).toBe(expected)
	})

	const invalidCartObject2 = [
		[{}],
	
		[{
			id: 2001,
			amount: 1,
			item: null
		}],

		[{ 
			id: "2001",
			amount: 1,
			item: exampleProduct
		}],

		[{ 
			id: 2001,
			amount: "1",
			item: exampleProduct
		}],
	]
	test.each(invalidCartObject2)('om isCartItem är ett objekt, men inte har en giltig property, returnera false', (input) => {
		expect( isCartItem (input) ).toBe(false)
	})
	
})
