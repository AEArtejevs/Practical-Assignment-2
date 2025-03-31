// Load Navbar
fetch("nav.html")
    .then(response => response.text())
    .then(data => {
        
        document.getElementById("navbar").innerHTML = data;
        // Now that navbar is loaded, apply scroll effect
        const navbar = document.querySelector(".navbar");
        const links = document.querySelector(".nav-item");

        function updateNavBg() {
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled-navbar");
                // navbar.classList.add("scrolled-navbar");
            } else {
                navbar.classList.remove("scrolled-navbar");
            }
        }
        window.addEventListener("scroll", updateNavBg);
    })
    .catch(error => console.error("Error loading the navbar:", error));

    
// Load Footer
fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
        document.querySelector(".year").textContent = new Date().getFullYear();
        footer.addEventListener("mouseover", () => footer.style.backgroundColor = "aliceblue");
        footer.addEventListener("mouseout", () => footer.style.backgroundColor = "white");
    })
    .catch(error => console.error("Error loading the footer:", error));

    function toggleDarkMode() {
        const body = document.querySelector("body"); // Using body element directly
        const cards = document.querySelectorAll(".card"); // Select all cards
        const navbar = document.querySelector("header"); // Correct selector for the header (not 'navbar')
        // const h1Elements = document.querySelectorAll("h1,h2,h5"); // Select all h1 elements

        const darkModeBtn = document.getElementById("darkModeBtn");  // Button to toggle dark mode
    
        if (body.classList.contains("bg-light") || navbar.classList.contains("bg-light")) {
            // If it's in light mode, switch to dark mode
            body.classList.remove("bg-light");
            body.classList.add("bg-dark");
            body.classList.add("text-light");
    
            navbar.classList.remove("bg-light");
            navbar.classList.add("bg-dark");
            navbar.classList.add("text-light");
    
            // Apply dark mode styles to cards
            // cards.forEach(card => {
            //     card.classList.add("bg-dark");
            //     card.classList.add("text-light"); // Make text lighter for dark mode visibility
            // });
            // h1Elements.forEach(h1 => {
            //     h1.classList.add("text-white");
            // });
    
            localStorage.setItem("darkMode", "enabled"); // Save the dark mode state
            darkModeBtn.textContent = "Switch to Light Mode";  // Change button text
        } else {
            // If it's in dark mode, switch to light mode
            body.classList.remove("bg-dark");
            body.classList.add("bg-light");
            body.classList.remove("text-light");
    
            navbar.classList.remove("bg-dark");
            navbar.classList.add("bg-light");
            navbar.classList.remove("text-light");
    
            // Remove dark mode styles from cards
            // cards.forEach(card => {
            //     card.classList.remove("bg-dark");
            //     card.classList.remove("text-light");
            // });
            // h1Elements.forEach(h1 => {
            //     h1.classList.remove("text-white");
            // });
    
            localStorage.setItem("darkMode", "disabled"); // Save the light mode state
            darkModeBtn.textContent = "Switch to Dark Mode";  // Change button text
        }
    }
    
    // Check the local storage on page load and apply the saved dark mode setting
    document.addEventListener("DOMContentLoaded", () => {
        const darkModeStatus = localStorage.getItem("darkMode");
        const darkModeBtn = document.getElementById("darkModeBtn");
    
        if (darkModeStatus === "enabled") {
            toggleDarkMode();  // Apply dark mode if it was previously enabled
        }
    });
    
    