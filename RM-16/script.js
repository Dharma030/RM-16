document.addEventListener("DOMContentLoaded", () => {
    const countdownElement = document.getElementById("countdown");
    
    const countdown = (num, callback) => {
        if (num > 0) {
            countdownElement.textContent = num;
            setTimeout(() => {
                countdown(num - 1, callback);
            }, 1000);
        } else {
            countdownElement.textContent = "Happy Independence Day";
            countdownElement.classList.add("text-success", "font-weight-bold"); // Add Bootstrap classes
        }
    };
    
    countdown(10, () => {
        // No need to change anything here
    });
});
