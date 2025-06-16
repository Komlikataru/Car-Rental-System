document.getElementById('print-button').addEventListener('click', function() {
    const form = document.getElementById('booking-form');

    const data = {
        carModel: form.querySelector('#car-model').value,
        pickupDate: form.querySelector('#pickup-date').value,
        dropoffDate: form.querySelector('#dropoff-date').value,
        pickupLocation: form.querySelector('#pickup-location').value,
        dropoffLocation: form.querySelector('#dropoff-location').value,
        customerName: form.querySelector('#customer-name').value,
        customerEmail: form.querySelector('#customer-email').value,
        customerPhone: form.querySelector('#customer-phone').value,
    };

    localStorage.setItem('bookingData', JSON.stringify(data));

    window.location.href = 'print.html';
});
