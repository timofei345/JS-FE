
function sortletters(str) {
  let array = str.split('');
  let result = array.sort();
  let stringresult = result.join('');
  return stringresult;
}

document.writeln(sortletters("qwghasdlxc"));


//-*-------------------------------------------------

function LongestWord(str) {
  let words = str.split(' ');

  let result = '';
  
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    
    if (word.length > result.length) {
    result = word;
    }
  }
  return result; }
  document.writeln(LongestWord('Web Development In Telran'));