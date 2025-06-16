document.addEventListener("DOMContentLoaded", function() {
    fetch('/api/user-info') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const userNameElement = document.getElementById('user-name');
            const userIconElement = document.getElementById('user-icon');

            if (data) {
                userNameElement.textContent = data.name || 'Guest';
                userIconElement.style.backgroundImage = `url(${data.icon})`;
            } else {
                userNameElement.textContent = 'Guest';
                userIconElement.style.backgroundImage = 'none';
            }
        })
        .catch(error => {
            console.error('Error fetching user info:', error);
         
        });
});
