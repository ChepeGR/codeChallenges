function fakeBin(x){
    let cadenaX = x.split('');
    for(i=0; i< cadenaX.length; i++){
        if(cadenaX[i] >= 5){
             cadenaX[i] = 1;
        } else{
             cadenaX[i] = 0;
        }
    
    }
    return cadenaX.join('');
   
}
console.log(fakeBin('45385593107843568'), '01011110001100111')