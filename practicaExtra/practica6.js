//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
    // Go for it
    let strToArray = str.split(' ');
    let arrayGuardaValor = [];

    for(i=0; i< strToArray.length; i++){
        let guardaValor = strToArray[i].split('').reverse().join('');
        arrayGuardaValor.push(guardaValor)

    }
    let resultado = arrayGuardaValor.join(' ');
    return resultado;

  }

  reverseWords("This is an example!")