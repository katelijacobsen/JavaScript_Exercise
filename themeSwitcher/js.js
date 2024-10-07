// Theme Switcher
"use strict";
/*Direkte Eventlistener i HTML*/
function themeSwitcher() {
    const themeSwitcher = document.getElementById('data-theme');
    const theme = themeSwitcher.value;
    document.body.setAttribute('data-theme', theme);
    
}
/*Eventlistener*/
// const themeSwitcher = document.getElementById('data-theme');

// // Event listener
// themeSwitcher.addEventListener('change', function() {
//     const theme = themeSwitcher.value;
//     document.body.setAttribute('data-theme', theme);
// });