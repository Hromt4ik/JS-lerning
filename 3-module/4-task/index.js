function showSalary(users, age) {
 return users.filter(data => data.age <= age).map(data => `${data.name}, ${data.balance}`).join('\n');
}
