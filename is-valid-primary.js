/******************
 * YOUR CODE HERE *
 ******************/

function isValidPrimary(primary){
  if (primary === 'red' || primary === 'yellow' || primary === 'blue'){
    return true
    }  
    else {
      return false
    }
}

// Our setup code here. Don't touch!
if(typeof isValidPrimary === 'undefined') {
  isValidPrimary = undefined;
}

module.exports = isValidPrimary;
