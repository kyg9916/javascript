// 09_30_01_01_import.js
import { add, subtract } from './09_30_01_module.js';

// 가져온 함수들을 사용
const num1 = 10;
const num2 = 5;

const sum = add(num1, num2); // add 함수 사용
const difference = subtract(num1, num2); // subtract 함수 사용

console.log(`두 숫자의 합: ${sum}`); // 출력: 두 숫자의 합: 15
console.log(`두 숫자의 차이: ${difference}`); // 출력: 두 숫자의 차이: 5

// DOM (문서 객체 모델)을 조작하여 결과를 웹 페이지에 표시
document.addEventListener('DOMContentLoaded', () => {
    const resultDiv = document.getElementById('result');
    if (resultDiv) {
        resultDiv.innerHTML = `
      <p>덧셈 결과: ${sum}</p>
      <p>뺄셈 결과: ${difference}</p>
    `;
    }
});