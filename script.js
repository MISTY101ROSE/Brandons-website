let slideIndex = 0;
const slides = document.querySelector('.slides');

function showSlides() {
    const totalSlides = slides.children.length;
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    slideIndex = (slideIndex + 1) % totalSlides;
}

function nextSlide() {
    const totalSlides = slides.children.length;
    slideIndex = (slideIndex + 1) % totalSlides;
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function prevSlide() {
    const totalSlides = slides.children.length;
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

setInterval(showSlides, 2000);


document.addEventListener('DOMContentLoaded', () => {
    const teamMembers = document.querySelectorAll('.team-member img');

    teamMembers.forEach(member => {
        member.addEventListener('click', () => {
            alert(`You clicked on ${member.alt}`);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('booking-modal');
    const closeModal = document.getElementsByClassName('close')[0];
    const bookNowButtons = document.querySelectorAll('.book-now');
    const propertyInput = document.getElementById('property');
    const bookingForm = document.getElementById('booking-form');

    bookNowButtons.forEach(button => {
        button.addEventListener('click', () => {
            const propertyName = button.getAttribute('data-property');
            propertyInput.value = propertyName;
            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Booking submitted successfully!');
        modal.style.display = 'none';
        bookingForm.reset();
    });
    
});
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Extract form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Basic validation
        if (name && email && subject && message) {
            alert('Thank you for your message. We will get back to you soon!');
            contactForm.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    console.log("Contact Us page loaded");
});