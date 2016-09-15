import axios from 'axios'
import config from '../config/config.js'
import _ from 'lodash'

export const NUMBER_PRESSED ='NUMBER_PRESSED';
export const DELETE_PRESSED ='DELETE_PRESSED';
export const WORD_SELECTED = 'WORD_SELECTED';

function getQueryWord(sequence){
   return _.last(sequence.split('1'))
}


export function keyPressed(currentSeq = '',newKey){
    const newSeq = currentSeq + newKey;
    return axios.get(
        `${config.api.word}`,
        {params:{q:getQueryWord(newSeq)}}
    ).then((response) => {
        return {
            type: NUMBER_PRESSED,
            sequence: newSeq,
            predictions: response.data
        }
    });
}
export function deleteChar(currentSeq = ''){
    const newSeq = currentSeq.substring(0, currentSeq.length - 1);
    return axios.get(
        `${config.api.word}`,
        {params:{q:getQueryWord(newSeq)}}
    ).then((response) => {
        return {
            type: DELETE_PRESSED,
            sequence: newSeq,
            predictions: response.data
        }
    });
}

export function selectWord(word){
    return {
        type: WORD_SELECTED,
        word: word
    }
}