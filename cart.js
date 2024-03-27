const cart = [];
let total = 0;

function addToCart(itemName, price) {
    cart.push({ itemName, price });
    total += price;

    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    
    cartItemsElement.innerHTML = '';
    cart.forEach(item => {
        const itemElement = document.createElement('p');
        itemElement.innerText = `${item.itemName}: ${item.price}р`;
        cartItemsElement.appendChild(itemElement);
    });

    totalElement.innerText = `${total}р`;
}