interface Message {
    text: string;
    sender: string;
}

function displayMessage({ text, sender }: Message) {
    console.log(`Message from ${sender}: ${text}`);
}

displayMessage({ sender: 'Abbas', text: 'hello, world' });
