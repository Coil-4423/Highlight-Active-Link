# Highlight-Active-Link


To make a navigation link change color when you navigate to a specific section or page, you can use JavaScript to detect the current URL and then apply the appropriate style to the relevant navigation link. Here’s how you can implement this for your `index.html` and `rooms.html` files.

### JavaScript to Highlight Active Link

Add this script to both `index.html` and `rooms.html`, just before the closing `</body>` tag:

```javascript
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
```

### CSS for Active Link

Add the following CSS to your existing CSS file or directly in a `<style>` tag within the `<head>` of your HTML files:

```css
/* Highlighted navigation link */
.active-link {
    color: darkred; /* Change to the desired color */
    font-weight: bold;
}
```

### Explanation:

1. **JavaScript Functionality**:
   - `highlightActiveLink()` function checks the current URL path using `window.location.pathname` and compares it with the `href` attribute of each navigation link.
   - If a match is found (i.e., the user is on the `rooms.html` page), it applies the `active-link` class to that specific link.

2. **CSS Styling**:
   - The `.active-link` class changes the color of the navigation link to `darkred` and makes the font bold. You can adjust these styles to fit your design needs.

### Applying to Your Files:

- **In `index.html`**: Ensure that the script is included, and the CSS for `.active-link` is either added to your stylesheet or embedded in the page.
- **In `rooms.html`**: Do the same, ensuring that the script is included and the CSS is applied.

This will make sure that when you navigate to `rooms.html`, one of the "Rooms" links in the dropdown will be highlighted, indicating the active section of the site.
