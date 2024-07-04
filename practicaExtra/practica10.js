function solution(input_arr) {

    input_arr.sort((a, b) => b - a);
    

    return input_arr[1];
}


const array1 = [10, 5, 20, 8, 15];
console.log(solution(array1)); 

const array2 = [100, 200, 50, 300, 150];
console.log(solution(array2)); 