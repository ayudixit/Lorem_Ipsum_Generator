const words = [
    "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", 
    "adipiscing", "elit", "sed", "do", "eiusmod", "tempor", 
    "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua"
];

function generateSentence() {
    const sentenceLength = Math.floor(Math.random() * (15 - 4)) + 4;
    let sentence = [];

    for (let i = 0; i < sentenceLength; i++) {
        const randomIndex = Math.floor(Math.random() * words.length);
        sentence.push(words[randomIndex]);
    }

    return sentence[0].charAt(0).toUpperCase() + sentence.slice(1).join(" ") + ".";
}

function generateParagraph() {
    const paragraphLength = Math.floor(Math.random() * (6 - 3)) + 3;
    let paragraph = [];

    for (let i = 0; i < paragraphLength; i++) {
        paragraph.push(generateSentence());
    }

    return paragraph.join(" ");
}

function generateLoremIpsum() {
    const numParagraphs = document.getElementById("paragraphs").value;
    let output = "";

    for (let i = 0; i < numParagraphs; i++) {
        output += `<p>${generateParagraph()}</p>`;
    }

    document.getElementById("output").innerHTML = output;
}
