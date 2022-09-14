
function mergeSort(array){
	const arrayLength = array.length;
	if(arrayLength === 1){
		// Base case
		return array
	} else {
		// Recursive case
		const halfPoint = Math.round(arrayLength/2);
		const leftSide = array.slice(0, halfPoint);
		const rightSide = array.slice(halfPoint, arrayLength);

		// Recursive call
		const mergedLeft = mergeSort(leftSide);
		const mergedRight = mergeSort(rightSide);

		let resultArray = []

		// Initialize pointers
		let leftIndex =  0;
		let rightIndex =  0;
		// Go through merged halves by advancing using pointers
		while(leftIndex !== (mergedLeft.length) &&  rightIndex !== (mergedRight.length)){
			if(mergedLeft[leftIndex] < mergedRight[rightIndex]){
				resultArray.push(mergedLeft[leftIndex]);
				leftIndex++
			} else  {
				resultArray.push(mergedRight[rightIndex]);
				rightIndex++
			}
		}
		//if theres something remaining, its already sorted. So add it to resultArray
		if(leftIndex < (mergedLeft.length)){
			resultArray = resultArray.concat(mergedLeft.slice(leftIndex, halfPoint))
		} else if(rightIndex < (mergedRight.length)){
			resultArray = resultArray.concat(mergedRight.slice(rightIndex, halfPoint));
		}

		return resultArray
		}
}


console.log(mergeSort([1, 10, 8, 3,  2, 4, 7, 9, 5, 6])) // Result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(mergeSort([1, 2.1, -3, 800000, 3.2, Math.PI, 9007199254740991n, -4.99999, 80, 9, -5, 3, 2 ]))
// Result = [-5, -4.99999, -3, 1, 2, 2.1, 3, 3.141592653589793, 3.2, 9, 80, 800000, 9007199254740991n]
