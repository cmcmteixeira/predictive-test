const express = require('express'),
    yargs = require('yargs'),
    log = require('winston'),
    mappings = require('./data/mappings'),
    fs = require('fs'),
    _ = require('lodash');

const args = yargs
    .strict()
    .wrap(Math.min(120, yargs.terminalWidth()))
    .version().alias('version', 'v')
    .help('help').alias('help', 'h')
    .option('port', {
        type: 'int',
        default: '80',
        alias: 'p',
        describe: 'port that the application will use',
        global: true
    })
    .option('host',{
        type: 'string',
        default: '0.0.0.0',
        alias: 'h',
        describe: 'host that the application will use',
        global: true
    })
    .argv;


const wordTree = JSON.parse(fs.readFileSync('/data/words.json').toString());

function getAllCombinations(acc, list){
    if(list.length == 0) return acc;
    const path = _.join(acc.match(/\w/g),'.');
    if(acc.length > 0 && _.get(wordTree,path,false) === false) return false;
    return _.chain(list)
        .head()
        .map((elem) => getAllCombinations(`${acc}${elem}`,_.tail(list)))
        .flatten()
        .tap((e) => console.log(e))
        .filter((elem) => elem !== false)
        .value()

}


var app = express();
app.get('/word',(req,res) => {
    let query = req.query.q;
    log.info(`'matched /word' with query ${query}`);
    const translation =_.chain(query)
        .map((num) => {
            return _.get(mappings,num,[]);
        })
        .value();
    res.json(getAllCombinations('',translation))
});


app.listen(80,'0.0.0.0', function () {
    console.log(`Listening on port ${args.port}, host ${args.host}`);
});