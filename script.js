function addToCart(item) {
    const cartItems = document.getElementById('cart-items');
    const itemElement = document.createElement('p');
    itemElement.textContent = `${item} добавлен в корзину`;
    cartItems.appendChild(itemElement);
}

function checkout() {
    alert('Ваш заказ принят! Мы свяжемся с вами для подтверждения.');
    document.getElementById('cart-items').innerHTML = '';
}

Telegram.WebApp.ready();