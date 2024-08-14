// Function to highlight the current link
function highlightActiveLink() {
    const links = document.querySelectorAll('.topnav a');
    const currentPath = window.location.pathname.split('/').pop(); // Get the current file name

    links.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath || (currentPath.includes('rooms.html') && linkPath.includes('rooms.html'))) {
            link.classList.add('active-link');
        }
    });
}

highlightActiveLink();
