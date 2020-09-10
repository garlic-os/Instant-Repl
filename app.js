const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


/**
 * Python's input() but it returns a promise.
 * 
 * @param {string} prompt - print this to the console 
 * @return {Promise<string>} user's input
 */
const input = (prompt) => {
    return new Promise( (resolve) => {
        rl.question(prompt, resolve);
    });
};


const instantRepl = async () => {
    // Loop until a ".exit" command
    while (true) {
        // Wait for input
        const command = await input(">>> ");
        
        if (command === ".exit") {
            // Quit the repl
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
