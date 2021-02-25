// console.log(process.argv);
// console.log(yargs.argv);
// var myArgs = process.argv.slice(2);

const yargs = require('yargs');

yargs .command({
    command : 'add',
    describe : 'it is just a test',
    builder : {
        id : {
            describe:'id',
            demandOption: true , 
            type : 'string'
        } ,
        value : {
            describe:'value',
            demandOption: true , 
            type : 'string'
        } 
    },
    handler(yargs){
        console.log("Result:" , yargs.first);
    }
})

yargs.parse();


const fs = require('fs');


let rawdata = fs.readFileSync('file.json');
let data = JSON.parse(rawdata);
console.log(data);

// data.push({"id":"77" , "value":"dk"})
fs.writeFile("data.json", JSON.stringify.data)

