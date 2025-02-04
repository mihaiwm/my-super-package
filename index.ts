function helloWorldFunc(value: string) {
    console.log(`Hello world test ${value}`)
}

module.exports = helloWorldFunc;

export function displayValue(value: string) {
    console.log(`${value}`)
}

module.exports = helloWorldFunc;