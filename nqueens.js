// Directions:
// Given a n x n chessboard with n queens(or rooks), how can you arrange them such that they do not threaten one another.

// There are two approaches, you can find the number of solutions possible or you can find a specific solution.

// These are helper functions that you can use to solve nqueens. There are many ways to solve nqueens, and this is a just a little insight into one way to solve it.

// Levels:
// Beginners : Solve for nRooks
// Intermediate: Solve for nQueens
// Advanced: Find an solution without using these helper functions!

  var helpers = { 
  rows: function(){
    return _(_.range(this.get('n'))).map(function(rowIndex){
      return this.get(rowIndex);
    }, this);
  },

  togglePiece: function(rowIndex, colIndex){
    this.get(rowIndex)[colIndex] = + !this.get(rowIndex)[colIndex];
    this.trigger('change');
  },

  _getFirstRowColumnIndexForMajorDiagonalOn: function(rowIndex, colIndex){
    return colIndex - rowIndex;
  },

  _getFirstRowColumnIndexForMinorDiagonalOn: function(rowIndex, colIndex){
    return colIndex + rowIndex;
  },


  hasAnyRooksConflicts: function(){
    return this.hasAnyRowConflicts() || this.hasAnyColConflicts();
  },

  hasAnyQueenConflictsOn: function(rowIndex, colIndex){
    return (
      this.hasRowConflictAt(rowIndex) ||
      this.hasColConflictAt(colIndex) ||
      this.hasMajorDiagonalConflictAt(this._getFirstRowColumnIndexForMajorDiagonalOn(rowIndex, colIndex)) ||
      this.hasMinorDiagonalConflictAt(this._getFirstRowColumnIndexForMinorDiagonalOn(rowIndex, colIndex))
    );
  },

  hasAnyQueensConflicts: function(){
    return this.hasAnyRooksConflicts() || this.hasAnyMajorDiagonalConflicts() || this.hasAnyMinorDiagonalConflicts();
  },

  _isInBounds: function(rowIndex, colIndex){
    return (
      0 <= rowIndex && rowIndex < this.get('n') &&
      0 <= colIndex && colIndex < this.get('n')
    );
  },


  // todo: fill in all these functions - they'll help you!

  hasRowConflictAt: function(rowIndex){
    return false; // fixme
  },

  hasAnyRowConflicts: function(){
    return false; // fixme
  },

  hasColConflictAt: function(colIndex){
    return false; // fixme
  },

  hasAnyColConflicts: function(){
    return false; // fixme
  },

  hasMajorDiagonalConflictAt: function(majorDiagonalColumnIndexAtFirstRow){
    return false; // fixme
  },

  hasAnyMajorDiagonalConflicts: function(){
    return false; // fixme
  },

  hasMinorDiagonalConflictAt: function(minorDiagonalColumnIndexAtFirstRow){
    return false; // fixme
  },

  hasAnyMinorDiagonalConflicts: function(){
    return false; // fixme
  }
};


window.findNRooksSolution = function(n){
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' rooks:', solution);
  return solution;
};

window.countNRooksSolutions = function(n){
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

window.findNQueensSolution = function(n){
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', solution);
  return solution;
};

window.countNQueensSolutions = function(n){
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};