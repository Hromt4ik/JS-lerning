function getMinMax(str) {
function compareNumeric(a, b){
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
   }
  let outObj = {
    min : 0,
    max : 0
  }
  let arr = str.split(" ");
  let numArr = arr.filter(item => isFinite(item)).map(item => Number(item)).sort(compareNumeric);
  outObj.min = numArr[0];
  outObj.max = numArr.pop();
  return outObj;
}
