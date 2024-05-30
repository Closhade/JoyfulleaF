@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
    font-family: 'Roboto', sans-serif;
    background-color: #f8f9fa;
    margin: 0;
    padding: 0;
}

header {
    background-color: #343a40;
    color: white;
    padding: 15px 0;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
}

main {
    padding: 20px;
}

.contact-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.contact-input {
    padding: 10px;
    font-size: 16px;
    border: 2px solid #343a40;
    border-radius: 5px;
    width: 300px;
}

.contact-input:focus {
    outline: none;
    border-color: #007bff;
}

.section-title {
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 30px;
    font-size: 24px;
}

section {
    margin-bottom: 20px;
}

#products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}

.product {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 15px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    position: relative;
}

.product img {
    max-width: 100%;
    height: auto;
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
}

.product h3 {
    font-size: 18px;
    margin: 10px 0;
}

.product p {
    font-size: 16px;
    color: #28a745;
    margin-bottom: 15px;
}

button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #0056b3;
}

.checkout-button {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 15px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    font-size: 16px;
    transition: background-color 0.3s;
}

.checkout-button:hover {
    background-color: #218838;
}

#cart-items {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 15px;
    min-height: 50px;
}

/* Стили для модального окна */
.modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
    padding-top: 60px;
}

.modal-content {
    background-color: #fefefe;
    margin: 5% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 500px;
    border-radius: 10px;
    text-align: center;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}
