"use strict";

/*
Binary Search Algorithm (Only works on a sorted list!):
Given a sorted array of numbers, this function finds the position of a target key using binary search.

Algorithm Steps:
1. Initialize farLeftPosition to the first index of the array (0) and farRightPosition to the last index (array.length - 1).
2. Repeat the following steps while farLeftPosition is less than or equal to farRightPosition:
   a. Calculate midPosition as the midpoint between farLeftPosition and farRightPosition (farLeftPosition+farRightPosition/2)
   b. If the key matches the value at midPosition, return midPosition.
   c. If the key is greater than the value at midPosition, set farLeftPosition to midPosition + 1 to search the right half.
   d. If the key is less than the value at midPosition, set farRightPosition to midPosition - 1 to search the left half.
3. If the loop finishes without finding the target, return -1.

Analogy:
Imagine the sorted array to be a number line. 
On the number line, we have a range of values from 1 - 12
Our key within the range is 10

If we take our initial midPosition and realize the value at that midPosition is not the key and is greater than the key, what should be done?

Ideally, that means our target position is on the LHS.
Also, that means the current midPosition would mark the end of the range since it's greater than kay
Which also means we would maintain our initial farLeftPosition but update farRightPosition

I.e, farLeftPosition = 0 but farRightPosition = midPosition - 1 (reducing by 1 because the current midPosition is greater. Therefore, the target value can only exist in a number that's atleast 1 less than current midPosition value)


*/

const binarySearch = (sortedList, targetKey) => {
  // initialize farLeftPosition and farRightPosition in the list
  let farLeftPosition = 0;
  let farRightPosition = sortedList.length - 1;

  //   while farLeftPosition <= farRightPosition, run the loop and search for targetPosition
  //  the condition also implies that the search would happen till there's no item left in the list/range
  while (farLeftPosition <= farRightPosition) {
    // because a new midPosition must be determined at each iteration, keep at the top of loop. WHAT HAPPENS WHEN KEPT OUTSIDE THE LOOP??
    // trunc out the decimal part so midPosition matches existing positions in the list (since they are whole numbers)
    let midPosition = Math.floor((farLeftPosition + farRightPosition) / 2);

    if (sortedList[midPosition] === targetKey) {
      return midPosition;
    }

    if (sortedList[midPosition] > targetKey) {
      // an indication that the targetKey is at the LHS of midPosition => farRightPosition = midPosition-1
      farRightPosition = midPosition - 1;
    } else {
      farLeftPosition = midPosition + 1;
    }
  }

  return -1;
};

// console.log(binarySearch([1, 3, 5, 7, 9], 3));
