const products = [
    { id: 1, name: 'Malboro', price: 75 },
    { id: 2, name: 'Barrilito', price: 60 },
    { id: 3, name: 'Bodka', price: 80 },
    { id: 4, name: 'Cocacola', price: 10 },
    { id: 5, name: 'Halls', price: 7 },
    { id: 6, name: 'Sabritas', price: 20 },
    { id: 7, name: 'Vasos desechables', price: 20 },
  ];
  
  let cart = [];
  
  function displayCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '<h2></h2>';
  
    let totalPrice = 0;  // Variable para almacenar el total a pagar
  
    if (cart.length === 0) {
      cartContainer.innerHTML += '<p>Carrito comprado con exito.</p>';
    } else {
      for (const product of cart) {
        const productInfo = document.createElement('div');
        productInfo.className = 'product-info';
        productInfo.innerHTML = `
          <img src="imagenes/product${product.id}.jpg" alt="${product.name}" width="100" height="100">
          <p>ID: ${product.id}</p>
          <p>Nombre: ${product.name}</p>
          <p>Precio: $${product.price}</p>
          <button class="button remove-button" onclick="removeFromCart(${product.id})">Eliminar del carrito</button>
        `;
        cartContainer.appendChild(productInfo);
  
        totalPrice += product.price;  // Suma el precio de cada producto al total
      }
    }
  
    // Mostrar el total a pagar
    cartContainer.innerHTML += `<p>Total a pagar: $${totalPrice}</p>`;
  }
  
  function buy() {
    cart = [];
    displayCart();
  }
  
  // Resto del código...
  
  
  
  function removeFromCart(productId) {
    const index = cart.findIndex(product => product.id === productId);
    if (index !== -1) {
      cart.splice(index, 1);
      displayCart();
    } else {
      console.log('Producto no encontrado en el carrito.');
    }
  }
  
  function addToCart(productId) {
    const product = products.find(product => product.id === productId);
    if (product) {
      cart.push(product);
      displayCart();
      console.log(`Producto "${product.name}" agregado al carrito.`);
    } else {
      console.log('Producto no encontrado.');
    }
  }
  
  function displayProducts() {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '<h2></h2>';
  
    for (const product of products) {
      const productDiv = document.createElement('div');
      productDiv.className = 'product';
      productDiv.innerHTML = `
        <img src="imagenes/product${product.id}.jpg" alt="${product.name}" width="100" height="100">
        <p>${product.name}</p>
        <p>Precio: $${product.price}</p>
        <button class="button buy-button" onclick="addToCart(${product.id})">Agregar al carrito</button>
      `;
      productsContainer.appendChild(productDiv);
    }
  }
  
  // Llama a la función para mostrar los productos al cargar la página
  window.onload = function() {
    displayProducts();
  };