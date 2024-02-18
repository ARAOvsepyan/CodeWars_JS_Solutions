const monkeyCount = (n) => {
  const res = [];
  let i = 1;

  while (n--) res.push(i++);
  
  return (res);
}

console.log(monkeyCount(10));