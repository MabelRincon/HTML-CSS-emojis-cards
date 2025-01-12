document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".toggle").forEach($toggleCard => {
        $toggleCard.addEventListener("click", () => {
            $toggleCard.classList.toggle("off");
        });
    });
});