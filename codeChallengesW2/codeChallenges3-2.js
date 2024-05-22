//check if the quote is a Pangram
function checkPangram(string){

    const abecedario= 'abcdefghijklmnñopqrstuvwxyz'.split('');
    const arrayDelString = string.split('');
    let isPanagram = true;

    for(i=0; i < abecedario.length; i++){
        estaEsta = false;
        for(j=0; j < arrayDelString.length; j++){
            if(abecedario[i] == arrayDelString[j]){
                estaEsta = true;
                break
            }
        }
        if(estaEsta == false){
            return false;
        }
    }
    return true;
}