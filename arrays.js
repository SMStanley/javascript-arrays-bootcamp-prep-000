var chocolateBars = array ('snickers', 'hundred grand', 'kitkat', 'skittles');

function addElementToBeginningOfArray (element, array) {
  return [element, ...array];
}
function destructivelyAddElementToBeginningOfArray (array, element){
    array.unshift(element);
    return array;
}
function addElementToEndOfArray (array, element) {
  return element.push;
} 
function destructivelyAddElementToEndOfArray (array, element) {
  array.shift(element);
  return array;
}
function accessElementInArray (array, index)  {
  return (array, [3]);
}