document.addEventListener("DOMContentLoaded", function() {
    const decrementBtn = document.getElementById("decrement");
    const incrementBtn = document.getElementById("increment");
    const scrollValue = document.getElementById("scroll-value");
    const scrollContainer = document.getElementById('sneakersContainer');
    const scrollWrapper = document.getElementById('sneakersWrapper');
    const scrollLeftButton = document.getElementById('scrollLeft');
    const scrollRightButton = document.getElementById('scrollRight');
    const images = document.querySelectorAll('#sneakersWrapper .d-flex');

    let currentIndex = 0;
    let value = 0;

    function updateView() {
        const offset = currentIndex * -100; 
        scrollWrapper.style.transform = `translateX(${offset}%)`;
    }

    decrementBtn.addEventListener("click", function() {
        value = Math.max(0, value - 1);
        scrollValue.textContent = value;
        updateView();
    });

    incrementBtn.addEventListener("click", function() {
        value += 1;
        scrollValue.textContent = value;
        updateView();
    });

    scrollLeftButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateView();
        }
    });

    scrollRightButton.addEventListener('click', () => {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateView();
        }
    });
});
