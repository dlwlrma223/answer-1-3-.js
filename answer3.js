const calcu = (n) => {
  if (n < 2) {
    throw new Error("Invalid input");
  }

  let cur = 0;
  let i = 2;

  while (i <= n) {
    cur += 1 / (i * (i - 1));
    i++;
  }

  return cur;
};
