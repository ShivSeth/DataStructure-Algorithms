/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  // let value = [triangle[0][0]];
  // let index = 0;
  // for (let i = 1; i < triangle.length - 2; i++) {
  //   value;
  //   let a = value + (triangle[i][index] ? triangle[i][index] : Infinity);
  //   let b =
  //     value + (triangle[i][index + 1] ? triangle[i][index + 1] : Infinity);
  //   let c =
  //     a + (triangle[i + 1][index] ? triangle[i + 1][index + 0] : Infinity);
  //   let d =
  //     a + (triangle[i + 1][index + 1] ? triangle[i + 1][index + 1] : Infinity);
  //   let e =
  //     b + (triangle[i + 1][index + 1] ? triangle[i + 1][index + 1] : Infinity);
  //   let f =
  //     b + (triangle[i + 1][index + 2] ? triangle[i + 1][index + 2] : Infinity);
  //   value = Math.min(c, d, e, f);
  //   if (value === c || value === d) index = index + 0;
  //   else index += 1;
  //   value;
  // }
  // return value;
  //We loop from the bottom towards upwards
  for (let i = triangle.length - 2; i >= 0; i--) {
    let tempArray = triangle[i];
    let tempArray2 = triangle[i + 1];
    for (let j = 0; j < tempArray.length; j++) {
      tempArray[j] = tempArray[j] + Math.min(tempArray2[j], tempArray2[j + 1]);
    }
  }
  triangle;
  return triangle[0][0];
};

// minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]);
minimumTotal([[-1], [2, 3], [1, -1, -3]]);
