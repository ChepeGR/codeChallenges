//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending){
    // TODO: complete
    if (ending === "") {
        return true;
    }
    
    if (str.length < ending.length) {
        return false; 
    }

    for (let i = 0; i < ending.length; i++) {
        if (str[str.length - ending.length + i] !== ending[i]) {
            return false; 
        }
    }
    return true;
}
console.log(solution("sensei", "seis"))