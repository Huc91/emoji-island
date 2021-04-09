import './island.css';

import IslandTile from 'components/IslandTile'
import Animal from 'components/Animal'

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

  const islandSize = Math.pow(startingOptions.tiles, 2)

  const animals = ['🐆', '🦌', '🐃', '🐄', '🐏', '🐫', '🦙', '🦏', '🐀', '🦘', '🐓', '🐢', '🐊', '🐍', '🦖', '🐜', '🐺'];

  const animalPosition = islandSize/2 + startingOptions.tiles / 2;

  const { trees: { dedicidous, evergreen} } = startingOptions;

  const islandTiles = [];

  function addTileOfTerrain(){
    const random = Math.random();
    if(random > 0.9 && evergreen.count < evergreen.value) {
      return evergreen.emoji
    }
    if(random > 0.8 && dedicidous.count < dedicidous.value) {
      return dedicidous.emoji
    }
    return false;
  }

  function addTileAnimal(animals){

    const index = Math.round(Math.random() * animals.length);
    return animals[index];

  }

  for( let i = 0; i < islandSize; i++) {

        islandTiles.push(
          addTileOfTerrain()
        );

  }

  function moveAnimal(){
    let whereWantsToMove = animalPosition + 1;
    if(islandTiles !== false) {
      animalPosition = whereWantsToMove;
      return 'right';
    }
  }

  return (
    <div className="island">
      {
        islandTiles.map( (tile, i) => {
            return <IslandTile key={i * i + i}element={tile ? tile : ''}></IslandTile>
          }
        )
      }
      <Animal
        specie={addTileAnimal(animals)}
        startingPoint={ animalPosition }
        tiles={startingOptions.tiles}
      ></Animal>
    </div>
  );
}

export default Island;
