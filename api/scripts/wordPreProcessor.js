const fs = require('fs'),
    words = fs.readFileSync('/data/words.txt').toString().split("\n"),
    _ = require('lodash');

let wordTree = {};

_.forEach(words,(word) => {
    let path = '';
    _.forEach(word, (letter) => {
        path = `${path}${path ? `.${letter}` : letter}`;
        if (_.get(wordTree,path,false) === false){
            _.set(wordTree,path,{})
        }
    });
});

fs.writeFileSync('/data/words.json',JSON.stringify(wordTree));
