const _ = require('lodash');


    function getPossiblePaths(acc, list,wordTree){
    if(list.length == 0) return acc;
    const path = _.join(acc.match(/./g),'.');
    if(acc.length > 0 && _.get(wordTree,path,false) === false) return false;
    return _.chain(list)
        .head()
        .map((elem) => getPossiblePaths(`${acc}${elem}`,_.tail(list),wordTree))
        .flatten()
        .filter((elem) => elem !== false)
        .value()
}


function getWords(translations,wordTree){
    const nodesPath = getPossiblePaths('',translations,wordTree);
    return _.filter(nodesPath,(nodePath) => {
        const path = _.join(nodePath.match(/./g),'.');
        return _.get(wordTree,`${path}.word`,false);
    });
}

module.exports ={
    getPossiblePaths: getPossiblePaths,
    getWords: getWords
};