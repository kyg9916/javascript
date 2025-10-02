// HTML 요소들을 변수로 가져오기
const usernameInput = document.getElementById('usernameInput');
const fetchButton = document.getElementById('fetchButton');
const userInfoDiv = document.getElementById('userInfo');

// 버튼을 클릭했을 때 실행될 함수를 만만들기
fetchButton.addEventListener('click', async () => {
    const username = usernameInput.value; // 입력된 GitHub 사용자 ID를 가져오기
    if (!username) { // 사용자 ID가 입력되지 않았다면
        alert('GitHub 사용자 ID를 입력해주세요!');
        return; // 함수를 여기서 종료
    }

    // 사용자 정보 표시 영역을 초기화
    userInfoDiv.innerHTML = '<h2>정보를 불러오는 중...</h2>';

    try {
        // 1. fetch()를 사용하여 GitHub API에 요청을 보내고
        // `await` 키워드를 사용하여 응답이 올 때까지 기다린다
        // fetch()는 Promise를 반환하고, await는 이 Promise가 완료될 때까지 기다렸다가 결과를 반환합니다.
        const response = await fetch(`https://api.github.com/users/${username}`);
        // 예시 URL: https://api.github.com/users/octocat

        // 2. 응답이 성공적인지 확인 (HTTP 상태 코드 200번대)
        // response.ok는 응답이 성공적일 경우 true를 반환합니다.
        if (!response.ok) {
            // 응답이 실패했을 경우 에러를 발생시킵니다.
            // 예를 들어, 없는 사용자 ID를 입력하면 404 Not Found 에러가 발생합니다.
            throw new Error(`HTTP 에러: ${response.status} - ${response.statusText}`);
        }

        // 3. 응답 본문을 JSON 형식으로 파싱합니다.
        // response.json()도 Promise를 반환하므로 `await`로 기다린다.
        // JSON은 JavaScript 객체처럼 생긴 데이터 형식이다.
        const userData = await response.json();
        console.log(userData)

        // 4. 가져온 사용자 정보를 화면에 표시합니다.
        userInfoDiv.innerHTML = `
            <h2>${userData.name || userData.login}</h2>
            <p><strong>ID:</strong> ${userData.login}</p>
            <p><strong>팔로워:</strong> ${userData.followers}</p>
            <p><strong>팔로잉:</strong> ${userData.following}</p>
            <p><strong>공개 저장소:</strong> ${userData.public_repos}</p>
            ${userData.avatar_url ? `<img src="${userData.avatar_url}" alt="${userData.login} 아바타" width="100">` : ''}
            <p><a href="${userData.html_url}" target="_blank">GitHub 프로필 보기</a></p>
        `;

    } catch (error) {
        // 에러가 발생했을 때 처리 (예: 네트워크 연결 문제, API 요청 실패)
        console.error('데이터를 가져오는 중 에러 발생:', error);
        userInfoDiv.innerHTML = `<p style="color: red;">사용자 정보를 불러오는 데 실패했습니다. <br> 에러: ${error.message}</p>`;
    }
});