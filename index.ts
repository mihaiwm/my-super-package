export function displayValue(value: string) {
    console.log(`${value}`);
  }
  
  export function helloWorldFunc(value: string) {
    console.log(`Hello world test ${value}`);
  }
  
  // CommonJS support
  if (typeof module !== "undefined" && module.exports) {
    module.exports = { displayValue, helloWorldFunc };
  }
  