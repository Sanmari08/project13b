const toggle = document.getElementById('toggle');
const body = document.body;

toggle.addEventListener('input', e => {
    const isChecked = e.target.checked;

    if (isChecked) {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
});

// script.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitButton = document.getElementById('submit-button');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateForm()) {
            displaySuccessMessage();
            form.reset();
        }
    });

    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    messageInput.addEventListener('input', validateMessage);

    function validateName() {
        if (nameInput.validity.valid) {
            nameInput.style.border = '1px solid #ccc';
            document.getElementById('name-error').style.display = 'none';
        } else {
            nameInput.style.border = '1px solid red';
            document.getElementById('name-error').style.display = 'block';
        }
        checkFormValidity();
    }

    function validateEmail() {
        if (emailInput.validity.valid) {
            emailInput.style.border = '1px solid #ccc';
            document.getElementById('email-error').style.display = 'none';
        } else {
            emailInput.style.border = '1px solid red';
            document.getElementById('email-error').style.display = 'block';
        }
        checkFormValidity();
    }

    function validateMessage() {
        if (messageInput.validity.valid) {
            messageInput.style.border = '1px solid #ccc';
            document.getElementById('message-error').style.display = 'none';
        } else {
            messageInput.style.border = '1px solid red';
            document.getElementById('message-error').style.display = 'block';
        }
        checkFormValidity();
    }

    function validateForm() {
        validateName();
        validateEmail();
        validateMessage();
        return form.checkValidity();
    }

    function checkFormValidity() {
        if (form.checkValidity()) {
            submitButton.removeAttribute('disabled');
        } else {
            submitButton.setAttribute('disabled', 'true');
        }
    }

    function displaySuccessMessage() {
        successMessage.style.display = 'block';
        successMessage.textContent = 'Form submitted successfully!';
    }
});

$(document).ready(function() {
    let correctAnswer = "Cascading Style Sheet";
    
    $(".option").click(function() {
        if (!$(this).hasClass("disabled")) {
            $(".option").addClass("disabled");
            if ($(this).text() === correctAnswer) {
                $(this).css("background-color", "green");
                $(".feedback").text("Correct! The answer is Cascading Style Sheet.");
            } else {
                $(this).css("background-color", "red");
                $(".feedback").text("Incorrect. The correct answer is Cascading Style Sheet.");
            }
        }
    });
});

