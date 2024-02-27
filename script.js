let words = document.querySelectorAll(".word");

words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });

    nextWord.style.opacity = "1";

    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });

    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText(); // Initial call to start the animation

setInterval(changeText, 3000); // Set interval for the text change (every 3000 milliseconds)


const circles = document.querySelectorAll('.circle');

circles.forEach((elem) => {
    var dots = parseInt(elem.getAttribute("data-dots")); // Parse the values as integers
    var marked = parseInt(elem.getAttribute("data-percent"));
    var percent = Math.floor((dots * marked) / 100);
    var points = " ";
    var rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i: ${i}; --rot: ${rotate}deg;"></div>`; // Corrected string interpolation
    }

    elem.innerHTML = points;
    const pointsMarked = elem.querySelectorAll('.points');
for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add('marked');
}

});
var mixer =mixitup('.portfolio-gallery')
let menuli=document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
    let len=section.length;
    while(--len && window.scrollY+97< section[len].offsetTop){}
    menuli.forEach(sec=> sec.classList.remove("active"));
    menuli[len].classList.add("active");


}
activeMenu();

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        var header = document.getElementById("header");

        if (window.pageYOffset > 100) { 
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });
});



let menuicon = document.querySelector("#menu-icon");
let navList = document.querySelector(".navlist");

menuicon.onclick = () => {
    menuicon.classList.toggle("bx-x");
    navList.classList.toggle("open");
}
window.onscroll = () => {
    menuicon.classList.remove("bx-x");
    navList.classList.remove("open");
}

// Create an intersection observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        // If the observed element is in the viewport
        if (entry.isIntersecting) {
            // Add or remove classes based on your requirements
            entry.target.classList.add("show-items");
            entry.target.classList.remove("scroll-bottom", "scroll-top", "scroll-scale");

            // Unobserve the element to avoid duplicate callbacks
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 }); // Adjust the threshold as needed

// Observe elements with the class 'scroll-scale'
const scrollScaleElements = document.querySelectorAll(".scroll-scale");
scrollScaleElements.forEach((element) => observer.observe(element));

// Observe elements with the class 'scroll-bottom'
const scrollBottomElements = document.querySelectorAll(".scroll-bottom");
scrollBottomElements.forEach((element) => observer.observe(element));

// Observe elements with the class 'scroll-top'
const scrollTopElements = document.querySelectorAll(".scroll-top");
scrollTopElements.forEach((element) => observer.observe(element));
