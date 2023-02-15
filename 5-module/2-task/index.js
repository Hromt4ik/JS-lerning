function toggleText() {
  const button = document.querySelector(".toggle-text-button");
  button.addEventListener('click', () => {
    let txt = document.getElementById('text');
    txt.hidden = !txt.hidden;
  });

}
