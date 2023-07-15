class loglinecolor {
    constructor() { }

    /**
     * black color
     * 
     * @param {string} params 
     * @returns {void}
     */
    black(params) {
        return console.log("\x1b[30m" + params + "\x1b[0m");
    }

    /**
     * red color
     * 
     * @param {string} params 
     * @returns {void}
     */
    red(params) {
        return console.log("\x1b[31m" + params + "\x1b[0m");
    }

    /**
     * green color
     * 
     * @param {string} params 
     * @returns {string}
     */
    green(params) {
        return console.log("\x1b[32m" + params + "\x1b[0m");
    }

    /**
     * yellow color
     * 
     * @param {string} params 
     * @returns {string}
     */
    yellow(params) {
        return console.log("\x1b[33m" + params + "\x1b[0m");
    }
    
    /**
     * blue color
     * 
     * @param {string} params 
     * @returns {void}
     */
    blue(params) {
        return console.log("\x1b[34m" + params + "\x1b[0m");
    }

    /**
     * magenta color
     * 
     * @param {string} params 
     * @returns {void}
     */
    magenta(params) {
        return console.log("\x1b[35m" + params + "\x1b[0m");
    }

    /**
     * cyan color
     * 
     * @param {string} params 
     * @returns {void}
     */
    cyan(params) {
        return console.log("\x1b[36m" + params + "\x1b[0m");
    }

    /**
     * white color
     * 
     * @param {string} params 
     * @returns {void}
     */
    white(params) {
        return console.log("\x1b[37m" + params + "\x1b[0m");
    }

    /**
     * gray color
     * 
     * @param {string} params 
     * @returns {void}
     */
    gray(params) {
        return console.log("\x1b[90m" + params + "\x1b[0m");
    }

    /**
     * Highlight font
     * 
     * @param {string} params 
     * @returns {void}
     */
    highlight(params) {
        return console.log("\x1b[7m" + params + "\x1b[0m");
    }

    /**
     * Dark font
     * 
     * @param {string} params 
     * @returns {void}
     */
    dark(params) {
        return console.log("\x1b[2m" + params + "\x1b[0m");
    }

    /**
     * Bold font
     * 
     * @param {string} params 
     * @returns {void}
     */
    bold(params) {
        return console.log("\x1b[1m" + params + "\x1b[0m");
    }

    /**
     * Underline font
     * 
     * @param {string} params 
     * @returns {void}
     */
    underline(params) {
        return console.log("\x1b[4m" + params + "\x1b[0m");
    }
}

module.exports = { 
    loglinecolor: loglinecolor,
}