// Non-recursive solution to the fibonacci sequence question. 

function fibs(num){
	let array = [0, 1]
	if (num === 1) return array[0];
	for(let i = 2; i < num; i++){
		array.push(array[i-2] + array[i-1])
	}
	return array
}

console.log(fibs(1)); // returns [0]
console.log(fibs(2)); // returns [0, 1]
console.log(fibs(8)); // returns [0, 1, 1, 2, 3, 5, 8, 13]


// Recursive version!

function fibsRec(num){
    if(num === 1){
        return [0]
    } else if(num ===2 ){
        return [0, 1]
    } else {
        const previous = fibsRec(num-1);
        return previous.concat(previous[previous.length - 1] + previous[previous.length - 2])
    }
}


console.log(fibsRec(1)); // returns [0]
console.log(fibsRec(2)); // returns [0, 1]
console.log(fibsRec(8)); // returns [0, 1, 1, 2, 3, 5, 8, 13]
