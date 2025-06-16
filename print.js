document.addEventListener('DOMContentLoaded', function() {
    const data = JSON.parse(localStorage.getItem('bookingData'));

    if (data) {
        document.getElementById('car-model').textContent = data.carModel;
        document.getElementById('pickup-date').textContent = data.pickupDate;
        document.getElementById('dropoff-date').textContent = data.dropoffDate;
        document.getElementById('pickup-location').textContent = data.pickupLocation;
        document.getElementById('dropoff-location').textContent = data.dropoffLocation;
        document.getElementById('customer-name').textContent = data.customerName;
        document.getElementById('customer-email').textContent = data.customerEmail;
        document.getElementById('customer-phone').textContent = data.customerPhone;
        

        localStorage.removeItem('bookingData');
    }
});
