function Add(numbers) {
  if (!numbers) return 0;

  const numArr = numbers.split(/[//\n,;]+/).filter(num => num != "");
  
  const negativeArr = numArr.filter(num => num < 0);

  if (negativeArr.length > 0) {
    throw new Error(`negative numbers not allowed ${negativeArr.join(",")}`)
  }

  return numArr.reduce((sum, n) => sum + parseInt(n), 0);

}

// console.log(Add("//;\n-1;-2"))

module.exports = Add;