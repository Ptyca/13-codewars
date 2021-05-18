function summation(num) {
    let suma = 0;
    for (let i=0; i <= num.length;i++){
        suma += i;
    }
    return suma;
  }

console.log(summation(1), 1);
console.log(summation(8), 36)