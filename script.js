function minimumCostOfRopes(ropes) {
  // Create a min heap of rope lengths
  const heap = new MinHeap(ropes);
  
  // Connect ropes until only one rope remains
  let cost = 0;
  while (heap.size() > 1) {
    const rope1 = heap.extract(); // Get the shortest rope
    const rope2 = heap.extract(); // Get the second shortest rope
    const newRope = rope1 + rope2; // Connect the two ropes
    cost += newRope; // Add the cost of connecting the two ropes
    heap.insert(newRope); // Insert the new rope back into the heap
  }
  
  return cost;
}