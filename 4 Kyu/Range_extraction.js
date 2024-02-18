const solution = (list) => {
  let matrix_result = [];
  let res = [];
  res.push(list[0]);

  for (let i = 1; i < list.length; i++) {
    if (res[res.length-1] + 1 == (list[i])) {
      res.push(list[i]);
    } else {
      matrix_result.push(res);
      res = [];
      res.push(list[i]);
    }

    if (i == list.length - 1) {
      matrix_result.push(res);
    }
  }

  res = [];

  for (let i = 0; i < matrix_result.length; i++) {
    if (matrix_result[i].length == 1) {
      res.push(`${matrix_result[i][0]}`)
    } else if (matrix_result[i].length == 2) {
      res.push(`${matrix_result[i][0]}`)
      res.push(`${matrix_result[i][1]}`)
    } else {
      res.push(`${matrix_result[i][0]}-${matrix_result[i][matrix_result[i].length-1]}`)
    }
  }

  return res.join(',');
}

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])

