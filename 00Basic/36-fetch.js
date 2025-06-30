/* -------------------------------------------------------------------------- */
/*                                    Fetch                                   */
/* -------------------------------------------------------------------------- */
// fetch("https://jsonplaceholder.typicode.com/users/")
//   .then((response) => {
//     return response.json(); //배열 데이터로 변환
//   })
//   .then((response) => {
//     console.log(response);
//     document.querySelector(".fetch-list").innerHTML = response
//       .map((item) => {
//         return `
//         <li>
//           <div>이름 : ${item.name}</div>
//           <div>전화번호 : ${item.phone}</div>
//           <div>홈페이지 : ${item.website}</div>
//           <div>이메일 : ${item.email}</div>
//         </li>
//         `;
//       })
//       .join("");
//   });

let loading = true;

const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/");
    const result = await response.json();
    //then을 붙이지 않는다면, async/await 사용
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    // finally에는 오류가 생기든 안생기든 해야할 것을 기입
    console.log("완료되었습니다.");
    loading = false;
  }
};
getUsers();
