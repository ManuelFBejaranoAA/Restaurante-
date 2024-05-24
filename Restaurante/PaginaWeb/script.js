const form = document.querySelector('form');
const cart = document.querySelector('#cart');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const menuItem = document.querySelector('#menu-item').value;
    const quantity = document.querySelector('#quantity').value;
    // Call GloriaFood's API to add item to cart
    fetch(`https://api.gloriafood.com/order/add-item`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            menuItem,
            quantity
        })
    })
    .then(response => response.json())
    .then(data => {
        // Update cart contents
        cart.innerHTML = `You have ${data.items.length} items in your cart.`;
    })
    .catch(error => console.error(error));
});

document.getElementById("submitBtn").addEventListener("click", function() {
    // Obtener los valores de usuario y contraseña del formulario
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Validar los datos (solo un ejemplo, puedes agregar tus propias condiciones de validación)
    if (username === "usuario" && password === "contraseña") {
      // Redireccionar a otra página si los datos son correctos
      window.location.href = "otra_pagina.html";
    } else {
      // Mostrar un mensaje de error o realizar alguna otra acción si los datos son incorrectos
      alert("Usuario o contraseña incorrectos");
    }
  });
  