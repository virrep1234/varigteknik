// --- REVEAL ON SCROLL ---
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // kör vid start


// --- REVIEW CAROUSEL (AUTO-SLIDE) ---
const cards = document.querySelectorAll('.review-card');
let index = 0;

function showCard(i) {
    cards.forEach(card => card.classList.remove('active'));
    cards[i].classList.add('active');
}

// byt recension var 6:e sekund
setInterval(() => {
    index = (index + 1) % cards.length;
    showCard(index);
}, 6000);