// Function to handle navigation menu
function handleNavigation() {
    // Get all navigation links
    var navLinks = document.querySelectorAll("nav ul li a");

    // Add event listener to each navigation link
    navLinks.forEach(function(navLink) {
        navLink.addEventListener("click", function(event) {
            // Prevent default link behavior
            event.preventDefault();

            // Get the href attribute value of the clicked link
            var targetPage = this.getAttribute("href");

            // Navigate to the target page
            window.location.href = targetPage;
        });
    });
}

// Function to handle the download button click
function handleDownload() {
    // Get the download link element
    var downloadLink = document.getElementById("download-link");

    // Trigger the click event on the download link
    downloadLink.click();
}

// Add event listener to the download button
document.addEventListener("DOMContentLoaded", function() {
    var downloadButton = document.getElementById("download-button");
    if (downloadButton) {
        downloadButton.addEventListener("click", handleDownload);
    }

    // Call the handleNavigation function to set up navigation
    handleNavigation();
});
