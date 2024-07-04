function findUniq(arr) {
    let guardaValor = "";
    for(i=0; i< arr.length; i++){
        if(arr[i] !== arr[i +1] || arr[i -1]){
            guardaValor = arr[i] 
        }
    }
    return guardaValor;
}