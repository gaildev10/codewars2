//Filling an Array

const arr = N => {
    const numbers = [];
    while (N) numbers.unshift(--N);
    return numbers;
  }