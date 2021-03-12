const navigationElements = document.querySelectorAll("#navigation > ul > li");

// Control Navigation Animation
function navAnimation(direction1, direction2) {
    navigationElements.forEach((navEl, index) => {
        navEl.classList.replace(
            `slide-${direction1}-${index}`,
            `slide-${direction2}-${index}`
        );
    });
}

export function toggleNav(menuBars, overlay) {
    // Toggle: Menu Bars Open/Closed
    menuBars.classList.toggle("change");
    // Toggle: Menu Active
    overlay.classList.toggle("overlay-active");
    if (overlay.classList.contains("overlay-active")) {
        // Animate In - Overlay
        overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
        // Animate In - Nav Items
        navAnimation("out", "in");
    } else {
        // Animate Out - Overlay
        overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
        // Animate Out - Nav Items
        navAnimation("in", "out");
    }
}
