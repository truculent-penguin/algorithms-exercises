/*

  Quick Sort!
  
  Name your function quickSort.
  
  Quick sort should grab a pivot from the end and then separate the list (not including the pivot)
  into two lists, smaller than the pivot and larger than the pivot. Call quickSort on both of those
  lists independently. Once those two lists come back sorted, concatenate the "left" (or smaller numbers)
  list, the pivot, and the "right" (or larger numbers) list and return that. The base case is when quickSort
  is called on a list with length less-than-or-equal-to 1. In the base case, just return the array given.

*/

function quickSort(nums) {

  // base case
  if (nums.length < 2) {
    return nums;
  }

  // Choose Pivot 
  const pivot = nums[nums.length - 1]

  // split remaining items into left and right array
  let leftArray = []
  let rightArray = []

  // pivot is last number so don't want to capture it (why nums.length - 1)
  for (let i=0; i<nums.length - 1; i++) {
    if (nums[i] <= pivot) {
      leftArray.push(nums[i])
    } else {
      rightArray.push(nums[i])
    }
  }

  // Call quickSort on leftArray & rightArray
  const sortedLeft = quickSort(leftArray);
  const sortedRight = quickSort(rightArray);


  return sortedLeft.concat(pivot, sortedRight)

  // can combine above three steps with spread operator
  // return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]

}

// unit tests
// do not modify the below code
test.skip("quickSort", function () {
  const input = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
  const answer = quickSort(input);

  expect(answer).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
