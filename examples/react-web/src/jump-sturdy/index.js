import Singleplayer from './singleplayer.js';
import Multiplayer from './multiplayer';

const routes = [
  {
    path: '/jumpsturdy/singleplayer',
    text: 'Singleplayer',
    component: Singleplayer,
  },
  {
    path: '/jumpsturdy/multiplayer',
    text: 'Multiplayer',
    component: Multiplayer,
  },
];

export default { routes };
