function Add(numbers) {
  if (!numbers) return 0;

  const numArr = numbers.split(/[//\n,;*\[\]%]+/).filter(num => num != "");
  console.log(numArr)
  const negativeArr = numArr.filter(num => num < 0);

  if (negativeArr.length > 0) {
    throw new Error(`negative numbers not allowed ${negativeArr.join(",")}`)
  }

  return numArr
        .map(n => parseInt(n))
        .filter(n => n <= 1000)
        .reduce((sum, n) => sum + n, 0);

}

console.log(Add("//[***]\n1***2***3"))

module.exports = Add;