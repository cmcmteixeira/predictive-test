const express = require('express'),
    yargs = require('yargs'),
    mappings = require('./data/mappings'),
    fs = require('fs'),
    cors = require('cors'),
    _ = require('lodash'),
    getWords = require('./lib/TreeAnalysis.js').getWords;


const args = yargs
    .strict()
    .wrap(Math.min(120, yargs.terminalWidth()))
    .version().alias('version', 'v')
    .help('help').alias('help', 'h')
    .option('port', {
        type: 'int',
        default: '80',
        describe: 'port that the application will use',
        global: true
    })
    .option('host',{
        type: 'string',
        default: '0.0.0.0',
        describe: 'host that the application will use',
        global: true
    })
    .option('data',{
        type: 'string',
        default: '/data/words.json',
        describe: 'the path where the word dictionary will be',
        global: true
    })
    .argv;

var app = express();
app.use(cors());
const wordTree = JSON.parse(fs.readFileSync(args.data).toString());


app.get('/word',(req,res) => {
    let query = req.query.q;
    const translation =_.map(query,(num) => {
        return _.get(mappings,num,[]);
    });
    res.json(getWords(translation,wordTree))
});

app.listen(args.port,args.host, function () {
    console.log(`Listening on port ${args.port}, host ${args.host}`);
});