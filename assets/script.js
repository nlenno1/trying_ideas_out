const typedTextSpan = document.querySelector(".typed-text")

const intro_message = "Click the book to start your adventure";
const typingDelay = 200;
let charIndex = 0;

function type(textArray, typingDelay) {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 200)
    }
}

type("Click the book to start your adventure")