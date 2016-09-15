


export const NUMBER_PRESSED ='NUMBER_PRESSED';

export function keyPressed(currentSeq = '',newKey){
    return {
        type: NUMBER_PRESSED,
        sequence: currentSeq+newKey,
        predictions: ['pred1','pred2','pred3']
    }
}