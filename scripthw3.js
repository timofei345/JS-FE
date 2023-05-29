let array = ["banana", "orange", "kiwi"];
let user = prompt("введите фрукт")
let index = array.indexOf(user);

if (index !== -1) {
    array[index] = "угадал! :)"
    console.log("Массив после изменения:", array);
  } else {
    console.log("нет такого :(");
  }