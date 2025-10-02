// 하나의 클래스나 함수, 변수 등을 이 모듈의 '대표'로 내보낼 때 사용
export default class Calculator { // 09_30_01_02_defaultExport.js
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }
}