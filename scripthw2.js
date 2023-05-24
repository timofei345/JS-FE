let date = new Date();

let time = [ date.getDate(), date.getMonth(), date.getFullYear()];

let months = date.getMonth();
let xmonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

if( time[0] < 10 ){
    time[0] = "0" + time[0];
};

let today = [time[0], xmonths[months], time[2]].join(".");

console.log("Date: ",today)


let answer = prompt("Введите дату рождения(Example: 01.January.2001):");

if (answer === today){

    alert("С днем рождения!")
};

