document.addEventListener("DOMContentLoaded", function () {
    console.log("Startup China website loaded successfully!");

    const button = document.querySelector("button");

    if (button) {
        button.addEventListener("click", function () {
            alert("Thank you for subscribing to Startup China!");
        });
    }
});
