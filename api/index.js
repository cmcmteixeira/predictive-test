const express = require('express'),
    yargs = require('yargs'),
    log = require('winston');

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



var app = express();
app.get('/word',(req,res) => {
    let query = req.query.q;
    log.info(`'matched /word' with query ${query}`);

    res.json(query)
});

app.listen(80,'0.0.0.0', function () {
    console.log(`Listening on port ${args.port}, host ${args.host}`);
});