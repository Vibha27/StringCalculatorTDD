function Add(numbers) {
  if (!numbers) return 0;

  const numArr = numbers.split(/[\n,]+/).filter(num => num != "");
  console.log(numArr)
  return numArr.reduce((sum, n) => sum + parseInt(n), 0);

}

console.log(Add("1,2\n3"))

module.exports = Add;