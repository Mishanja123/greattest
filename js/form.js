function validateName() {
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    const nameRegex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;

    if (nameInput.value.trim() === '' || !nameRegex.test(nameInput.value)) {
        nameError.textContent = 'Please enter your first name.';
        return false;
    } else {
        nameError.textContent = '';
        return true;
    }
};

function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        return false;
    } else {
        emailError.textContent = '';
        return true;
    }
};

function submitForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    if (validateName() && validateEmail() && document.getElementById('allowProcessing').checked) {
        let name = nameInput.value
        let email = emailInput.value
        displayAlertModal('Form submited successfuly!', name, email );
        document.getElementById('myForm').reset();
        document.getElementById('submitBtn').disabled = true;
    }
};

document.getElementById('name').addEventListener('input', function () {
    validateName();
    checkSubmitButton();
});

document.getElementById('email').addEventListener('input', function () {
    validateEmail();
    checkSubmitButton();
});

document.getElementById('allowProcessing').addEventListener('change', function () {
    checkSubmitButton();
});

function checkSubmitButton() {
    const nameValid = validateName();
    const emailValid = validateEmail();
    const checkboxChecked = document.getElementById('allowProcessing').checked;

    document.getElementById('submitBtn').disabled = !(nameValid && emailValid && checkboxChecked);
};
