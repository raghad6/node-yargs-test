// console.log(process.argv);
const yargs = require('yargs');
// console.log(yargs.argv);
// var myArgs = process.argv.slice(2);

yargs .command({
    command : 'test',
    describe : 'it is just a test',
    builder : {
        first : {
            describe:'first',
            demandOption: true , 
            type : 'string'
        } 
    },
    handler(yargs){
        console.log("Result:" , yargs.first);
    }
})

yargs.parse();