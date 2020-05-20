//Day 3 HackerRank Try, Catch and Finally
//Important methods: split(), join() => string to arr and vice versa
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
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        s = s.split("").reverse().join("");//split used for splitting string into array of substrings and return array, reverse used for arrays and
        // join returns the array as string.
    } catch(e) {
        console.log(e.message);// .message to shorten the output error.
    } finally {
        console.log(s);//prints either the reverse string or original string
    }
}

