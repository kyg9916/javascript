// 09_22_03_lunch_menu.js

let today = "수요일"; // 오늘의 요일을 설정해요. 다른 요일로 바꿔봐

console.log("오늘은 " + today + "!");
console.log("오늘의 급식 메뉴는...");

switch (today) {
    case "월요일":
        console.log("맛있는 돈가스 튀김");
        console.log("후식은 바나나 우유");
        break; // 여기서 멈추고 switch 문을 빠져나감

    case "화요일":
        console.log("든든한 소고기 미역국과 불고기");
        console.log("후식은 귤");
        break;

    case "수요일":
        console.log("매콤한 닭갈비 덮밥");
        console.log("후식은 요구르트");
        break;

    case "목요일":
        console.log("싱싱한 해물 파스타");
        console.log("후식은 조각 케이크");
        break;

    case "금요일":
        console.log("기다리고 기다리던 피자!");
        console.log("후식은 콜라");
        break;

    default: // 위에 어떤 요일과도 일치하지 않을 때 (예: "토요일", "일요일")
        console.log("오늘은 급식 없어요!");
        break;
}

console.log("맛있게 드세요!");



// switch 문을 이용해 입력받은 월에 따라 계절 출력
switch (month) {
    case 3:
    case 4:
    case 5:
        console.log("봄입니다.");
        break;
    case 6:
    case 7:
    case 8:
        console.log("여름입니다.");
        break;
    case 9:
    case 10:
    case 11:
        console.log("가을입니다.");
        break;
    case 12:
    case 1:
    case 2:
        console.log("겨울입니다.");
        break;
    default:
        console.log("잘못된 입력입니다.");
        break;
}