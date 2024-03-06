"use strict";

/*
Given an array of sorted numbers, use binary search algorithm to find the position in the array where the key can be found

binarySearch([1,3,5,7,9], 3)
*/

const binarySearch = (sortedArray, key) => {
  /*
unlike linear search, the Big O time complexity of the algorithm is log(base 2)n => where n is the number of items in the sortedArray
=============================================================================

the algorithm begins with an initial farLeftPosition and farRightPosition
i.e, farLeftPosition = the first position on the array (at start) && farRightPosition = the last position in the array
i.e, to get the lastPosition, determine the length of the entire array and subtract 1 to get the perfect position index since an array is zero based
i.e, farLeftPosition = 0 and farRightPosition = sortedArray.length - 1
it takes the (farLeftPosition+farRightPosition)/2 as the midPosition 

=====>>>> a loop must run as long as needed to carry out the binary search and stops when the farLeftPosition <= farRightPosition (i.e, farLeftPosition and farRightPosition becomes same and results in a single item in the array)
=====>>>> loop returns either the found targetPosition || -1 when targetPosition isn't found

===============>>>>> for there to be a binary search, there must be atleast two positions (i.e, [farLeftPosition, farRightPosition]) and on a good day [farLeftPosition, siblingPosition, farRightPosition]

Question: but what happens when it's just [singlePosition] ??
==========<<< at this point, farLeftPosition <= farRightPosition, thereby satisfying the 

=====>>>> when the loop finishes without finding the target position, return -1

On first iteration, check if item at midPosition matches the key (sortedArray[midPosition] === key?)

if the sortedArray[midPosition] > key, it means target position is on the LHS. 
Focusing on the LHS, create a new range that stops at midPosition and starts from farLeftPosition
=> update farRightPosition
=> maintain initial farLeftPosition

if the sortedArray[midPosition] < key, it means target position is on the RHS. 
Focusing on the RHS, create new range that starts from midPosition and stops at farRightPosition
=>update farLeftPosition
=> maintain initial 


  */

  let farLeftPosition = sortedArray[0];
  let farRightPosition = sortedArray.length - 1;

  while (farLeftPosition <= farRightPosition) {
    // is the midPositon variable created within the loop as it's only used once to make a decision?
    // unlike the farLeftPosition and farRightPosition that can be maintained per iteration and referenced in the next iteration
    let midPosition = Math.floor((farLeftPosition + farRightPosition) / 2);
    console.log(midPosition);
    if (key === sortedArray[midPosition]) {
      return midPosition;
    }

    // what happens when at the last item/position in the array?

    if (key > sortedArray[midPosition]) {
      farLeftPosition = midPosition + 1;
    } else {
      farRightPosition = midPosition - 1;
    }
  }
  // return -1 when target position is not found
  return -1;
};

// console.log(binarySearch([1, 3, 5, 6, 8, 12, 18, 19, 23, 45, 80], 19));
console.log(binarySearch([1, 3, 5, 7, 9], 3));
