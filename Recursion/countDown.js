function countDown(n) {
  if (n <= 0) {
    console.log("It's Done");
    return;
  }
  console.log(n);
  countDown(--n);
}
countDown(5);

// function a() {
//   console.log('in A');
// }

// function b() {
//   a();
//   console.log('in B');
//   console.log(this);
// }

// b();
