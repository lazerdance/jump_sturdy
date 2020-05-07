import React from 'react';


import './board-assets/board.css';
import Board from './board';
import setBoard from './game-assets/board-initialiser.jsx';

import SinglePiece from './pieces/single_piece.jsx';
import DoublePiece from './pieces/double_piece.jsx';

export default class GameBoard extends React.Component {
  constructor(){
    super();
    this.state = {
      squares: setBoard("x,r,r,r,r,r,r,x/,r,r,r,r,r,r,/,,,,,,,/,,,,,,,/,,,,,,,/,,,,,,,/,w,w,w,w,w,w,/x,w,w,w,w,w,w,x"),
      player: 1,
      white_remaining: 12,
      red_remaining: 12,
      sourceSelection: -1,
      status: '',
      turn: 'white'
    }
  }
 
  handleClick(i){
    const squares = this.state.squares.slice();
    var sourceSelection = this.state.sourceSelection;
    if(sourceSelection === -1){
      if(!squares[i] || squares[i].player !== this.state.player){
        this.setState({status: "Wrong selection. Choose player " + this.state.player + " pieces."});
        if (squares[i]) {
          squares[i].style = {...squares[i].style, backgroundColor: ""};
        }
      }
      else{
        squares[i].style = {...squares[i].style, backgroundColor: "RGB(111,143,114)"};
        this.setState({
          status: "Choose destination for the selected piece",
          sourceSelection: i
        });
      }
    }

    else if(sourceSelection > -1){
      var player_source = this.state.player;
      var square_source = squares[sourceSelection];
      square_source.style = {...square_source.style, backgroundColor: ""};
      if(squares[i] || squares[i] === null) {        
        const squares = this.state.squares.slice();
        const isMovePossible = square_source.isMovePossible(sourceSelection, i);
        const srcToDestPath = square_source.getSrcToDestPath(sourceSelection, i);

        if(isMovePossible){
          if(squares[i] !== null){
            var player_dest = squares[i].player;
            var square_dest = squares[i];
            if(this.attacking_own_double(square_source,square_dest)) return;
            // if white piece attacked
            if(player_dest === 1){
              // if white attacking own piece
              if(player_dest === player_source)
                  squares[i] = new DoublePiece(1,1);
              else{
                if(square_dest.type !== null){
                  if(this.singlePieceAttacked(square_dest)) squares[i] = new SinglePiece(2,0);
                  else if(square_dest.type === 1) squares[i] = new DoublePiece(2,2);
                  else squares[i] = new DoublePiece(2,1);
                  this.state.white_remaining--;
                }
              }
            }
            else{
              if(player_dest === player_source)
                squares[i] = new DoublePiece(2,1);
              else{
                if(square_dest.type !== null){
                  if(this.singlePieceAttacked(square_dest)) squares[i] = new SinglePiece(1,0);
                  else if(square_dest.type === 1) squares[i] = new DoublePiece(1,2);
                  else squares[i] = new DoublePiece(1,1);
                  this.state.red_remaining--;
                }
              }
            }
          }else
            squares[i] = new SinglePiece(this.state.player,0);
          if(square_source.type === 1)
            squares[sourceSelection] = new SinglePiece(this.state.player,0);
          else if(square_source.type === 2)
            squares[sourceSelection] = new SinglePiece(this.state.player,0);
          else
            squares[sourceSelection] = null;

          let player = this.state.player === 1 ? 2 : 1;
          let turn = this.state.turn === 'white'? 'red' : 'white';

          this.setState({
            sourceSelection: -1,
            squares: squares,
            player: player,
            status: '',
            turn: turn
          });
        }
        else{
          this.setState({
            status: "Wrong selection. Choose valid source and destination again.",
            sourceSelection: -1,
          });
        }
      }
    }
  }

  attacking_own_double(source,dest){
    return source.player === dest.player && dest.type !== null && dest.type !== 0;
  }

  isDestDoublePiece(srcToDestPath){
    if(srcToDestPath === null) return true;
    const type = this.state.squares[srcToDestPath[0]].type;
    return type !== null && type !== 0;
  }

  singlePieceAttacked(piece){
    return piece.type === 0;
  }

  isVictory(){
    if(this.state.red_remaining === 0)
      return { winner: this.state.player};

    else if(this.state.white_remaining === 0) return 1;
    else return null;
  }

  render() {

    return (
      <div>
        <div className="game">
          <div>
            <h3 className="empty-square">8</h3>
            <h3 className="empty-square">7</h3>
            <h3 className="empty-square">6</h3>
            <h3 className="empty-square">5</h3>
            <h3 className="empty-square">4</h3>
            <h3 className="empty-square">3</h3>
            <h3 className="empty-square">2</h3>
            <h3 className="empty-square">1</h3>
          </div>
          <div className="game-board">
            <Board 
            squares = {this.state.squares}
            onClick = {(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <h3>Turn</h3>
            <div id="player-turn-box" style={{backgroundColor: this.state.turn}}>
  
            </div>
            <div className="game-status">{this.state.status}</div>
            <h3>Remaining pieces</h3>
            <div className="remaining-pieces-box" style={{backgroundColor: 'red'}}>{this.state.red_remaining}</div>
            <div className="remaining-pieces-box" style={{backgroundColor: 'white'}}>{this.state.white_remaining}</div>
          </div>
        </div>
        <div>
          <h3 className="empty-square-letters"></h3>
          <h3 className="empty-square-letters">A</h3>
          <h3 className="empty-square-letters">B</h3>
          <h3 className="empty-square-letters">C</h3>
          <h3 className="empty-square-letters">D</h3>
          <h3 className="empty-square-letters">E</h3>
          <h3 className="empty-square-letters">F</h3>
          <h3 className="empty-square-letters">G</h3>
          <h3 className="empty-square-letters">H</h3>
        </div>
      </div>
     
    );
  }
}

