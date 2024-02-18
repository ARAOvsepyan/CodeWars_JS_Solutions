const sum = (n) => {
  const arr = String(n).split('')

  if (arr.length == 1) {
    return Number(arr[0])
  }

  let result = [];

  for (let i = 0, j = arr.length-1; i < Math.floor(arr.length/2); i++, j--) {
    result.push(arr[i] + arr[j])
  }

  const result_sum = result.reduce((s, x) => Number(s) + Number(x))

  return (arr.length) % 2 ? Number(result_sum) + Number(arr[Math.floor(arr.length/2)]) : result_sum
}
