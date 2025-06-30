export const Tab2 = (id, option = {}) => {
  const config = {
    activeClass: "active",
    tabGroup: "data-tab",
    tabItem: "data-tab-item",
    tabContentGroup: "data-tab-contents",
    tabContentItem: "data-tab-content",
  };

  const tabs = document.querySelectorAll(`[${config.tabGroup}="${id}"] [${config.tabItem}]`);
  const contents = document.querySelectorAll(
    `[${config.tabContentGroup}="${id}"] [${config.tabContentItem}]`
  );
  // if (tabs.length === 0) {
  //   return;
  // }
  // if (contents.length === 0) {
  //   return;
  // }

  if (tabs.length === 0 || contents.length === 0) {
    return;
  }

  const removeClass = (arry) => {
    arry.forEach((el) => {
      el.classList.remove("active");
    });
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
      // 1. 탭메뉴 클릭하면 클릭하지 않은것은 비활성화
      // tabs.forEach((el) => {
      //   el.querySelector("button").classList.remove("active");
      // });
      removeClass(tabs);

      // 2. 탭메뉴 클릭하면 활성화
      tab.classList.add("active");
      // current.target.classList.add("active");

      // 3. 탭메뉴 클릭하면 그에 모든 내용이 비활성화
      removeClass(contents);

      // 4. 탭메뉴 클릭하면 그에 맞는 내용이 활성화
      contents[index].classList.add("active");
    });
  });
};
