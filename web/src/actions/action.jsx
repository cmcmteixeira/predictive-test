import axios from 'axios'
import config from '../config/config.js'
export const NUMBER_PRESSED ='NUMBER_PRESSED';

export function keyPressed(currentSeq = '',newKey){
    const newSeq = currentSeq + newKey;
    return axios.get(
        `${config.api.word}`,
        {params:{q:newSeq}}
    ).then((response) => {
        return {
            type: NUMBER_PRESSED,
            sequence: newSeq,
            predictions: response.data
        }
    });
}