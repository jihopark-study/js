export const Dialog = (id, modal) => {
  const dialog = document.querySelector(`[data-dialog=${id}]`);
  const openButton = document.querySelector(`[data-dialog-open=${id}]`);
  const closeButton = document.querySelector(`[data-dialog-close=${id}]`);

  if (!dialog || !openButton || !closeButton) return;

  const init = () => {
    eventBind();
  };

  const eventBind = () => {
    openButton.addEventListener("click", openDialog);
    closeButton.addEventListener("click", closeDialog);
  };

  const openDialog = () => {
    modal ? dialog.showModal() : dialog.show();
  };

  const closeDialog = () => {
    dialog.close();
  };

  init();
};
