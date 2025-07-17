class TextProcessor {
    static manipulate(text) {
        // Complex data manipulation logic
        return text.toLowerCase()
            .replace(/[^a-z0-9]/g, '')
            .split('')
            .filter(char => char !== ' ')
            .join('-');
    }

    static validate(text) {
        return text.trim().length > 0 && text.length < 100;
    }
    static evaluateNumber(text) {
        const trimmed = text.trim();

        if (!trimmed || isNaN(trimmed)) {
            return null;
        }

        return parseInt(trimmed, 10);
    }
    static maNumber(number) {
        return number += 69;
    }
}

function processText() {
    const input = document.getElementById("textInput").value;
    const output = document.getElementById("output");

    if (TextProcessor.validate(input)) {
        const result = TextProcessor.manipulate(input);
        output.textContent = result;
    } else {
        output.textContent = "Invalid input";
    }
}

function doMath() {
    const input = document.getElementById("mathNbr").value;
    const output = document.getElementById("numbr");
    const number = TextProcessor.evaluateNumber(input)
    if (number !== null) {
        const sum = TextProcessor.maNumber(number);
        output.textContent = sum;
    } else { output.textContent = "can't math that" }
}
function showPopup(message) {
    // You can change the message or remove it since you have iframe
    document.getElementById("popup-message").innerHTML = `
        <iframe width="560" height="315"
            src="https://www.youtube.com/embed/xvFZjo5PgG0?si=pgt20zToCCjGV03u" 
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
        </iframe>
    `;
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    // Stop the video by clearing the iframe
    document.getElementById("popup-message").innerHTML = "";
}