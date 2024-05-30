const botToken = '7466941934:AAHmFBQ-JijsQ6xhpqdZEWdeJJf8SihzQKw'; // токен вашего бота для уведомлений
const chatId = '431419402'; // ваш Telegram user ID

Telegram.WebApp.ready();

function addToCart(item, price, event) {
    event.stopPropagation();
    const cartItems = document.getElementById('cart-items');
    const itemElement = document.createElement('p');
    itemElement.textContent = `${item} - ${price} добавлен в корзину`;
    cartItems.appendChild(itemElement);
}

function sendOrderNotification(contactInfo) {
    const items = Array.from(document.getElementById('cart-items').children)
        .map(item => item.textContent)
        .join(', ');

    const message = `Новый заказ от ${contactInfo}: ${items}\n\nНаписать клиенту: https://t.me/${contactInfo}`;
    
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

function showProductDetails(title, description, imageUrl, price) {
    document.getElementById('product-modal-title').textContent = title;
    document.getElementById('product-modal-description').textContent = description;
    document.getElementById('product-modal-image').src = imageUrl;
    document.getElementById('product-modal-price').textContent = price;
    document.getElementById('product-modal').style.display = 'block';
    document.getElementById('product-modal-add-to-cart').onclick = function() {
        addToCart(title, price);
        closeProductDetails();
    };
}

function closeProductDetails() {
    document.getElementById('product-modal').style.display = 'none';
}

window.onload = function() {
    const user = Telegram.WebApp.initDataUnsafe.user;
    if (user && user.username) {
        document.getElementById('contact-info').value = user.username;
    }
};
