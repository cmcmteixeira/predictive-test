import {NUMBER_PRESSED,DELETE_PRESSED} from '../actions/action.jsx'


export default function reducer(state={},action){
    var newState = Object.assign({},state);
    if(action.type == NUMBER_PRESSED || action.type == DELETE_PRESSED){
        newState.sequence = action.sequence;
        newState.predictions = action.predictions;
    }
    return newState;
}