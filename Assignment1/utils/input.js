import readline from "readline";

// Creates an interactive terminal interface for user input/output
const IO = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Wraps readline in a Promise to make “await ask()” possible
function ask(question) {
    return new Promise((resolve) => IO.question(question, resolve));
}

export { IO, ask };
