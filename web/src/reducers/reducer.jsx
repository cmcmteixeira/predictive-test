import {NUMBER_PRESSED,DELETE_PRESSED,WORD_SELECTED} from '../actions/action.jsx'


export default function reducer(state={},action){
    var newState = Object.assign({},state);
    if(action.type == NUMBER_PRESSED){
        newState.sequence = action.sequence;
        newState.predictions = action.predictions;
    } else if(action.type == DELETE_PRESSED){
        newState.sequence = action.sequence.split('1');
        newState.sequence.pop();
        newState.sequence = newState.sequence.join('1');
        newState.sequence = newState.sequence ? newState.sequence + '1' : newState.sequence ;
        newState.predictions = [];
        newState.sentence = newState.sentence || '';
        newState.sentence = newState.sentence.split(' ');
        newState.sentence.pop();
        newState.sentence = newState.sentence.join(' ')

    }
    else if(action.type == WORD_SELECTED){
        newState.predictions = [];
        newState.sequence += '1';
        newState.sentence = newState.sentence || '';
        newState.sentence += (newState.sentence == '' ? '' : ' ') + action.word;
    }
    return newState;
}