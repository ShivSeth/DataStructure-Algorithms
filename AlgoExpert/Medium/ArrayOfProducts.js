function arrayOfProducts({ array }) {
  // Write your code here.
  let output = [];
  let product = 1;
  for (let i = 0; i < array.length; i++) {
    output[i] = product;
    product *= array[i];
  }
  product = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    output[i] = output[i] * product;
    product *= array[i];
  }
  return output;
}

// function arrayOfProducts(array) {
//   // Write your code here.
//   let leftToRightProducts = [1];
//   let rightToLeftProducts = Array(array.length).fill(1);
//   for (let i = 1; i < array.length; i++)
//     leftToRightProducts[i] = leftToRightProducts[i - 1] * array[i - 1];
//   for (let i = array.length - 2; i >= 0; i--)
//     rightToLeftProducts[i] = rightToLeftProducts[i + 1] * array[i + 1];
//   let result = [];
//   for (let i = 0; i < array.length; i++)
//     result.push(leftToRightProducts[i] * rightToLeftProducts[i]);
//   return result;
// }

arrayOfProducts({
  array: [1, 2, 3, 4],
});
