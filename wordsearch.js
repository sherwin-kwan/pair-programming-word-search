const transposeV2 = function(matrix) {
  // Put your solution here
  let result = [];
  for (let i = 0; i < matrix.length; i++) {

    for (let j = 0; j < matrix[i].length; j++) {
      if (i === 0) {
        result[j] = [];
      }
      result[j].push(matrix[i][j]); // inserts the value of matrix[i][j] at result[j][i]
    }
    // result
  }
  return result;
};

const wordSearch = (letters, word) => {
  const transposed = transposeV2(letters);
  console.log(`After transposing it's: ${transposed}`);
  const found = findWordInRows(letters, word);
  const foundTransposed = findWordInRows(transposed, word);
  console.log(`found is: ${found} and foundTransposed is ${foundTransposed}`);
  return found || foundTransposed;
}

const findWordInRows = (mat, word) => {
  const horizontalJoin = mat.map(ls => ls.join(''))
  console.log(horizontalJoin);
  for (l of horizontalJoin) {
      if (l.includes(word)) {
          return true
      } 
  }
  return false;
}

module.exports = wordSearch