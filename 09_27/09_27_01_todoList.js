// 1. 필요한 HTML 요소들을 가져오기
// document.getElementById()는 HTML에서 id 속성을 이용해서 특정 요소를 찾아 온다.
const todoInput = document.getElementById('todo-input'); // 할 일을 입력하는 입력창
const addButton = document.getElementById('add-button');   // '추가' 버튼
const todoList = document.getElementById('todo-list');     // 할 일 목록이 들어갈 <ul> 태그

// 2. '추가' 버튼을 클릭했을 때 무슨 일이 일어날지 정하기
// addEventListener는 특정 이벤트(여기서는 'click')가 발생했을 때 지정된 함수를 실행
addButton.addEventListener('click', addTodo);

// 3. 입력창에서 Enter 키를 눌렀을 때도 할 일을 추가하도록 설정하기 ('keypress')
todoInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') { // 눌린 키가 'Enter' 키인지 확인
        addTodo(); // addTodo 함수 실행
    }
});

// 4. 할 일을 추가하는 함수를 만들기
function addTodo() {
    const todoText = todoInput.value.trim(); // 입력창에 있는 글자를 가져오고, 앞뒤 공백을 제거 (trim)

    // 입력된 글자가 비어있으면 아무것도 하지 않고 함수를 종료
    if (todoText === '') {
        alert('할 일을 입력해주세요!'); // 사용자에게 알림 메시지
        return; // 함수를 여기서 끝내기
    }

    // 5. 새로운 할 일 항목(<li> 태그)
    const listItem = document.createElement('li'); // <li> 태그를 새로 만들기
    listItem.textContent = todoText; // <li> 태그 안에 사용자가 입력한 글자를 넣기

    // 6. 할 일 항목을 클릭하면 완료 상태를 토글하도록 합니다. (toggle)
    listItem.addEventListener('click', function() {
        // classList.toggle()은 해당 요소에 'completed' 클래스가 있으면 제거하고, 없으면 추가
        listItem.classList.toggle('completed');
    });

    // 7. 삭제 버튼을 만들기
    const deleteButton = document.createElement('button'); // <button> 태그를 새로 만들기
    deleteButton.textContent = '삭제'; // 버튼 안에 '삭제'라는 글자를 넣습니다.
    deleteButton.classList.add('delete-button'); // CSS에서 꾸며줄 수 있도록 'delete-button' 클래스를 추가

    // 8. 삭제 버튼을 클릭했을 때 해당 할 일을 삭제
    deleteButton.addEventListener('click', function(e) {
        e.stopPropagation(); // 이벤트를 상위 요소(listItem)로 전파되는 것을 막는다.
                             // 이렇게 해야 삭제 버튼 클릭 시 listItem의 클릭 이벤트가 발생하지 않는다.
        todoList.removeChild(listItem); // todoList(<ul>)에서 listItem(<li>)을 제거
    });

    // 9. 삭제 버튼을 할 일 항목(<li>)에 추가
    listItem.appendChild(deleteButton); // listItem 안에 deleteButton을 자식으로 넣기

    // 10. 새로운 할 일 항목(<li>)을 할 일 목록(<ul>)에 추가
    todoList.appendChild(listItem); // todoList(<ul>) 안에 listItem(<li>)을 자식으로 넣기

    // 11. 입력창을 비우고, 다시 입력할 준비
    todoInput.value = ''; // 입력창의 내용을 비우기
    todoInput.focus();    // 입력창에 커서를 다시 놓아서 바로 다음 할 일을 입력할 수 있게 한다.
}