const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


const input = (prompt) => {
    return new Promise( (resolve, reject) => {
        rl.question(prompt, (command) => {
            if (command === ".exit") {
                reject();
            } else {
                resolve(command);
            }
        });
    });
};


const instantRepl = async () => {
    while (true) {
        try {
            const command = await input(">>> ");
            try {
                console.log(eval(command));
            } catch (err) {
                console.error(err);
            }
        } catch (e) {
            break;
        }
    }
};


module.exports = instantRepl;
