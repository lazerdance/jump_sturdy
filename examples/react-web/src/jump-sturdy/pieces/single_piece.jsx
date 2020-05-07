import Piece from './piece.jsx';
import red from './red.svg'
import white from './white.svg';


/* creates single piece whether red or white
 *  sets the piece constraints
 */
export default class SinglePiece extends Piece {
  constructor(player,type){
    super(player, (player === 1 ? white : red));
    this.type = type
  }


  /*
   * checks if piece moving no further than one step and not backwards
   */
  isMovePossible(src, dest){
    if(this.player === 1){
      if(dest === src - 8 || dest === src - 1 || dest === src + 1){
        return true;
      }
      else if(this.type === 0 && (dest === src - 9 || dest === src - 7)){
        return true;
      }
    }
    else if(this.player === 2){
      if(dest === src + 8 || dest === src - 1 || dest === src + 1){
        return true;
      }
      else if(this.type === 0 && (dest === src + 9 || dest === src + 7)){
        return true;
      }
    }
    return false;
  }

  /**
   * returns array of one if piece moves two steps, else returns empty array 
   * @param  {[type]} src  [description]
   * @param  {[type]} dest [description]
   * @return {[type]}      [description]
   */
  getSrcToDestPath(src, dest){
    if(dest === src - 16){
      return [src - 8];
    }
    else if(dest === src + 16){
      return [src + 8];
    }
    return [];
  }
}
