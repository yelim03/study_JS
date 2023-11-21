let now = new Date();// 현재 날짜 담기
let firstDay = new Date(`2018-10-16`); // 처음 만난 날짜 담기

let toNow = now.getTime(); //현재 시간을 밀리초로 가져옴
let toFirst = firstDay.getTime(); // 처음만난 날짜를 밀리초로 가져오기
let passedTime = toNow - toFirst; // 현재 밀리초 - 처음만난날 밀리초
let passedDay = Math.ceil(passedTime / (24 * 60 * 60 * 1000)); // 밀리초로 계산된 기간 일수로 바꾸기
document.querySelector(".accent").innerHTML = passedDay + "일째 되는날❤"; //출력
// console.log(passedDay);


function calcDate(days) { // 날짜 계산 함수
  let future = toFirst + days * (24*60*60*1000); //(24*60*60*1000) : 1일을 밀리초로 변환한값
  let someday = new Date(future); // 밀리초로 계산한 일수 담기
  let year = someday.getFullYear(); // 받아온 밀리초에서 년도 가져오기
  let month = someday.getMonth() + 1; // 받아온 밀리초에서 월 가져오기
  let date = someday.getDate(); // 받아온 밀리초에서 일 가져오기
  document.querySelector("#date" + days ).innerHTML = `${year}년 ${month}월 ${date}일`; // 출력
}

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);


//재할당 
// future = toFirst + 200 * (24*60*60*1000); //(24*60*60*1000) : 1일을 밀리초로 변환한값
// someday = new Date(future);
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();
// document.querySelector("#date200").innerHTML = `${year}년 ${month}월 ${date}일`;

// future = toFirst + 365 * (24*60*60*1000); //(24*60*60*1000) : 1일을 밀리초로 변환한값
// someday = new Date(future);
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();
// document.querySelector("#date365").innerHTML = `${year}년 ${month}월 ${date}일`;

// future = toFirst + 500 * (24*60*60*1000); //(24*60*60*1000) : 1일을 밀리초로 변환한값
// someday = new Date(future);
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();
// document.querySelector("#date500").innerHTML = `${year}년 ${month}월 ${date}일`;


