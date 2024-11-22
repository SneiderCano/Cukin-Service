const menuData = {

    hamburguesas: [
        {name: 'Hamburguesa carne y queso', price:12000,img:'Imagenes/hamburguesa carne y queso.png' },

        {name:'Hamburguesa mixta',price:18000,img:'Imagenes/hamburguesa mixta.png'},

        {name:'Hamburguesa pollo y queso',price:14000,img:'Imagenes/hamburguesa pollo y queso.png'},

        {name:'Hamburguesa Vegana',price:15000,img:'Imagenes/hamburguesa vegana.png'},
    ],

    perritos: [
        {name:'Perro con carne desmechada',price:12000,img:'Imagenes/perro con carne desmechada.png'},

        {name:'Perro con maicitos',price:11000,img:'Imagenes/perro con maicitos.png'},

        {name:'Perro gratinado',price:10000,img:'Imagenes/perro gratinado.png'},

        {name:'perro sencillo', price: 9000,img:'Imagenes/perro sencillo.png'},

        {name:'perro vegano',price:14000,img:'Imagenes/perro vegano.png'},
    ],

    pizzas: [
        {name:'pizza hawaiana',price:8000,img:'Imagenes/pizza hawaiana.png'},

        {name:'pizza mixta',price:9000,img:'Imagenes/pizza mixta.png'},

        {name:'pizza peperoni',price:10000,img:'Imagenes/pizza peperoni.png'},

        {name:'pizza pollo champiñon',price:11000,img:'Imagenes/pizza pollo champoñon.png'},

        {name:'pizza vegana',price:14000,img:'Imagenes/pizza vegana.png'},
    ],

    lasaña: [
        {name:'lasaña carne y pollo',price:15000,img:'Imagenes/lasaña carne y pollo.png'},
        
        {name:'lasaña carne',price:12000,img:'Imagenes/lasaña carne.png'},

        {name:'lasaña pollo',price:12000,img:'Imagenes/lasaña pollo.png'},

        {name:'lasaña vegetariana',price:14000,img:'Imagenes/lasaña vegetariana.png'},
    ],

    gaseosas: [
        {name:'gaseosa personal',price:2000,img:'Imagenes/gaseosa personal.png'},

        {name:'gaseosa litro',price:6000,img:'Imagenes/gaseosa litro.png'},

        {name:'gaseosa 2litros',price:9000,img:'Imagenes/gaseosa 2litros.png'},

        {name:'gaseosa 3litros',price:12000,img:'Imagenes/gaseosa 3litros.png'},
    ],

    asados: [
        {name:'carne asada',price:13000,img:'Imagenes/asada carne.png'},

        {name:'costilla asada',price:15000,img:'Imagenes/asada costilla.png'},

        {name:'cerdo asado',price:14000,img:'Imagenes/asado cerdo.png'},

        {name:'pollo a la plancha',price:13000,img:'Imagenes/asado pollo.png'},

    ],

    chuzos: [
        {name:'chuzo de carne',price:8000,img:'Imagenes/chuzo de carne.png'},

        {name:'chuzo de pollo',price:8000,img:'Imagenes/chuzo de pollo.png'},

        {name:'chuzo vegetariano',price:13000,img:'Imagenes/chuzo vegetariano.png'},

        {name:'chuzo de costilla',price:16000,img:'Imagenes/chuzos costilla.png'},

        {name:'chuzo mixto',price:18000,img:'Imagenes/Chuzos mixtos.png'},
    ],

    helados: [
        {name:'healdo artesanal',price:3000,img:'Imagenes/Helado artesanal.png'},

        {name:'helado banana split',price:14000,img:'Imagenes/helado banan split.png'},

        {name:'helado en cono',price:2000,img:'Imagenes/Helado en cono.png'},

        {name:'helado en paleta',price:3000,img:'Imagenes/helado en paleta.png'},

        {name:'helado en vaso',price:4000,img:'Imagenes/helado en vaso.png'},

        {name:'Helado ensalada de frutas',price:15000,img:'Imagenes/helado Ensalada de frutas.png'},

    ],
};


// Función para cargar la categoría seleccionada
function loadCategory(categoria) {
    const menuItemsDiv = document.getElementById('menuItems');
    const mainMenuDiv = document.getElementById('mainMenu');
    const backButton = document.getElementById('backButton');

    // Limpia el contenido existente
    menuItemsDiv.innerHTML = '';

    // Obtiene los ítems de la categoría seleccionada
    const items = menuData[categoria];

    // Verifica si hay ítems en la categoría
    if (items) {
        items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('menu-item');

            const img = document.createElement('img');
            img.src = item.img;
            img.alt = item.name;

            const name = document.createElement('p');
            name.textContent = item.name;

            const price = document.createElement('p');
            price.textContent = `$${item.price}`;
            price.classList.add('price');

            const addButton = document.createElement('button');
            addButton.textContent = 'Añadir al carrito';
            addButton.classList.add('add-button');
            addButton.onclick = () => addToCart(item);

            itemDiv.appendChild(img);
            itemDiv.appendChild(name);
            itemDiv.appendChild(price);
            itemDiv.appendChild(addButton);

            menuItemsDiv.appendChild(itemDiv);
        });
    } else {
        menuItemsDiv.innerHTML = "<p>No hay elementos disponibles en esta categoría</p>";
    }

    // Muestra los ítems de la categoría y oculta el menú principal
    menuItemsDiv.style.display = 'flex';
    mainMenuDiv.style.display = 'none';
    backButton.style.display = 'block';
}

// Función para agregar un ítem al carrito
function addToCart(item) {
    cart.push(item); //añade el producto al carrito de compras
    updateCart(); // Actualiza el carrito de compra con el producto seleccionado
}

// Función para eliminar un ítem del carrito
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Función para actualizar el carrito, agregar nombre y precio
function updateCart() {
    const cartItemsDiv = document.getElementById('cartItems');
    const cartTotalSpan = document.getElementById('cartTotal');
    cartItemsDiv.innerHTML = ''; 
    let total = 0;

    cart.forEach((item, index) => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');

        const name = document.createElement('span');
        name.textContent = item.name;

        const price = document.createElement('span');
        price.textContent = `$${item.price}`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.classList.add('remove-item');
        removeButton.onclick = () => removeFromCart(index);

        cartItemDiv.appendChild(name);
        cartItemDiv.appendChild(price);
        cartItemDiv.appendChild(removeButton);

        cartItemsDiv.appendChild(cartItemDiv);

        total += item.price;
    });

    cartTotalSpan . textContent = total;
}

// Carrito de compras
let cart = [];

// Función para regresar al menú principal
function showMainMenu() {
    document.getElementById('mainMenu').style.display = 'grid';
    document.getElementById('menuItems').style.display = 'none';
    document.getElementById('backButton').style.display = 'none';
}

// Función para realizar el pedido
function checkout() {
    alert('Gracias por tu compra!');
    cart = [];
    updateCart(); 
}