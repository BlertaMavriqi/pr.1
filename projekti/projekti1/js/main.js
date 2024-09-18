$(document).ready(function() {
    // Filtrimi i produkteve
    $('a[href="#home"]').click(function() {
        $('.product').show();
    });

    $('a[href="#makeup"]').click(function() {
        $('.product').hide();
        $('.makeup').show();
    });

    $('a[href="#Skincare"]').click(function() {
        $('.product').hide();
        $('.skincare').show();
    });

    // Formulari i news
    $('#news-form').on('submit', function(e) {
        e.preventDefault();
        var email = $('#email').val();
        if (email) {
            $('#success-message').text("Thank you for signing up, " + email + "!").fadeIn();
            $('#email').val('');
        }
    });

    // Shporta
    const cart = [];
    let totalPrice = 0;

    function addToCart(name, price) {
        cart.push({ name, price });
        totalPrice += parseFloat(price);
        alert(name + " has been added to your cart!");
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const name = this.getAttribute('data-name');
            const price = this.getAttribute('data-price');
            addToCart(name, price);
        });
    });

    const cartLink = document.getElementById('cart-link');
    const cartModal = document.getElementById('cart-modal');
    const closeModal = document.getElementsByClassName('close')[0];
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    cartLink.addEventListener('click', function() {
        cartItems.innerHTML = '';

        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.name + " - €" + item.price;
            cartItems.appendChild(li);
        });

        totalPriceElement.textContent = totalPrice.toFixed(2);

        cartModal.style.display = "block";
    });

    closeModal.addEventListener('click', function() {
        cartModal.style.display = "none";
    });

    window.addEventListener('click', function(event) {
        if (event.target == cartModal) {
            cartModal.style.display = "none";
        }
    });

    document.getElementById('checkout-btn').addEventListener('click', function() {
        alert('Proceeding to checkout...');
    });
});
