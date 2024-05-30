const botToken = '7466941934:AAHmFBQ-JijsQ6xhpqdZEWdeJJf8SihzQKw'; // токен вашего нового бота
const chatId = '431419402'; // ваш Telegram user ID

function addToCart(item) {
    const cartItems = document.getElementById('cart-items');
    const itemElement = document.createElement('p');
    itemElement.textContent = `${item} добавлен в корзину`;
    cartItems.appendChild(itemElement);
}

function sendOrderNotification(contactInfo) {
    const items = Array.from(document.getElementById('cart-items').children)
        .map(item => item.textContent)
        .join(', ');

    const message = `Новый заказ от ${contactInfo}: ${items}`;
    
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
            console.error('Ошибка при отправке сообщения:', data);
            alert('Ошибка при отправке сообщения: ' + JSON.stringify(data));
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Ошибка: ' + error);
    });
}

function checkout() {
    const contactInfo = document.getElementById('contact-info').value;
    if (!contactInfo) {
        alert('Пожалуйста, введите ваш контактный номер');
        return;
    }
    sendOrderNotification(contactInfo);
    alert('Ваш заказ принят! Мы свяжемся с вами для подтверждения.');
    document.getElementById('cart-items').innerHTML = '';
    document.getElementById('contact-info').value = '';
}

Telegram.WebApp.ready();
