// Array to keep track of products
const products = document.querySelectorAll('.product');
let currentIndex = 1;

// Function to update the carousel display
function updateCarousel() {
    products.forEach((product, index) => {
        product.classList.remove('center', 'left', 'right');
        product.style.opacity = '0.5';
        product.style.transform = 'scale(1)';
    });

    products[currentIndex].classList.add('center');
    products[currentIndex].style.opacity = '1';
    products[currentIndex].style.transform = 'scale(1.1)';

    products[(currentIndex - 1 + products.length) % products.length].classList.add('left');
    products[(currentIndex + 1) % products.length].classList.add('right');
}

// Event listeners for navigation
document.querySelector('.left-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + products.length) % products.length;
    updateCarousel();
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % products.length;
    updateCarousel();
});

// Initialize carousel
updateCarousel();

