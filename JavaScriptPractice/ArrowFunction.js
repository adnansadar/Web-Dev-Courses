'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */

//  //Simple Way
// function modifyArray(nums) {
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]%2==0){
//             nums[i] = nums[i]*2;
//         }
//         else{
//             nums[i]= nums[i]*3;
//         }
//     }
//     return nums;
// }

// // 2nd Way

// function modifyArray(nums) {
//     for(let i=0;i<nums.length;i++){
//         nums[i]%2==0?nums[i]*=2:nums[i]*=3;
//     }
//     return nums;
// }

// //3rd Way

// function modifyArray(nums) {
//     var newArray = nums.map(n => n = (n%2==0) ? n*2: n*3);
//     return newArray;
// }

//Best Way
function modifyArray(nums) {
    return nums.map(n => n = (n%2==0) ? n*2: n*3);   
}

