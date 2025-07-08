import { NoticeData } from "./NoticeData.js";

const renderList = (target, array) => {
  if (array.length === 0) {
    target.innerHTML = `
    <tr>
        <td colspan="5">검색 된 데이터가 없습니다.</td>
    </tr>

    `;
  } else {
    target.innerHTML = array
      .map(({ id, number, title, writer, date, views }) => {
        return /* html */ `
        <tr>
          <td>${number}</td>
          <td><a href="./learning2-2.html?id=${id}">${title}</a></td>
          <td>${writer}</td>
          <td>${date}</td>
          <td>${views}</td>
        </tr>
      `;
      })
      .join("");
  }
};

const filterData = (keyWord) => {
  const tbody = document.querySelector("#notice tbody"); //함수 두 개 걸쳐서 받는 것보다 그냥 지정

  const result = NoticeData.filter((item) => {
    return item.title.toLowerCase().includes(keyWord);
    // toLowerCase : 모두 소문자화
    //특정 문자열이 포함되어있는지 파악, 있으면 해당되는 것을 배열로 반환
  });
  console.log(result);
  renderList(tbody, result);
  dataLength(result, true);
};

const searchData = () => {
  const form = document.querySelector("form");
  const input = form.querySelector("input");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value.trim();
    if (!value) {
      alert("검색어");
    }
    console.log(value);
    filterData(value);
    input.value = "";
  });
};

const dataLength = (array, search = false) => {
  const text = document.querySelector(".board-info");
  // text.textContent = 배열.length;
  text.innerHTML = `${search ? "검색" : "등록"}된 게시물 <span class="text-red">${
    array.length
  }</span>개`;
};

export const GetParameter = () => {
  const params = new URLSearchParams(window.location.search);
  const keyword = params.get("id");
  console.log(keyword);

  const boardView = document.querySelector(".board-view");

  const result = NoticeData.filter((item) => {
    return item.id.toLowerCase().includes(keyword);
  });

  boardView.innerHTML = result.map(({ title, writer, date, views }) => {
    return /* html */ `

      <div class="board-view mt60">
        <div class="board-view__header">
          <h4 class="board-view__title">${title}</h4>
          <div class="board-view__info">
            <div>${writer}</div>
            <div>${date}</div>
            <div class="view">${views}</div>
          </div>
        </div>
        <div class="board-view__content">
          ${title}
        </div>
        <div class="board-view__paging">
          <a href="">
            <span>이전글</span>
            <p>일이 너무 많아 번아웃이 온 리더들을 육성하는 방법</p>
          </a>
          <a href="">
            <span>다음글</span>
            <p>글이 없습니다.</p>
          </a>
        </div>
      </div>
      
    `;
  });
};

export const Notice = () => {
  const table = document.querySelector("#notice");
  if (!table) return;

  const tbody = table.querySelector("tbody");
  renderList(tbody, NoticeData);
  dataLength(NoticeData); //초기에 필요함 //false
  // 총 몇 개입니다.
  searchData();

  // 게시물 클릭하면 주소가 바뀌는데 파라미터 id값을 가져와서 그 id에 맞는 내용이 나올 수 있도록 한다.
};

// 게시물 이동 시 filter로 location 파라미터
