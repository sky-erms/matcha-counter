// document.getElementById("count-el").innerText = 5;
// let count = 0;
// console.log(count);

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let entryCount = 0;

let count = 0;
function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  if (entryCount === 6) {
    saveEl.textContent += count;
  } else if (entryCount > 6) {
    alert(
      "Whoo Hoo! It's the end of the week! I have reset the count for the new week :)"
    );
    reset();
  } else {
    saveEl.textContent += count + " - ";
  }
  count = 0;
  countEl.innerText = count;
  entryCount += 1;
}

function reset() {
  count = 0;
  countEl.innerText = count;
  saveEl.innerText = "Previous entries: ";
  entryCount = 0;
}
