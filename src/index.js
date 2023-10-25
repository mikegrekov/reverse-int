module.exports = function reverse (n) {
    let arr = Math.abs(n).toString().split('').reverse(); 
    let num = Number(arr.join(''));console.log(num);
    return num
  }
