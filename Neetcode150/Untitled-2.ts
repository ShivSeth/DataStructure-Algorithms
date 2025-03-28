// function getMinimumTime(n, high_priority, normal_time, priority_time) {
//     const highPrioritySet = new Set(high_priority);

//     function calculateTime(start, end) {
//         let hasHighPriority = false;
//         for (let i = start; i <= end; i++) {
//             if (highPrioritySet.has(i)) {
//                 hasHighPriority = true;
//                 break;
//             }
//         }
//         const length = end - start + 1;
//         return hasHighPriority ? priority_time * length : normal_time;
//     }

//     function findMinTime(start, end) {
//         if (start > end) return 0;
//         if ((end - start + 1) % 2 === 0) {
//             const mid = Math.floor((start + end) / 2);
//             return Math.min(
//                 calculateTime(start, end),
//                 findMinTime(start, mid) + findMinTime(mid + 1, end)
//             );
//         } else {
//             return calculateTime(start, end);
//         }
//     }

//     return findMinTime(1, n);
// }

// // Example usage
// console.log(getMinimumTime(4, [1], 2, 2)); // Output: 6


// const result = [];
// let chapterNumber = 0;
// let sectionNumber = 0;

// text.forEach(line => {
//     if (line.startsWith('# ')) {
//         chapterNumber++;
//         sectionNumber = 0;
//         result.push(`${chapterNumber}. ${line.slice(2)}`);
//     } else if (line.startsWith('## ')) {
//         sectionNumber++;
//         result.push(`${chapterNumber}.${sectionNumber}. ${line.slice(3)}`);
//     }
// });

// return result;


// function getMaximumSumOfStrengths(arr) {
//     let n = arr.length;
//     let maxStrengthSum = 0;

//     // Calculate initial strength
//     for (let i = 0; i < n; i++) {
//         maxStrengthSum += arr[i] * (i + 1);
//     }

//     // Try to improve by swapping
//     for (let i = 0; i < n - 1; i++) {
//         // Calculate current and potential new strength
//         let currentStrength = arr[i] * (i + 1) + arr[i + 1] * (i + 2);
//         let newStrength = arr[i + 1] * (i + 1) + arr[i] * (i + 2);

//         // If swapping improves strength, do it
//         if (newStrength > currentStrength) {
//             maxStrengthSum += newStrength - currentStrength;
//             [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Swap elements
//         }
//     }

//     return maxStrengthSum;
// }

// Example usage:
console.log(getMaximumSumOfStrengths([1, 3, 7, 3, 2])); // Output: 66

// Example usage:
// console.log(getMaximumSumOfStrengths([2, 1, 4, 3])); // Output: 30
console.log(getMaximumSumOfStrengths([1, 3, 7, 3, 2])); // Output: 66


// function getMaximumSumOfStrengths(arr) {
//     let n = arr.length;
//     let maxStrengthSum = 0;

//     // Calculate initial strength
//     for (let i = 0; i < n; i++) {
//         maxStrengthSum += arr[i] * (i + 1);
//     }

//     // Try to improve by swapping
//     for (let i = 0; i < n - 1; i++) {
//         // Calculate current and potential new strength
//         let currentStrength = arr[i] * (i + 1) + arr[i + 1] * (i + 2);
//         let newStrength = arr[i + 1] * (i + 1) + arr[i] * (i + 2);

//         // If swapping improves strength, do it
//         if (newStrength > currentStrength) {
//             maxStrengthSum += newStrength - currentStrength;
//             [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Swap elements
//         }
//     }

//     return maxStrengthSum;
// }

// // Example usage:
// console.log(getMaximumSumOfStrengths([1, 9, 7, 3, 2])); // Output: 66

// function getMaximumSumOfStrengths(arr) {
//     let n = arr.length;
//     let maxStrengthSum = 0;

//     // Calculate initial strength
//     for (let i = 0; i < n; i++) {
//         maxStrengthSum += arr[i] * (i + 1);
//     }

//     let bestGain = 0;
//     let bestIndex = -1;

//     // Evaluate potential swaps
//     for (let i = 0; i < n - 1; i++) {
//         let currentStrength = arr[i] * (i + 1) + arr[i + 1] * (i + 2);
//         let newStrength = arr[i + 1] * (i + 1) + arr[i] * (i + 2);

//         let gain = newStrength - currentStrength;

//         if (gain > bestGain) {
//             bestGain = gain;
//             bestIndex = i;
//         }
//     }

//     // Perform the best swap if beneficial
//     if (bestIndex !== -1) {
//         [arr[bestIndex], arr[bestIndex + 1]] = [arr[bestIndex + 1], arr[bestIndex]];
//         maxStrengthSum += bestGain;
//     }

//     return maxStrengthSum;
// }

// Example usage:
// console.log(getMaximumSumOfStrengths([1, 9, 7, 3, 2])); // Output: 66

// function getMaximumSumOfStrengths(arr) {
//     let n = arr.length;
//     let maxStrengthSum = 0;

//     // Calculate initial strength
//     for (let i = 0; i < n; i++) {
//         maxStrengthSum += arr[i] * (i + 1);
//     }

//     let bestGain = 0;

//     // Evaluate potential swaps
//     for (let i = 0; i < n - 1; i++) {
//         let currentStrength = arr[i] * (i + 1) + arr[i + 1] * (i + 2);
//         let newStrength = arr[i + 1] * (i + 1) + arr[i] * (i + 2);

//         let gain = newStrength - currentStrength;

//         if (gain > bestGain) {
//             bestGain = gain;
//             [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Perform the swap
//             maxStrengthSum += bestGain;
//         }
//     }

//     return maxStrengthSum;
// }

// // Example usage:
// console.log(getMaximumSumOfStrengths([2, 1, 4, 3])); // Output: 30
// console.log(getMaximumSumOfStrengths([1, 9, 7, 3, 2])); // Output: 66

// function getMaximumSumOfStrengths(arr) {
//     const n = arr.length;
//     let initialSum = 0;
    
//     // Calculate the initial sum of strengths
//     for (let i = 0; i < n; i++) {
//         initialSum += arr[i] * (i + 1);
//     }
    
//     let maxSum = initialSum;
    
//     // Try swapping each pair of adjacent elements
//     for (let i = 0; i < n - 1; i++) {
//         // Calculate the difference in sum if we swap arr[i] and arr[i+1]
//         let currentDiff = (arr[i + 1] * (i + 1) + arr[i] * (i + 2)) - (arr[i] * (i + 1) + arr[i + 1] * (i + 2));
        
//         // Update maxSum if this swap increases the sum
//         maxSum = Math.max(maxSum, initialSum + currentDiff);
//     }
    
//     return maxSum;
// }

// // Example usage:
// console.log(getMaximumSumOfStrengths([2, 1, 4, 3])); // Output: 30
// console.log(getMaximumSumOfStrengths([1, 9, 7, 3, 2])); // Output: 66

// function getMaximumSumOfStrengths(arr) {
//     const n = arr.length;
//     let initialSum = 0;

//     // Calculate the initial sum of strengths
//     for (let i = 0; i < n; i++) {
//         initialSum += arr[i] * (i + 1);
//     }

//     let maxSum = initialSum;

//     // Try swapping each pair of adjacent elements
//     for (let i = 0; i < n - 1; i++) {
//         // Calculate the difference in sum if we swap arr[i] and arr[i+1]
//         let currentDiff = (arr[i + 1] * (i + 1) + arr[i] * (i + 2)) - (arr[i] * (i + 1) + arr[i + 1] * (i + 2));

//         // Update maxSum if this swap increases the sum
//         maxSum = Math.max(maxSum, initialSum + currentDiff);
//     }

//     return maxSum;
// }

// // Example usage:
// console.log(getMaximumSumOfStrengths([2, 1, 4, 3])); // Output: 30
// console.log(getMaximumSumOfStrengths([1, 9, 7, 3, 2])); // Output: 66

// function getMaximumSumOfStrengths(arr) {
//     const n = arr.length;
//     let initialSum = 0;

//     // Calculate the initial sum of strengths
//     for (let i = 0; i < n; i++) {
//         initialSum += arr[i] * (i + 1);
//     }

//     let maxSum = initialSum;

//     // Try swapping each pair of adjacent elements
//     for (let i = 0; i < n - 1; i++) {
//         // Calculate the difference in sum if we swap arr[i] and arr[i+1]
//         let currentDiff = (arr[i + 1] * (i + 1) + arr[i] * (i + 2)) - (arr[i] * (i + 1) + arr[i + 1] * (i + 2));

//         // Update maxSum if this swap increases the sum
//         maxSum = Math.max(maxSum, initialSum + currentDiff);
//     }

//     return maxSum;
// }

// // Example usage:
// console.log(getMaximumSumOfStrengths([2, 1, 4, 3])); // Output: 30
// console.log(getMaximumSumOfStrengths([1, 9, 7, 3, 2])); // Output: 66


// function getMaximumSumOfStrengths(arr) {
//     const n = arr.length;
//     if (n === 0) return 0;
//     if (n === 1) return arr[0];

//     const dp = new Array(n).fill(0);
//     dp[0] = arr[0] * 1;
//     for (let i = 1; i < n; i++) {
//         dp[i] = dp[i - 1] + arr[i] * (i + 1);
//         if (i > 1) { // Check for swap possibility
//             dp[i] = Math.max(dp[i], dp[i - 2] + arr[i - 1] * (i + 1) + arr[i] * i);
//         }
//     }
//     return dp[n - 1];

// }


// function getMaximumSumOfStrengths(arr) {
//     const n = arr.length;
//     if (n === 0) return 0;
    
//     const dp = new Array(n).fill(0);
//     dp[0] = arr[0]; // First element contribution
    
//     if (n > 1) {
//         dp[1] = arr[0] * 2 + arr[1]; // Max of using first or second element
//     }

//     for (let i = 2; i < n; i++) {
//         // Option 1: Include the current element with its index contribution
//         dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i] * (i + 1));
//     }

//     return dp[n - 1];
// }

// // Example usage
// console.log(getMaximumSumOfStrengths([2, 1, 4, 3])); // Output: 30
