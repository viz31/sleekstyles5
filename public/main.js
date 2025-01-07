const heading = document.getElementById("typing-heading");
const caret = document.getElementById("typing-caret");
const textArr = ["Men's Wear...", "Women's Wear...", "Kids Wear..."];
let i = 0;
let j = 0;

function type() {
  if (i === textArr.length) {
    i = 0;
  }
  const currentText = textArr[i];
  if (j < currentText.length) {
    heading.innerHTML += currentText.charAt(j);
    j++;
    caret.style.left = heading.offsetWidth + "px";
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1000);
  }
}

function erase() {
  if (j > 0) {
    heading.innerHTML = heading.innerHTML.slice(0, -1);
    j--;
    caret.style.left = heading.offsetWidth + "px";
    setTimeout(erase, 50);
  } else {
    i++;
    if (i === textArr.length) {
      i = 0;
    }
    j = 0;
    setTimeout(type, -5000);
  }
}

document.addEventListener("DOMContentLoaded", type);



