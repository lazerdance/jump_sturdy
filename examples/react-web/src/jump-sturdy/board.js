import React from 'react';

import './board-assets/board.css';
import Square from './board-assets/square';

export default class Board extends React.Component {

  renderSquare(i, corner) {
    const styles = {
      border: '1px solid transparent'
    }
  
    if(corner){
      return <Square 
      style = {styles}
      onClick={() => null}
      />
    }else{
      return <Square 
      style = {this.props.squares[i] ? this.props.squares[i].style : null}
      onClick={() => this.props.onClick(i)}
      />
    }
  }

  render() {
    const board = [];
    for(let i = 0; i < 8; i++){
      const squareRows = [];
      for(let j = 0; j < 8; j++){
        squareRows.push(this.renderSquare((i*8) + j, isCorner(i,j)));
      }
      board.push(<div className="board-row">{squareRows}</div>)
    }

    return (
      <div>
        {board}
      </div>
    );
  }
}


function isCorner(i,j){
  return (i==0 && j==7 || i==7 && j==7 || i==0 && j==0 || i==7 && j==0);
}