document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll("#nav li");

    menuItems.forEach(item => {
        item.addEventListener("mouseover", function() {
            const subMenu = this.querySelector("ul");
            subMenu.style.display = "block";
        });

        item.addEventListener("mouseout", function() {
            const subMenu = this.querySelector("ul");
            subMenu.style.display = "none";
        });
    });
});
