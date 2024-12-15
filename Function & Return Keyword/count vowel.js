// Function to count vowels in a string
function countVowel(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log("Vowels in 'hello world':", countVowel("hello world")); 
console.log("Vowels in 'kuldeep':", countVowel("kuldeep")); 
