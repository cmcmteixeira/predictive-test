import {NUMBER_PRESSED,DELETE_PRESSED,WORD_SELECTED} from '../actions/action.jsx'

function splitPopJoin(seq,char){
    seq = seq.split(char);
    seq.pop();
    seq = seq.join(char);
    return seq
}

export default function reducer(state={},action){
    var newState = Object.assign({},state);
    if(action.type == NUMBER_PRESSED){
        newState = Object.assign(newState,{
            sequence: action.sequence,
            predictions:action.predictions
        });
    } else if(action.type == DELETE_PRESSED){
        newState.sequence = splitPopJoin(action.sequence,'1');
        newState.sentence = splitPopJoin(newState.sentence,' ');
        newState.sequence = newState.sequence.length ? newState.sequence + '1' : newState.sequence;
        newState.predictions = [];
        newState.sentence = newState.sentence || '';
    }
    else if(action.type == WORD_SELECTED){
        newState.predictions = [];
        newState.sequence += '1';
        newState.sentence = newState.sentence || '';
        newState.sentence += (newState.sentence == '' ? '' : ' ') + action.word;
    }
    return newState;
}