//import SinglePiece from '../pieces/single_piece.jsx';
import SinglePiece from '../pieces/single_piece'
import DoublePiece from '../pieces/double_piece';

export default function setBoard(state){
  var matrix_1d = state.split(/[\/,]/);
  const squares = Array(64).fill(null);

  for(let i=0; i<matrix_1d.length; i++){
    if(matrix_1d[i] === "w")
        squares[i] = new SinglePiece(1,0);
    else if(matrix_1d[i] === "r")
        squares[i] = new SinglePiece(2,0);
    else if(matrix_1d[i] === "ww")
        squares[i] = new DoublePiece(1,1);
    else if(matrix_1d[i] === "rr")
        squares[i] = new DoublePiece(2,1);
    else if(matrix_1d[i] === "wr")
        squares[i] = new DoublePiece(1,2);
    else if(matrix_1d[i] === "rw")
        squares[i] = new DoublePiece(2,2);
  }

  return squares;
}