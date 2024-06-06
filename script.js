

// script.js
function nextSection(next) {
    const current = document.querySelector('section.active');
    const nextSection = document.getElementById(`section${next}`);

    current.classList.remove('active');
    nextSection.classList.add('active');
}

// Back button functionality
const backButton = document.getElementById("backButton");
backButton.addEventListener("click", function () {
    window.history.back();
});


