function showSalary(users, age) {
  let arr = [];
  users.forEach(data => {
    if (data.age <= age){
      arr.push(`${data.name}, ${data.balance}`);
    }
  });
  return arr.join('\n');
}
