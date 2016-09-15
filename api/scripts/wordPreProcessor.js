const basePath = '/data/words';
const fs = require('fs'),
    words = fs.readFileSync(`${basePath}.txt`).toString().split("\n"),
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
_.forEach(words,(word) => {
   let path = word.match(/./g);
       if(path){
           _.set(wordTree,`${path.join('.')}.word`,true)
       }
});

fs.writeFileSync(`${basePath}.json`,JSON.stringify(wordTree));
