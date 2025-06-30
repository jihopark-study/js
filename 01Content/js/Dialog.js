export const Dialog = (id, modal = false) => {
  const dialog = document.querySelector(`[data-dialog=${id}]`);
  const openButton = document.querySelector(`[data-dialog-open=${id}]`);
  const closeButton = document.querySelector(`[data-dialog-close=${id}]`);

  if (!dialog || !openButton || !closeButton) return;

  const init = () => {
    eventBind();
  };
  const eventBind = () => {
    // 1. 팝업열기버튼을 누르면 팝업이 열린다.
    openButton.addEventListener("click", openDailog);

    // 2. 팝업닫기버튼을 누르면 팝업이 닫힌다.
    closeButton.addEventListener("click", closeDialog);
  };

  const openDailog = () => {
    // 3. backdrop 여부에 따라
    modal ? dialog.showModal() : dialog.show();
  };

  const closeDialog = () => {
    dialog.close();
  };

  init();

  // 5. 한페이지에 팝업이 2개 이상일 경우 처리
};
