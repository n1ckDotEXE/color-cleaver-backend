/******************
 * YOUR CODE HERE *
 ******************/

function colorCombinator(str1, str2){
  const red = str1 === 'red' || str2 === 'red';
  const yellow = str1 === 'yellow' || str2 === 'yellow';
  const blue = str1 === 'blue' || str2 === 'blue';

  if (red && yellow) {
      return 'orange'
  } else if ( red && blue) {
      return 'purple'
  } else if ( yellow && blue) {
      return 'green'
  } return 'Not a primary color!'
}

// Our setup code here. Don't touch!
if(typeof colorCombinator === 'undefined') {
  colorCombinator = undefined;
}

module.exports = colorCombinator;
