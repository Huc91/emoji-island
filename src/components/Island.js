import './island.css';

import IslandTile from 'components/IslandTile'

function Island(){
  const startingOptions = {
    tiles: 16,
    trees: {
      dedicidous: {
        emoji: '🌳',
        value: 8,
        count: 0,
      },
      evergreen: {
        emoji: '🌲',
        value: 4,
        count: 0,
      },
    },
  }

  const { trees: { dedicidous, evergreen} } = startingOptions;

  const islandTiles = [];

  function addTile(){
    const random = Math.random();
    if(random > 0.9 && evergreen.count < evergreen.value) {
      return evergreen.emoji
    }
    if(random > 0.8 && dedicidous.count < dedicidous.value) {
      return dedicidous.emoji
    }
    return false;
  }

  for( let i = 0; i < Math.pow(startingOptions.tiles, 2); i++) {
    islandTiles.push(addTile());
  }

  return (
    <div className="island">
      { islandTiles.map( (tile) => <IslandTile element={tile ? tile : ''}></IslandTile>) }
    </div>
  );
}

export default Island;
