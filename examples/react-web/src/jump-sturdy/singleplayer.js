import React from 'react';
import { Client } from 'boardgame.io/react';
import Board from './mainboard';
import JumpSturdy from './game';

const App = Client({
  game: JumpSturdy,
  board: Board,
});

const Singleplayer = () => (
  <div style={{ padding: 50 }}>
    <App gameID="single" />
  </div>
);

export default Singleplayer;

