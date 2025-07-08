const form = document.querySelector(".login");
const input = form.querySelector("#form-id");
const check = form.querySelector("#save");

const login = () => {
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!check.checked) {
      alert("아이디를 저장하세요");
    }
    if (!input.value.trim()) {
      alert("아이디를 입력하세요");
    }

    // 스토리지 저장하기
    localStorage.setItem("userID", input.value.trim());
    input.value = "";
  });
};
login();

const loadID = () => {
  const userID = localStorage.getItem("userID");
  console.log(userID);
  input.value = userID;
  input.focus(); //또는 html에 autofucous 속성을 추가해준다.
  // fucous를 강제로 주는 건 접근성 오류일 수 있기 때문에 사용 시 주의가 필요하다.
};
loadID();
