function isPalindrome(word) {
  // Write your algorithm here 
  for (i=0 ; i<word.length/2 ; i++){
    const j = word.length-1-i; 
    if(word[i]!==word[j]) return false


  } 
  return true

}

/* 
  Add your pseudocode here 
  I will write a function that will check if the word is plindrome and return true or false if its not 
  at first I want to iterate on the word untill the middle .
*/

/*
  Add written explanation of your solution here 
  ok 
   
  racecar 
  1234567
  0123456     
  i     j

   0123456     
    i   j

    0123456     
      i j

      0123456     
         ij






*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
