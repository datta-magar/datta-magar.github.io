// // Theme Toggle Functionality
// document.addEventListener('DOMContentLoaded', function() {
//     const themeToggle = document.getElementById('theme-toggle');
    
//     // Check for saved user preference, if any, on load of the website
//     const userTheme = localStorage.getItem('theme');
//     const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    
//     // Set theme based on user preference or system theme
//     document.documentElement.setAttribute('data-theme', userTheme || systemTheme);
    
//     // Toggle theme on button click
//     themeToggle.addEventListener('click', () => {
//         const currentTheme = document.documentElement.getAttribute('data-theme');
//         const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
//         document.documentElement.setAttribute('data-theme', newTheme);
//         localStorage.setItem('theme', newTheme);
        
//         // Add animation class
//         document.body.classList.add('theme-transition');
//         setTimeout(() => {
//             document.body.classList.remove('theme-transition');
//         }, 1000);
//     });
    
//     // Listen for system theme changes
//     window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
//         if (!localStorage.getItem('theme')) {
//             document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
//         }
//     });
    
//     // Add smooth scroll behavior for internal links
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();
//             const targetId = this.getAttribute('href');
//             const targetElement = document.querySelector(targetId);
            
//             if (targetElement) {
//                 targetElement.scrollIntoView({
//                     behavior: 'smooth',
//                     block: 'start'
//                 });
//             }
//         });
//     });
// });