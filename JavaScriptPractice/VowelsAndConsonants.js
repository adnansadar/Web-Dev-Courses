function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    var consonants = '';
    
    for(var i = 0; i < s.length; i++) {
       if (vowels.includes(s[i])) {
           console.log(s[i]);
       }
       else {
           consonants += s[i] + '\n';
       }
    }
    
    console.log(consonants);
}

//2nd Way
// function vowelsAndConsonants(s) {
//     let vowels = ["a", "e", "i", "o", "u"];

//     for(let v of s) {
//         if(vowels.includes(v))
//             console.log(v);
//     }
    
//     for(let v of s) {
//         if(!vowels.includes(v))
//             console.log(v);
//     }
// }