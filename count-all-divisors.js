//Count the number of divisors of a positive integer n.

//Random tests go up to n = 500000.

//SOLUTION
function getDivisorsCnt(n){
    let nums = 0
    for(let i =1; i<=n; i++)
      {
        if(n % i === 0){
          nums++
        }
      } return nums
      // todo
  }
  
  