/**
 * @typedef {Object} ArgumentsMap
 * @property {?string} src - The source argument.
 * @property {?string} dest - The destination argument.
 * @property {?string} name - The name argument.
 * @property {?number} bit - The bit argument.
 */

/**
 * Reads the command-line arguments and prints their values.
 * @returns {void}
 */
 function embed() {
    const args = process.argv.slice(2);
    /** @type {ArgumentsMap} */
    const argumentsMap = {
        src: null,
        dest: null,
        name: null,
        bit: null,
    };

    args.forEach((arg) => {
        const [key, value] = arg.split('=');
        if (key && value) {
            const argumentKey = key.replace('--', '');
            if (argumentsMap.hasOwnProperty(argumentKey)) {
                if (argumentKey === 'bit') {
                    argumentsMap[argumentKey] = parseInt(value, 10);
                } else {
                    argumentsMap[argumentKey] = value;
                }
            }
        }
    });

    console.log('Source:', argumentsMap.src);
    console.log('Destination:', argumentsMap.dest);
    console.log('Name:', argumentsMap.name);
    console.log('Bit:', argumentsMap.bit);
}

// Call the function to read and print the CLI arguments
embed();
