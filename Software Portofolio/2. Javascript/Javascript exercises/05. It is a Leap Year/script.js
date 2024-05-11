const leapYear = document.getElementById("leap");
const date = new Date();
const year = date.getFullYear();
if  (year % 4 === 0) {
leapYear.innerHTML = `${year} it is a leap year`;
} else {
  leapYear.innerHTML = `${year} it is not a leap year`;
}
if (year % 100 === 0 & year % 400 === 0) {
  leapYear.innerHTML = `${year} is a leap year`;
}
