function printKwargs(...kwargs) {
    for (let arg of kwargs) {
        console.log(`${arg[0]}: ${arg[1]}`);
    }
}

printKwargs(["name", "shaktiman"], ["power", "lazer"]);
printKwargs(["name", "shaktiman"]);
printKwargs(["name", "shaktiman"], ["power", "lazer"], ["enemy", "Dr. Jackaal"]);
