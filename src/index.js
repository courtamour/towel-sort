
module.exports = function towelSort(matrix) {
  let result = [];
  if (!matrix){
    return result;
  }

  else{
  matrix.map((massiv, index) => {
    if (index % 2 == 0 || index == 0) {
      return result.push(massiv.filter(element => !(element == ',')));
    }
    else { return result.push(massiv.filter(element => !(element == ',')).reverse()); }
  });
  result = result.flat();
  
  return result;
  }}

