let date = new Date();

let answer1 = prompt("Введите день:");
let answer2 = prompt("Введите месяц:");

let time = [date.getDate(), date.getMonth()];

if (time[0] < 10) {
  time[0] = "0" + time[0];
}

if (answer1 === String(time[0]) && answer2 === String(time[1] + 1)) {
  alert("С днем рождения!");
}
