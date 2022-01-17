WebAssembly.instantiateStreaming(fetch("./mat-assemblyscript.wasm"), {
    env: {
        abort(_msg, _file, line, column) {
            console.error("abort called at main.ts:" + line + ":" + column);
        }
    },
}).then(result => {
    const exports = result.instance.exports;

    const time1 = performance.now();
    exports.runProgram();
    const time2 = performance.now();

    const timeTaken = time2 - time1;

    document.getElementById("container").textContent = "Result: " + timeTaken + " Per iteration: " + timeTaken / 10_000;
}).catch(console.error);
