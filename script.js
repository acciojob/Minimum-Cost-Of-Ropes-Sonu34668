// function calculateMinCost() {
//   //your code here
//   let string = document.getElementById("rope-lengths").value
	
// 	let arr = string.split(",");
// 	let finalValue =0;
// 	while(arr.length > 1){
// 		arr.sort((a,b) =>{return(a-b)});
// 		let value = parseInt (arr.shift());
// 		let value1 = parseInt(arr.shift());
// 		let mainValue = value+value1;
// 		finalValue = finalValue + mainValue;
// 		arr.push(mainValue);
		
// 	}
//   let result = document.getElementById("result");
// 	result.innerText = finalValue;
// 	return finalValue;
			
// }
  
function calculateMinCost(arr, n) {
  // Create a min-heap to store the ropes.
  const heap = new PriorityQueue();
  for (let i = 0; i < n; i++) {
    heap.push(arr[i]);
  }

  // Initialize the minimum cost to 0.
  let minCost = 0;

  // While there are more than two ropes in the heap,
  while (heap.size() > 1) {
    // Extract the two smallest ropes from the heap.
    const rope1 = heap.pop();
    const rope2 = heap.pop();

    // Connect the two ropes and add the cost to the minimum cost.
    minCost += rope1 + rope2;

    // Add the combined rope back to the heap.
    heap.push(rope1 + rope2);
  }

  // Return the minimum cost.
  return minCost;
}

// Driver code
const input = document.getElementById("input").value;
const arr = input.split(",");
const n = arr.length;

const minCost = calculateMinCost(arr, n);

document.getElementById("result").innerHTML = minCost;

