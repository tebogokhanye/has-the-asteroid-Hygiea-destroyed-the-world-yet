document.addEventListener('DOMContentLoaded', function () {
  
    setTimeout(function () {
        const statusElement = document.getElementById('status');
        const statusOptions = ['Nope', 'Not Yet', 'Phew! No', 'Thankfully No', 'Negative'];

        const randomStatus = statusOptions[Math.floor(Math.random() * statusOptions.length)];

        statusElement.textContent = `Status: ${randomStatus}`;
    }, 2000); 
});
