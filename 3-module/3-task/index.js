function camelize(str) {
  str = str.split('-');
  return str.map((item, index) => !index ? item : item[0].toUpperCase() + item.slice(1)).join("");
}
