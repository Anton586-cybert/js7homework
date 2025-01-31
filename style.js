let array = [12, 45, 7, 89, 23, 56, 90, 34, 67, 15];
let max = array[0];
for (let i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}
console.log(max);
