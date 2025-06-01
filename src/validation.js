function isProduct(maybeProduct) {

        return (
        typeof maybeProduct === "object" &&
        maybeProduct !== null &&
        typeof maybeProduct.id === "number" &&
        typeof maybeProduct.name === "string" &&
        typeof maybeProduct.price === "number"
    )
}

function isCartItem(maybeCartItem) {

      return (
        typeof maybeCartItem === "object" &&
        maybeCartItem !== null &&
        typeof maybeCartItem.id === "number" &&
        typeof maybeCartItem.amount === "number" &&
        isProduct(maybeCartItem.item)
    )
}



export { isCartItem, isProduct }
