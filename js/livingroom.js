        // Get all the "Add to cart" buttons
        const addToCartButtons = document.querySelectorAll('.cart-button');

        // Add event listener to each button
        addToCartButtons.forEach(button => {
            button.addEventListener('click', addToCart);
        });

        // Cart items and total price
        let cartItems = [];
        let totalPrice = 0;

        // Get the cart UI elements
        const cartItemsContainer = document.getElementById('cart-items');
        const totalPriceElement = document.getElementById('total-price');

        // Function to handle adding an item to the cart
        function addToCart() {
            // Get the product details
            const section = this.parentNode.parentNode;
            const image = section.querySelector('img').src;
            const name = section.querySelector('h2').textContent;
            const price = parseInt(section.querySelector('h3').textContent.slice(1));

            // Create a new item object
            const item = {
                image,
                name,
                price
            };

            // Add the item to the cart
            cartItems.push(item);

            // Calculate the total price
            totalPrice += price;

            // Update the UI
            displayCartItems();
            updateTotalPrice();

            // Show a confirmation message
            console.log(`${name} added to cart!`);
        }

        // Function to remove an item from the cart
        function removeFromCart(index) {
            // Get the item to be removed
            const item = cartItems[index];

            // Subtract the item price from the total price
            totalPrice -= item.price;

            // Remove the item from the cart
            cartItems.splice(index, 1);

            // Update the UI
            displayCartItems();
            updateTotalPrice();

            // Show a confirmation message
            console.log(`${item.name} removed from cart!`);
        }

        // Function to display the cart items in the UI
        function displayCartItems() {
            // Clear the cart items container
            cartItemsContainer.innerHTML = '';

            // Loop through the cart items and create list items to display them
            cartItems.forEach((item, index) => {
                const listItem = document.createElement('li');
                const imageElement = document.createElement('img');
                const nameElement = document.createElement('span');
                const priceElement = document.createElement('span');
                const removeButton = document.createElement('button');

                imageElement.src = item.image;
                nameElement.textContent = item.name;
                priceElement.textContent = ' P' + item.price;
                removeButton.textContent = 'Remove';
                removeButton.addEventListener('click', () => removeFromCart(index));

                listItem.appendChild(imageElement);
                listItem.appendChild(nameElement);
                listItem.appendChild(priceElement);
                listItem.appendChild(removeButton);

                cartItemsContainer.appendChild(listItem);
            });
        }

        // Function to update the total price in the UI
        function updateTotalPrice() {
            totalPriceElement.textContent = totalPrice;
        }
        function checkout() {
            // Perform checkout logic here...
            // You can access the cart items using the 'cart' array.
            // Example: cart[0], cart[1], ...

            alert("Checkout complete!");
            cart = []; // Clear the cart
            updateCartUI();
}