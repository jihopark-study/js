/* -------------------------------------------------------------------------- */
/*                                   Cookie                                   */
/* -------------------------------------------------------------------------- */
// document.cookie = "a=10";
// document.cookie = "b=10";
// document.cookie = "c=10";
// document.cookie = "c=";
// console.log(document.cookie);

const getCookie = (name) => {
  const cookies = document.cookie.split(";"); //split을 이용해서 세미콜론을 기준으로 배열을 만든다.
  let data = null;
  // console.log(cookies);
  cookies.forEach((item) => {
    if (item.trim().split("=")[0] === name) {
      data = item.trim().split("=")[1];
    }
  });
  return data;
};

const saveCookie = () => {
  const form = document.querySelector(".save-data");
  const input = form.querySelector("input");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value;
    // 쿠키 저장
    document.cookie = `a=${value}`;
    console.log(document.cookie);
  });
};
saveCookie();

// 팝업
const timeDialog = () => {
  const dialog = document.querySelector("dialog");
  const checkBox = dialog.querySelector("input");
  const button = dialog.querySelector("button");

  // console.log(new Date().getTime());
  // 현재시간 100000 미래시간 106000

  // 1초 = 1000;
  // 1분 = 1000 * 60
  // 1시간 = 1000 * 60 * 60
  // 하루 =  1000 * 60 * 60 * 24

  const sec = 1000;
  const sec10 = 1000 * 10;
  const min = 1000 * 60;
  const hour = 1000 * 60 * 60;
  const day = 1000 * 60 * 60 * 24;
  const now = new Date().getTime();
  const setTime = getCookie("notopen");

  // 클릭한 시점의 고정값 >= 현재
  if (setTime < now) {
    console.log("팝업열기");
    dialog.show();
  } else {
    console.log("팝업닫기 유지");
    dialog.close();
  }

  button.addEventListener("click", () => {
    if (checkBox.checked) {
      // 1분 열지 않기
      document.cookie = `notopen=${now + sec10}`;
      // console.log(checkBox.checked);
    }
    dialog.close();
  });
};
timeDialog();

getCookie();
// 과거 클릭한 시점의 시간을 저장해야 하는 거 아닌가?
/* -------------------------------------------------------------------------- */
/*                                Local Storage                               */
/* -------------------------------------------------------------------------- */
const object = {
  name: "jiho",
  age: "38",
  address: "seoul",
};
// localStorage.setItem("key", "value");
// const item = localStorage.getItem("key");
// console.log(item);

localStorage.setItem("user", object); //error
localStorage.setItem("user", JSON.stringify(object));

// fetch 자체가 자동으로 json 파일을 객체나 배열로 바꿔준다
// session은 그렇지 않기 때문에 전환이 필요함.

// localStorage.clear(); 로컬스토리지 삭제

const userData = localStorage.getItem("user");
// console.log(userData); //이렇게는 점표기법으로 조회할 수 없음
const userObject = JSON.parse(userData);
console.log(userObject.name);

/* -------------------------------------------------------------------------- */
/*                               Session Storage                              */
/* -------------------------------------------------------------------------- */
