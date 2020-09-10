const readline = require("readline");

/**
 * Promise wrapper for readline.Interface.question.
 * 
 * @param {readline.Interface} rl - readline instance
 * @param {string} prompt - print this to the console 
 * @return {Promise<string>} user's input
 */
const input = (rl, prompt) => {
    return new Promise( (resolve) => {
        rl.question(prompt, resolve);
    });
};


const instantRepl = async () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    // Loop until a ".exit" command
    while (true) {
        // Wait for input
        const command = await input(rl, ">>> ");
        
        if (command === ".exit") {
            // Quit the repl
            rl.close();
            break;
        }

        try {
            // eval() the input
            console.log(eval(command));
        } catch (err) {
            // print eval() errors to console instead of crashing
            console.error(err);
        }
    }
};


module.exports = instantRepl;
