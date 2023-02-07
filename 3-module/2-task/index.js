function filterRange(arr, a, b) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      arr2.push(arr[i]);
    }
  }
  return arr2;
}
