// Client-side JavaScript for Online Learning Platform

document.addEventListener('DOMContentLoaded', function() {
    console.log('Online Learning Platform loaded successfully');
    
    // Add any client-side functionality here
    const content = document.getElementById('content');
    if (content) {
        content.innerHTML = '<p>Welcome to Online Learning Platform. This is a static site deployed on Cloudflare Workers.</p>';
    }
});
