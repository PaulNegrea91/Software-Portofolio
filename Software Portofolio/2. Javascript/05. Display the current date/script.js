const dateElement = document.getElementById("date");
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1;
let yyyy = today.getFullYear();
if (dd<10) {
  dd = `0${dd}`;
}
if (mm<10) {
  mm = `0${mm}`;
} 
const dash1 = `${mm} - ${dd} - ${yyyy}`;
const slash1 = `${mm} / ${dd} / ${yyyy}`;
const dash2 = `${dd}  - ${mm} - ${yyyy}`;
const slash2 = `${dd} / ${mm} / ${yyyy};`
dateElement.innerHTML = `${dash1} <br> ${slash1} <br>${dash2} <br>${slash2}`;