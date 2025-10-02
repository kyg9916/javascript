/*// 덧셈 함수를 정의 // 09_30_01_module.js
function add(a, b) {
    return a + b;
}

// 뺄셈 함수를 정의
function subtract(a, b) {
    return a - b;
}

// 두 함수를 밖으로 내보내기
export { add, subtract };*/

// 2. 다른 방식의 export
export function add(a, b) { // 함수를 정의함과 동시에 내보내기
    return a + b;
}

export function subtract(a, b) { // 함수를 정의함과 동시에 내보내기
    return a - b;
}

// 3. 09_30_01_02_defaultExport.js 에서 default export 가져오기

// default export는 중괄호 {} 없이 원하는 이름으로 가져올 수 있다. 여기서는 한번 Calculator 이라 해볼까?
import Calculator from './09_30_01_02_defaultExport.js';

// 명명된 내보내기 (Named Export)와 default export를 한 파일에서 동시에 가져올 수도 있다.

const calcInstance = new Calculator(); // Calculator 클래스를 사용하여 객체 생성

console.log(`클래스 덧셈: ${calcInstance.add(20, 10)}`); // 출력: 30
console.log(`클래스 뺄셈: ${calcInstance.subtract(20, 10)}`); // 출력: 10