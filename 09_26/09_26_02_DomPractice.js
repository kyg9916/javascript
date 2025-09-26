// 1. ID로 요소 선택하기
const mainTitle = document.getElementById('main-title');
console.log('ID로 찾은 제목:', mainTitle); // 찾은 요소가 콘솔에 출력한다.

// 2. Class 이름으로 요소들 선택하기 (여러 개가 될 수 있음)
const paragraphs = document.getElementsByClassName('my-paragraph');
console.log('Class 이름으로 찾은 문단들:', paragraphs);
// paragraphs는 HTMLCollection 이라는 배열과 비슷한 형태이므로,
// 특정 요소에 접근하려면 paragraphs[0], paragraphs[1] 처럼 인덱스를 사용해야 한다.
console.log('첫 번째 문단 (클래스):', paragraphs[0]);

// 3. Tag 이름으로 요소들 선택하기 (여러 개가 될 수 있음)
const allParagraphsByTag = document.getElementsByTagName('p');
console.log('Tag 이름으로 찾은 모든 문단들:', allParagraphsByTag);

// 4. CSS 선택자로 요소 하나 선택하기 (가장 먼저 발견된 하나)
const firstParagraphByQuery = document.querySelector('.my-paragraph');
console.log('querySelector로 찾은 첫 번째 문단:', firstParagraphByQuery);

const button = document.querySelector('#change-button');
console.log('querySelector로 찾은 버튼:', button);

// 5. CSS 선택자로 요소들 모두 선택하기
const allParagraphsByQueryAll = document.querySelectorAll('.my-paragraph');
console.log('querySelectorAll로 찾은 모든 문단들:', allParagraphsByQueryAll);

// 6. 요소의 텍스트 내용 변경하기 (textContent)
mainTitle.textContent = 'DOM 조작이 이렇게 쉬울 수가!';

// 7. 첫 번째 문단의 내용 변경하기 (innerHTML) - HTML 태그도 인식
paragraphs[0].innerHTML = '이 문단의 <span style="color:red; font-weight:bold;">내용이 바뀌었습니다!</span>';

// (참고) 두 번째 문단을 아예 없애볼까요?
// document.body.removeChild(paragraphs[1]); // 이건 좀 더 어려운 내용

// 8. 제목의 스타일 변경하기
mainTitle.style.color = 'blue'; // 글씨 색깔을 파란색으로
mainTitle.style.backgroundColor = '#e0e0e0'; // 배경 색깔 변경
mainTitle.style.padding = '10px'; // 안쪽 여백 추가
mainTitle.style.borderRadius = '8px'; // 모서리 둥글게

// 9. 두 번째 문단의 스타일 변경 (사라지게 하기)
if (paragraphs[1]) { // 두 번째 문단이 존재한다면 (이전에 삭제하지 않았다면)
    paragraphs[1].style.display = 'none'; // 화면에서 안 보이게 숨기기
}

// 10. 버튼 클릭 이벤트 처리하기
button.addEventListener('click', function() {
    // 버튼이 클릭되면 실행될 코드
    console.log('버튼이 클릭되었습니다!');

    // 첫 번째 문단의 내용 다시 바꾸기
    firstParagraphByQuery.textContent = '버튼을 클릭하여 내용이 또 바뀌었어요!';
    firstParagraphByQuery.style.color = 'green';

    // 새로운 요소를 만들어서 추가해보기
    const newItemContainer = document.getElementById('new-item-container');

    // div 요소를 새로 만들기
    const newDiv = document.createElement('div');
    newDiv.textContent = '짠! 새로 추가된 아이템입니다.';
    newDiv.style.backgroundColor = '#f0f8ff';
    newDiv.style.padding = '8px';
    newDiv.style.marginTop = '5px';
    newDiv.style.borderLeft = '4px solid #007bff';

    // 새로 만든 div를 컨테이너에 추가한다.
    newItemContainer.appendChild(newDiv);
});
