// =========================
// HAPPY 2ND MENSIVE 🖤
// =========================

const startBtn = document.getElementById("startBtn");
const loader = document.getElementById("loader");
const music = document.getElementById("bgMusic");

// =========================
// OPEN WEBSITE
// =========================

startBtn.addEventListener("click", () => {

    loader.style.opacity = "0";
    loader.style.transition = "1s";

    setTimeout(() => {
        loader.style.display = "none";
    }, 1000);

    music.play();

});

// =========================
// PHOTO SLIDER
// =========================

const photos = [
    "foto1.jpg",
    "foto2.jpg",
    "foto3.jpg",
    "foto4.jpg",
    "foto5.jpg"
];

const slider = document.getElementById("slider");

let currentPhoto = 0;

setInterval(() => {

    slider.style.opacity = "0";

    setTimeout(() => {

        currentPhoto++;

        if(currentPhoto >= photos.length){
            currentPhoto = 0;
        }

        slider.src = photos[currentPhoto];

        slider.style.opacity = "1";

    }, 400);

}, 3500);

// =========================
// FALLING HEARTS
// =========================

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = [
        "🖤",
        "🩶",
        "🤍",
        "🩶",
        "🖤",
        "✦"
    ];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 15 + 18 + "px";

    heart.style.animationDuration =
        Math.random() * 4 + 4 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);

}

setInterval(createHeart, 250);

// =========================
// FADE IN EFFECT
// =========================

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform =
                "translateY(0px)";

        }

    });

},

{
    threshold:0.1
}

);

const sections = document.querySelectorAll(
".gallery, .letter, .footer"
);

sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform =
        "translateY(60px)";

    section.style.transition =
        "all 1s ease";

    observer.observe(section);

});

// =========================
// HERO FLOAT EFFECT
// =========================

const heroTitle =
document.querySelector(".hero-content h1");

window.addEventListener("mousemove", (e) => {

    let x =
        (window.innerWidth / 2 - e.pageX) / 40;

    let y =
        (window.innerHeight / 2 - e.pageY) / 40;

    heroTitle.style.transform =
        `translate(${x}px, ${y}px)`;

});

// =========================
// IMAGE TRANSITION
// =========================

slider.style.transition =
"opacity .6s ease";

// =========================
// PARALLAX EFFECT
// =========================

window.addEventListener("scroll", () => {

    const scrollY = window.scrollY;

    document.body.style.backgroundPositionY =
        scrollY * 0.2 + "px";

});

// =========================
// LOVE MESSAGE
// =========================

console.log(
"%cHappy 2nd Mensive 🖤",
"font-size:24px;color:white;font-weight:bold;"
);

console.log(
"%cMade with love by Savio Madhava for Kadhava Renjiro",
"font-size:14px;color:#cfcfcf;"
);
