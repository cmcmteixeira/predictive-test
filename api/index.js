const express = require('express'),
    yargs = require('yargs'),
    log = require('winston'),
    mappings = require('./data/mappings'),
    fs = require('fs'),
    cors = require('cors')
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

function getPossibilitiesNodes(acc, list){
    if(list.length == 0) return acc;
    const path = _.join(acc.match(/./g),'.');
    if(acc.length > 0 && _.get(wordTree,path,false) === false) return false;
    return _.chain(list)
        .head()
        .map((elem) => getPossibilitiesNodes(`${acc}${elem}`,_.tail(list)))
        .flatten()
        .filter((elem) => elem !== false)
        .value()
}


var app = express();
app.use(cors());

app.get('/word',(req,res) => {
    let query = req.query.q;
    log.info(`'matched /word' with query ${query}`);
    const translation =_.map(query,(num) => {
        return _.get(mappings,num,[]);
    });
    const nodesPath = getPossibilitiesNodes('',translation);
    const possibleWords = _.filter(nodesPath,(nodePath) => {
        const path = _.join(nodePath.match(/./g),'.');
        return _.get(wordTree,`${path}.word`,false);
    });
    res.json(possibleWords)
});


app.listen(80,'0.0.0.0', function () {
    console.log(`Listening on port ${args.port}, host ${args.host}`);
});