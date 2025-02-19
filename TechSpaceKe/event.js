document.addEventListener("DOMContentLoaded", function () {
        const slides = document.querySelectorAll(".slide");
        const nextBtn = document.querySelector(".next");
        const prevBtn = document.querySelector(".prev");
        let index = 0;
        let slideInterval;
    
        function showSlide(newIndex) {
            slides.forEach((slide, i) => {
                slide.classList.remove("active");
                slide.style.display = (i === newIndex) ? "block" : "none";
            });
            index = newIndex;
        }
    
        function nextSlide() {
            index = (index + 1) % slides.length;
            showSlide(index);
        }
    
        function prevSlide() {
            index = (index - 1 + slides.length) % slides.length;
            showSlide(index);
        }
    
        function startAutoSlide() {
            stopAutoSlide(); 
            slideInterval = setInterval(nextSlide, 3000);
        }
    
        function stopAutoSlide() {
            clearInterval(slideInterval);
        }
    
        
        if (slides.length > 0) {
            showSlide(index); 
    
            if (nextBtn) {
                nextBtn.addEventListener("click", () => {
                    nextSlide();
                    startAutoSlide(); 
                });
            }
    
            if (prevBtn) {
                prevBtn.addEventListener("click", () => {
                    prevSlide();
                    startAutoSlide(); 
                });
            }
    
            
            startAutoSlide();
    
            
            document.querySelector(".slider-container").addEventListener("mouseenter", stopAutoSlide);
            document.querySelector(".slider-container").addEventListener("mouseleave", startAutoSlide);
        }
    

    // Form validation
    const form = document.getElementById('myForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;

        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required';
            isValid = false;
        } else if (!validateEmail(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        if (isValid) {
            alert('Form Submitted Successfully!');
            form.reset();
        }
    });

    
    
    
});
