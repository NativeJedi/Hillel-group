const addButton = document.getElementById('add-button');
const input = document.getElementById('input');
const ol = document.getElementById('List');
const delButton = document.getElementById('del-button');
// const output = document.getElementById('output');
function adLiOnList() {
  const liLast = document.createElement('li');
  liLast.innerHTML = input.value;
  input.value = '';
  ol.append(liLast);
}

addButton.addEventListener('click', () => {
  if (input.value !== '') {
    adLiOnList();
  }
});

input.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    e.preventDefault();
    if (input.value !== '') {
      e.preventDefault();
      adLiOnList();
    }
  }
});
delButton.addEventListener('click', () => {
});
