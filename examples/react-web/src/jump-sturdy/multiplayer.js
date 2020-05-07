import React from 'react';
import { Client } from 'boardgame.io/react';
import { SocketIO } from 'boardgame.io/multiplayer';
import Board from './mainboard';
import JumpSturdy from './game';
import { Local } from 'boardgame.io/multiplayer';


const hostname = window.location.hostname;
const App = Client({
  game: JumpSturdy,
  board: Board,
  //multiplayer: SocketIO({ server: `${hostname}:8000` }),
  multiplayer: Local(),
  debug: false,
});

const Multiplayer = () => (
  
  <div style={{ padding: 50 }}>
    <App gameID="multi" playerID="0" />
    <br></br>
    <App gameID="multi" playerID="1" />
  </div>
 
);


export default Multiplayer;
