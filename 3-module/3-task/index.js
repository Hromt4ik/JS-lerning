function camelize(str) {
  let str2 = "";
  for(let i = 0; i < str.length; i++){
      if(str[i] === "-"){
        i++;
        str2 += str.slice(i, (i + 1)).toUpperCase();
      }else{
        str2 += str.slice(i , (i + 1));
      }
    }
  return str2;
}
