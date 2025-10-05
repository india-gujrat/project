document.write("")
document.addEventListener("DOMContentLoaded", () => {
    // --- Mobile Menu Toggle ---
    const mobileToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");
    const sidebarLinks = document.querySelectorAll(".sidebar-menus a, .sidebar-logout a");

    if (mobileToggle && sidebar) {
        mobileToggle.addEventListener("click", () => {
            mobileToggle.classList.toggle("is-active");
            sidebar.classList.toggle("active");
        });

        // Close sidebar when a link inside it is clicked (on mobile view)
        // This is a common UX pattern: clicking a menu item closes the menu.
        sidebarLinks.forEach(link => {
            link.addEventListener("click", () => {
                // Check if the sidebar is currently active and it's a mobile view
                if (window.innerWidth <= 768 && sidebar.classList.contains("active")) {
                    mobileToggle.classList.remove("is-active");
                    sidebar.classList.remove("active");
                }
            });
        });
    }

    // --- Horizontal Scrolling for Highlight Section ---
    const highlightWrapper = document.querySelector(".highlight-wrapper");
    const highlightBackBtn = document.querySelector(".back");
    const highlightNextBtn = document.querySelector(".next");

    if (highlightWrapper && highlightBackBtn && highlightNextBtn) {
        highlightBackBtn.addEventListener("click", (e) => {
            e.preventDefault();
            // Scroll by a percentage of the wrapper's visible width for responsiveness
            const scrollAmount = highlightWrapper.clientWidth * 0.8; // Scroll by 80% of the visible area
            highlightWrapper.scrollBy({
                left: -scrollAmount,
                behavior: "smooth"
            });
        });

        highlightNextBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const scrollAmount = highlightWrapper.clientWidth * 0.8;
            highlightWrapper.scrollBy({
                left: scrollAmount,
                behavior: "smooth"
            });
        });
    }

    // --- Horizontal Scrolling for Filter Section ---
    const filterWrapper = document.querySelector(".filter-wrapper");
    const filterBackBtn = document.querySelector(".back-menus");
    const filterNextBtn = document.querySelector(".next-menus");

    if (filterWrapper && filterBackBtn && filterNextBtn) {
        filterBackBtn.addEventListener("click", (e) => {
            e.preventDefault();
            // Scroll by a percentage of the wrapper's visible width for responsiveness
            const scrollAmount = filterWrapper.clientWidth * 0.8; // Scroll by 80% of the visible area
            filterWrapper.scrollBy({
                left: -scrollAmount,
                behavior: "smooth"
            });
        });
                filterNextBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const scrollAmount = filterWrapper.clientWidth * 0.8;
            filterWrapper.scrollBy({
                left: scrollAmount,
                behavior: "smooth"
            });
        });
    }
});
$(document).ready(function() {
    // --- Mobile Menu Toggle ---
    const mobile = $(".menu-toggle");
    const mobileLink = $(".sidebar"); // Represents the sidebar element

    mobile.on("click", function() {
        mobile.toggleClass("is-active");
        mobileLink.toggleClass("active");
    });

    // Close menu when a link inside the sidebar is clicked (on mobile view)
    // This targets all anchor tags within .sidebar-menus and .sidebar-logout
    mobileLink.find(".sidebar-menus a, .sidebar-logout a").on("click", function() {
        if (window.innerWidth <= 768 && mobileLink.hasClass("active")) {
            mobile.removeClass("is-active");
            mobileLink.removeClass("active");
        }
    });

    // --- Horizontal Scrolling for Highlight Section ---
    // Consider making these steps dynamic based on element width for better responsiveness
    var highlightScrollStep = 100; // Pixels to scroll each time

    $(".back").on("click", function(e) {
        e.preventDefault();
        $(".highlight-wrapper").animate({
            scrollLeft: "-=" + highlightScrollStep + "px"
        }, "slow"); // "slow" or a number like 400 for animation speed
    });

    $(".next").on("click", function(e) {
        e.preventDefault();
        $(".highlight-wrapper").animate({
            scrollLeft: "+=" + highlightScrollStep + "px"
        }, "slow");
    });

    // --- Horizontal Scrolling for Filter Section ---
    var filterScrollStep = 60; // Pixels to scroll each time

    $(".back-menus").on("click", function(e) {
        e.preventDefault();
        $(".filter-wrapper").animate({
            scrollLeft: "-=" + filterScrollStep + "px"
        }, "slow");
    });

    $(".next-menus").on("click", function(e) {
        e.preventDefault();
        $(".filter-wrapper").animate({
            scrollLeft: "+=" + filterScrollStep + "px"
        }, "slow");
    });
});
