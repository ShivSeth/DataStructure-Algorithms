function runLengthEncoding(string) {
  // Write your code here.
  let str = '';
  let count = 1;
  let temp = string[0];
  for (let i = 1; i < string.length; i++) {
    if (temp === string[i] && count < 9) {
      count++;
    } else {
      str += count + temp;
      count = 1;
      temp = string[i];
    }
  }
  return (str += count + temp);
}

runLengthEncoding('aAaAaaaaaAaaaAAAABbbb');
