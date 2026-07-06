// ===============================
// Contact Form Validation
// ===============================

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // Check empty fields
        if (name === "" || email === "" || phone === "" || subject === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Phone validation
        const phonePattern = /^[0-9]{10}$/;

        if (!phonePattern.test(phone)) {
            alert("Phone number must contain exactly 10 digits.");
            return;
        }

        alert("Thank you! Your message has been sent successfully.");

        form.reset();

    });

}