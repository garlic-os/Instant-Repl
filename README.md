# Instant Repl
 Spawn a repl anywhere in your code. As long as your code is async.

Probably useful for debugging or something, I guess

```bash
npm install --save-dev instant-repl
```

```js
const instantRepl = require("instant-repl");

(async () => {
    let coolVariable = 65535;
    console.log("Stuff before spawning a repl");
    await instantRepl();
    console.log("Stuff after spawning a repl");
})();
```

```
Stuff before spawning a repl
>>> 2 + 2
4
>>> coolVariable
65535
>>> .exit
Stuff after spawning a repl
```
