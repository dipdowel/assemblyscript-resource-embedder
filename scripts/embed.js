const { program } = require('commander');
const {helpHeader, helpFooter} = require("./embed/embed-help");



program
    .addHelpText('beforeAll', helpHeader )
    .addHelpText('afterAll', helpFooter )
    .requiredOption('--src <path>', 'Path to an existing resource file')
    .requiredOption('--dest <path>', 'Path to the destination AsemblyScript file. It will overwrite an existing file, if any.')
    .requiredOption('--name <const name>', 'Name of the exported constant with the content of the resource')
    .requiredOption('--bit <8|16|32>', 'What kind of data type the resource should be stored as: 8, 16 or 32 bits.')
    .addHelpCommand("help", "Embed resource into AssemblyScript file")
    .parse(process.argv);



const { src, dest, name, bit } = program.opts();

console.log('Source:', src);
console.log('Destination:', dest);
console.log('Name:', name);
console.log('Bit:', bit);


