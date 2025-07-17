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