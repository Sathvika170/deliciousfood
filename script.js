document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var guests = document.getElementById('guests').value;

    if (!name || !email || !phone || !date || !time || !guests) {
        displayMessage('All fields are required.');
        return;
    }

    if (!validateEmail(email)) {
        displayMessage('Please enter a valid email address.');
        return;
    }

    if (!validatePhone(phone)) {
        displayMessage('Please enter a valid phone number.');
        return;
    }

    displayMessage('Table booked successfully!', true);
});

function displayMessage(message, success = false) {
    var messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.style.color = success ? 'green' : 'red';
}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    var re = /^\d{10}$/;
    return re.test(phone);
}
