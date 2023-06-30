// FIXME: see the FIXME in the help header below
const helpHeader = `
This script takes an existing file, treats it as binary data and generates an AssemblyScript file
with a constant containing that data, accessible in your AssemblyScript code.

Example (FIXME!):
\tyarn embed --src=./static/text-sample-file.txt --dest=./assembly/static-resources/ --name=sampleStaticResource --bit=8
Developed by:  https://codument.com
`;

const helpFooter = `\nDeveloped by:  https://codument.com\n`;

exports.helpHeader = helpHeader;
exports.helpFooter = helpFooter;
