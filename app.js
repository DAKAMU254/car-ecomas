document.addEventListener("DOMContentLoaded", () => {
    // Color selection functionality
    const colors = document.querySelectorAll('.colors span');
    const productImage = document.querySelector('.product-image');
    const priceDisplay = document.querySelector('.new-price');
    const oldPriceDisplay = document.querySelector('.old-price');
  
    // Updated image paths
    const carImages = {
      red: './images/red1.png',
      gray: './images/gray1.png',
      black: './images/black1.png'
    };
  
    const prices = {
      red: { newPrice: 134450, oldPrice: 148500 },
      gray: { newPrice: 134450, oldPrice: 148500 },
      black: { newPrice: 137450, oldPrice: 152000 } // Example price change
    };
  
    colors.forEach(color => {
      color.addEventListener('click', (e) => {
        const selectedColor = e.target.classList[0]; // red, gray, or black
        productImage.innerHTML = `<img src="${carImages[selectedColor]}" alt="${selectedColor} Mercedes Benz" />`;
  
        // Update prices
        const selectedPrice = prices[selectedColor];
        priceDisplay.textContent = `$${selectedPrice.newPrice.toLocaleString()}`;
        oldPriceDisplay.textContent = `$${selectedPrice.oldPrice.toLocaleString()}`;
      });
    });
  
    // Add to Cart functionality
    const addToCartBtn = document.getElementById('button');
    const feedbackMessage = document.querySelector('.feedback');
  
    addToCartBtn.addEventListener('click', () => {
      feedbackMessage.style.display = 'block';
      feedbackMessage.innerHTML = '<span id="white-button">🥳 Woohoo, You\'re about to own a Benz 🚗</span>';
  
      setTimeout(() => {
        feedbackMessage.style.display = 'none';
      }, 3000); // Hide message after 3 seconds
    });
  });
  