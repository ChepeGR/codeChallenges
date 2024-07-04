//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
//If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(array) {
    let contadorPositivos = 0;
    let sumadorNegativos = 0;

    if(array == null || array == [] ){
        return [];
    }
    
    for(i=0; i< array.length; i++){
        if(array[i] == 0){
         
        }
        if(array[i] > 0){
            contadorPositivos++;
            
        }else if(array[i] < 0){
            sumadorNegativos += array[i]; 
        }
    }
    return [contadorPositivos, sumadorNegativos]
    // your code here
  }
  array = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
  console.log(countPositivesSumNegatives(array))