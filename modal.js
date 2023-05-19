export default function Modal() {
  const dialog = document.getElementById('dialog');
  const dialogOpen = document.getElementById('open-dialog');
  const dialogClose = document.getElementById('close-dialog');

  function showDialog() {
    dialog.showModal();
  }

  function closeDialog() {
    dialog.close();
  }

  if (dialogOpen) {
    dialogOpen.addEventListener('click', showDialog);
  }

  if (dialogClose) {
    dialogClose.addEventListener('click', closeDialog);
  }
}
