function calculateVAT() {
    const totalAmount = parseFloat(document.getElementById("totalAmount").value) || 0;
    const vatRate = parseFloat(document.getElementById("vatRate").value) || 0;
    const quantity = parseInt(document.getElementById("quantity").value) || 1;

    // Calculating VAT and base amounts
    const baseAmount = totalAmount / (1 + vatRate / 100);
    const vatAmount = totalAmount - baseAmount;
    const unitPrice = baseAmount / quantity;

    // Display results
    document.getElementById("vatAmount").textContent = vatAmount.toFixed(2);
    document.getElementById("baseAmount").textContent = baseAmount.toFixed(2);
    document.getElementById("unitPrice").textContent = unitPrice.toFixed(2);
}

// Carousel functionality
let currentSlide = 0;
function showNextSlide() {
    const slides = document.querySelectorAll(".carousel-item");
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
}
setInterval(showNextSlide, 3000);
