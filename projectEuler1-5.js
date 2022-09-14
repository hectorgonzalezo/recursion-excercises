// Problem #1 - https://projecteuler.net/problem=1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.
// Find the sum of all the multiples of [...multiples] below number.

function findSumMultiples(number, ...multiples){
    number--
	if(number === 1){
		return 0;
	} else {
		const previousSum = findSumMultiples(number, ...multiples) 
		const isMultiple = multiples.some(multiple => number % multiple === 0)
		if(isMultiple){
			return previousSum + number
		}
		return previousSum
    }
}

// console.log(findSumMultiples(1000, 3, 5));





// Problem #2 - https://projecteuler.net/problem=2
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

function evenFibonacciSum(limit, num = 2, array = [0, 1], sum = 0){

        const fibNum = array[array.length - 1] + array[array.length - 2];
        array = array.concat(fibNum);
        if(fibNum > limit){
            return sum
        }
        if (fibNum % 2 === 0){
            return fibNum + evenFibonacciSum(limit, num++, array, sum)
        } 
        return evenFibonacciSum(limit, num++, array, sum)
    }

// console.log(evenFibonacciSum(4000000))



// Excercise #3 - https://projecteuler.net/problem=3
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

function isPrime(num) {
    if (num == 2 || num == 3)
      return true;
    if (num <= 1 || num % 2 == 0 || num % 3 == 0)
      return false;  
    for (let i = 5; i * i <= num ; i+=6)
      if (num % i == 0 || num % (i + 2) == 0)
        return false;
    return true;
  }

function largestPrimeFactor(num, sum=0){
        const newNum = num -1;
        if(isPrime(num)){
            return num
        }
        return largestPrimeFactor(newNum, sum)
    }
    

// console.log(largestPrimeFactor(97))
// console.log(largestPrimeFactor(13195))
// console.log(largestPrimeFactor(600851475143))


// Problem #4 - https://projecteuler.net/problem=4
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

function isPalindrome(num){
    if(num < 10){
        return false
    }
    const str = num.toString();
    const arr = str.split(''); 
    const arrHalf = Math.floor(arr.length/2)
    const sliced =arr.slice(0, arrHalf)
    return sliced.every(
        (number, i) =>{
            const mirrorIndex = arr.length - 1 - i ;
            return number == arr[mirrorIndex]
        }
    )
}

function hasThreeDigitRemainder(num){
    for(let i = 10; i <= 1000; i ++){
        if((num % i === 0) && ((num/i) < 1000)){
            return true
        }
    }
    return false
}

// Iterative Version
function palindromic3(){
    const highest = 999;
    let highSoFar = 0;
    for (let i = 2; i <= highest; i++){
        for (let j = 2; j <= highest; j++){
            const current = i * j
            if(isPalindrome(current)){
                highSoFar = current;
            }
        }
    }
    return highSoFar
}

// Recursive version
function palindromic3Rec(num=999*999){
    if(isPalindrome(num) && hasThreeDigitRemainder(num)){
        return num
    }
    return palindromic3Rec(num-1)
}

// Theoretically possible, but exceeds call stack
// console.log(palindromic3Rec())
console.log(palindromic3())


// Prolem #5 - https://projecteuler.net/problem=5

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
// Stack overflows for 20

function smallestDivisibleUpTo(num, count=1){
    const arr = Array.from(Array(num+1).keys());
    arr.shift();
    const isDivisibleByEveryNum = arr.every(num => count % num === 0);
    if(isDivisibleByEveryNum){
        return count
    }
    return smallestDivisibleUpTo(num, count + 1)
}

// console.log(smallestDivisibleUpTo(10))