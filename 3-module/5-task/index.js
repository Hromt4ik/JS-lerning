function getMinMax(str) {
  let arr = str.split(" ");
  let numArr = arr.filter(item => isFinite(item)).map(item => Number(item)).sort((a, b) => a - b);
  let minN = numArr[0];
  let maxN = numArr.pop();
  return {min: minN, max: maxN };
}
