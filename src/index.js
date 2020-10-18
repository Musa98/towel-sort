
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix){
      return [];
  }
  if(!matrix.length){
      return [];
  }
  let mas = [];
  let sortFlag = true;
  const matrixElementLength = matrix[0].length;


  for(let i = 0; i < matrix.length; i++){
      if(sortFlag === true){
          for(let j = 0;j < matrix[i].length;j++){
              mas.push(matrix[i][j]);
          }
          sortFlag = false;
          continue;
      }
      if(sortFlag === false){
          for(let j = matrix[i].length - 1;j >= 0;j--){
              mas.push(matrix[i][j]);
          }
          sortFlag = true;
          continue;
      } 
  }
  console.log;
  return mas;
}
