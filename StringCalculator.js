function Add(numbers) {
  if (!numbers) return 0;

  const numArr = numbers.split(',');
  return numArr.reduce((sum, n) => sum + parseInt(n), 0);

}

console.log(Add("1,2"))

module.exports = Add;