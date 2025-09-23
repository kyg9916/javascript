// road_function.js

function hi() {
    console.log("안녕하세요")
}


function addNumbers() {
    let num1 = 10;
    let num2 = 20;
    let sum = num1 + num2;
    // console.log("두 숫자의 합: " + sum);
    return sum // sum 의 값을 외부 함수로 돌리기
}

let result = addNumbers();
console.log("계산결과", result)


