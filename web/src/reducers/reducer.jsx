import {NUMBER_PRESSED} from '../actions/action.jsx'


export default function reducer(state={},action){
    var newState = Object.assign({},state);
    if(action.type == NUMBER_PRESSED){
        newState.sequence = action.sequence;
        newState.predictions = action.predictions;
    }
    return newState;
}