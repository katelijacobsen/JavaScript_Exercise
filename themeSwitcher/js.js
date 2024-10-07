// Theme Switcher
"use strict";
const themeSwitcher = document.getElementById('data-theme');

// Event listener
themeSwitcher.addEventListener('change', function() {
    const theme = themeSwitcher.value;
    document.body.setAttribute('data-theme', theme);
});