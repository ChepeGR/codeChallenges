function solution(input_arr) {
    for (let i = 0; i < input_arr.length - 1; i++) {
        if (input_arr[i] < input_arr[i + 1]) {
            return false;
        }
    }
    return true;
}


const testArray1 = [100, 50, 50, 30, 20, 10]; 
const testArray2 = [100, 50, 60, 30, 20, 10]; 

console.log(solution(testArray1)); 
console.log(solution(testArray2)); 