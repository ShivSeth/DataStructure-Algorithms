function caesarCipherEncryptor(string, key) {
  // Write your code here.
  let str = '';
  for (let i = 0; i < string.length; i++) {
    let k = string.charCodeAt(i) + (key % 26);
    str += String.fromCharCode(k < 123 ? k : (k % 122) + 96);
  }
  return str;
}

caesarCipherEncryptor('ovmqkwtujqmfkao', 52);
