/* Scroll Reveal Animation */
const reveals=document.querySelectorAll(".reveal");
window.addEventListener("scroll",()=>{
    reveals.forEach((el)=>{
        const top=el.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            el.classList.add("active");
        };
    });
});

const counters = document.querySelectorAll(".counter");
const statsSection = document.querySelector(".stats");

function animateCounter(counter) {
    const target = parseFloat(counter.dataset.target);
    let current = 0;

    const increment = target / 100;

    const updateCounter = () => {
        current += increment;

        if (current < target) {
            counter.textContent =
                target % 1 !== 0
                    ? current.toFixed(1)
                    : Math.floor(current);

            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target;
        }
    };

    updateCounter();
}

const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        counters.forEach(counter => animateCounter(counter));
        observer.unobserve(statsSection);
    }
}, {
    threshold: 0.2
});

observer.observe(statsSection);