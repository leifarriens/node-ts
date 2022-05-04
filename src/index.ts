function sum(...args: number[]) {
  return args.reduce((sum, val) => {
    return sum  + val;
  }, 0);
}

console.log(sum(5,7,7,9).toString());
