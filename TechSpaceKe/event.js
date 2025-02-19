document.addEventListener('DOMContentLoaded', function() {
    // Getting form elements
    const form = document.getElementById('myForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const submit = document.getElementById('submit');

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        let isValid = true;
        
        // Validate Name
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        // Validate Email
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required';
            isValid = false;
        } else if (!validateEmail(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        // If all inputs are valid
        if (isValid) {
            alert('Form Submitted Successfully!');
            form.reset(); 
        }
    }); 

    // Image Slider
    let slides = document.querySelectorAll('.slide');
    let index = 0;

    function showSlide() {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    document.querySelector('.next').addEventListener('click', () => {
        index = (index + 1) % slides.length;
        showSlide();
    });

    document.querySelector('.prev').addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        showSlide();
    });

    // Auto Slide Every 3 Seconds
    setInterval(() => {
        index = (index + 1) % slides.length;
        showSlide();
    }, 3000);
}); // End of DOMContentLoaded

