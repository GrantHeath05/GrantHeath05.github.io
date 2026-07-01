// Load a page from /categories/*.html
async function loadPage(pageName) {
    try {
        const response = await fetch(`categories/${pageName}.html`);
        const html = await response.text();
        document.getElementById("content").innerHTML = html;
    } catch (err) {
        document.getElementById("content").innerHTML =
            "<h2>Error</h2><p>Could not load content.</p>";
    }
}

// Load default page
loadPage("home");

// Handle navigation clicks
// Use [data-page] to ignore the empty "spacer" li
document.querySelectorAll("nav li[data-page]").forEach(tab => {
    tab.addEventListener("click", () => {

        // 1. Update active tab
        // We look for the current .active item and remove the class
        const currentActive = document.querySelector("nav li.active");
        if (currentActive) {
            currentActive.classList.remove("active");
        }
        
        // 2. Add active class to the one we just clicked
        tab.classList.add("active");

        // 3. Load the corresponding HTML file
        const page = tab.getAttribute("data-page");
        loadPage(page);
    });
});