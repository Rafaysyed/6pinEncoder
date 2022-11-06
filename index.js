document.querySelector("body").style.color = "red";
document.querySelector("input").onkeydown = checkKey;

const input = document.querySelector("input");
const log = document.getElementById("values");
var encryptedArr = [];
var i = 0;
input.addEventListener("input", updateValue);
function updateValue(e) {
  if (e.target.value.length <= 6 && e.which !== 8) {
    encryptedArr.push(e.target.value.charCodeAt(i));

    i += 1;
    if (encryptedArr.length === 1) {
      encryptedArr.push(0);
      log.textContent = encryptedArr.toString().replaceAll(",", "");
    } else if (encryptedArr.length === 3) {
      encryptedArr.push(1);
      log.textContent = encryptedArr.toString().replaceAll(",", "");
    } else if (encryptedArr.length === 5) {
      encryptedArr.push(2);
      log.textContent = encryptedArr.toString().replaceAll(",", "");
    } else if (encryptedArr.length === 7) {
      encryptedArr.push(3);
      log.textContent = encryptedArr.toString().replaceAll(",", "");
    } else if (encryptedArr.length === 9) {
      encryptedArr.push(4);
      log.textContent = encryptedArr.toString().replaceAll(",", "");
    } else if (encryptedArr.length === 11) {
      encryptedArr.push(5);
      log.textContent = encryptedArr.toString().replaceAll(",", "");
    }
  } else {
    document.getElementById("text").style.display = "none";
    btn.removeAttribute("disabled");
    log.textContent = "Greater than 6";
  }
}
// disable backspace
function checkKey(e) {
  e = e || event;
  return !([8, 46].indexOf(e.which || e.keyCode || e.charCode) > -1);
}

// SIMPLE JS Function

// function encrypt() {
//   var i = 0;
//   const encryptedArr = [];
//   const ="033552";

//   do {
//   var char = document.querySelector("input_id").value;
//     i += 1;
//     if (char !== "@") {
//       var ascii = char.charCodeAt(0);
//       encryptedArr.push(ascii);
//       if (encryptedArr.length === 1) {
//         encryptedArr.push(0);
//       } else if (encryptedArr.length === 3) {
//         encryptedArr.push(1);
//       } else if (encryptedArr.length === 5) {
//         encryptedArr.push(2);
//       } else if (encryptedArr.length === 7) {
//         encryptedArr.push(3);
//       } else if (encryptedArr.length === 9) {
//         encryptedArr.push(4);
//       } else if (encryptedArr.length === 11) {
//         encryptedArr.push(5);
//       }
//     } else {
//       // console.log(encryptedArr.toString())
//       return encryptedArr.toString().replaceAll(",", "");
//     }
//   } while (i < 6);
//   return encryptedArr.toString().replaceAll(",", "");
// }
/* encrypt(); */
