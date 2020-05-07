import Piece from './piece.jsx';
import two_red from './two_red.svg';
import two_white from './two_white.svg';
import red_above_white from './red_above_white.svg';
import white_above_red from './white_above_red.svg';

/* a piece can be constructed by giving player number (1 or 2) and piece type [1,2]
*/
const red_stones = [null,two_red,red_above_white];
const white_stones = [null,two_white,white_above_red];

/* creates double piece (double red/double white/red_above_white or v.v.)
 *  sets the piece constraints
 */
export default class DoublePiece extends Piece {
  // TODO: through exception if type or player unknown
  constructor(player,type){
    super(player, (player === 1 ? white_stones[type] : red_stones[type]));
    this.type = type
  }


 /* 
  * checks if piece moving like a knight in chess and only forward
  */  
 isMoveDircCorrect(src, dest){
  if(this.player === 1){
    return (src - 17 === dest || 
      src - 10 === dest ||
      src - 15 === dest || 
      src - 6 === dest 
      );
  }
  else if(this.player === 2){
    return (src + 6 === dest || 
      src + 15 === dest || 
      src + 10 === dest || 
      src + 17 === dest);
  }
  return false;
 }

  /*
   * checks if move possible for double_piece.
   * for any further cases please replace the false below with a new method
   */
  isMovePossible(src, dest) {
    return this.isMoveDircCorrect(src,dest) || false;
  }

  /**
   * always returns empty array because of jumping
   * @return {[]}
   */
  getSrcToDestPath(){
    return [];
  }
}