document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const floatingCartCount = document.getElementById('hit-count');
    let cartCount = 0;
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            floatingCartCount.textContent = cartCount;
        });
    });
});
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log("Button clicked!");
        cartCount++;
        floatingCartCount.textContent = cartCount;
    });
});

