function addToCart(productName, price) {
    alert(productName + ' added to cart!');
    // Add cart functionality here
}

function shareOnWhatsApp(event) {
    event.preventDefault();
    const productName = event.currentTarget.dataset.name;
    const price = event.currentTarget.dataset.price;
    const url = `https://wa.me/?text=${encodeURIComponent(`Check out this ${productName} for $${price}`)}`;
    window.open(url, '_blank');
}