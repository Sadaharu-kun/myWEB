document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".expand-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const keyword = this.parentElement;
            const isExpanded = keyword.getAttribute("aria-expanded") === "true";

            // Toggle the aria-expanded attribute
            keyword.setAttribute("aria-expanded", !isExpanded);

            // Toggle the content visibility
            const content = keyword.querySelector(".expandable-content");
            if (!isExpanded) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = "0";
            }
        });
    });
});
