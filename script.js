document.addEventListener("DOMContentLoaded", function () {
    const subMenu = document.querySelector(".subbar");
    const servicesLink = document.querySelector(".item a[tabindex='0']");    
    const mobileToggle = document.querySelector(".mobile-toggle");
    const subMenu = mobileToggle.nextElementSibling;

    // Show sub-menu when clicking on the "Services" link
    servicesLink.addEventListener("click", function (event) {
        event.preventDefault();
        if (window.innerWidth <= 768) {
            subMenu.style.display = "block";
        } else if (window.innerWidth > 768) {
            toggleSubMenu(subMenu);
        }
    });

    // Hide sub-menu when clicking anywhere outside of it
    document.addEventListener("click", function (event) {
        if (event.target !== servicesLink && event.target !== subMenu) {
            subMenu.style.display = "none";
        }
    });
});

function toggleSubMenu(subMenu) {
    if (subMenu.style.display === "block") {
        subMenu.style.display = "none";
    } else {
        subMenu.style.display = "block";
    }
}