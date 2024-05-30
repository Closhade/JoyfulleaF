const botToken = '7466941934:AAHmFBQ-JijsQ6xhpqdZEWdeJJf8SihzQKw'; // токен вашего нового бота
const chatId = '@Closhade'; // ваш Telegram user ID

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
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            console.log('Сообщение успешно отправлено');
        } else {
            console.error('Ошибка при отправке сообщения', data);
        }
    })
    .catch(error => console.error('Ошибка:', error));
}

function checkout() {
    sendOrderNotification();
    alert('Ваш заказ принят! Мы свяжемся с вами для подтверждения.');
    document.getElementById('cart-items').innerHTML = '';
}

Telegram.WebApp.ready();
