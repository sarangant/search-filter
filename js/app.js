const input = document.querySelector('#search');
const items = document.querySelector('.search-list').getElementsByTagName('li');

input.addEventListener('keyup', function(ev) {
  let text = ev.target.value;
  let pat = new RegExp(text, 'i');
  for (let i=0; i < items.length; i++) {
    let item = items[i];
    if (pat.test(item.innerText)) {
      item.classList.remove("hidden");
    }
    else {console.log(item);
      item.classList.add("hidden");
    }
  }
});
