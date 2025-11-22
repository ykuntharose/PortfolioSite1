document.addEventListener('DOMContentLoaded', () => {
    // Update copyright year
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    console.log('Portfolio site loaded successfully.');
});
