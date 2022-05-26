function rot13(message){
    // cipher stored a string
    let cipher = "NOPQRSTUVWXYZABCDEFGHIJKLM"; 
    // convert to lower if message is lower
    let lower = cipher.toLowerCase()
    // store conversions in array 
    let result = [];
  
    for (let i = 0; i < message.length; i++){
      //Convert char to ascii value
      let ascii = message.charCodeAt(i);
      
      // Check if upper with helper function
      if (alphaCheck(ascii)){
        result.push(cipher[ascii - 65]);
      } 
      //Check if lower
      if (alphaCheck(ascii)){
        // e
        result.push(lower[ascii - 97]);
      }
      //Check if !alphabet
      if (!alphaCheck(ascii)){
        result.push(message[i]);
      }
    }
    return result.join("");
  }
  
  // Helper Func to check if message is alphabetical character
  function alphaCheck(ascii){
      if (ascii >= 65 && ascii <= 90 || ascii >= 97 && ascii <= 122){
        return true;
      }
      return false;
  }
    
  /* 
  P: string,
  R: can include none alphabetical chars
  E: 
     rot13(ABCd4) // NOPq4
  P: 
    loop through each letter
    if char is alpha 
      push cipher index to array
    else 
      push message idex to array
  */