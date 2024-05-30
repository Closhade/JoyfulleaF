const botToken = '7459974548:AAHWT5V__M1LGHauDtFxf3Q0-c5Bx8ndaHQ'; // токен вашего бота
const chatId = '@Closhade'; // ваш Telegram username

function addToCart(item) {
    const cartItems = document.getElementById('cart-items');
    const itemElement = document.createElement('p');
    itemElement.textContent = `${item} добавлен в корзину`;
    cartItems.appendChild(itemElement);
}

function sendOrderNotification() {
    const items = Array.from(document.getElementById('cart-items').children)
        .map(item => item.textContent)
        .join(', ');
    
    const message = `Новый заказ: ${items}`;
    
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    });
}

function checkout() {
    sendOrderNotification();
    alert('Ваш заказ принят! Мы свяжемся с вами для подтверждения.');
    document.getElementById('cart-items').innerHTML = '';
}

Telegram.WebApp.ready();
