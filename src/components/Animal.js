import './animal.css';

function Animal(props){
  const relateToTile = props.startingPoint / props.tiles;
  const row = relateToTile.toString().split('.')[0] ? +relateToTile.toString().split('.')[0] : 0;
  const col = relateToTile.toString().split('.')[1] ? +('0.' + relateToTile.toString().split('.')[1]) : 0;
  const top = row;
  const left = col * 16;
  return (
    <div className="island__animal" style={{ top: top*24+'px', left: left*24+'px' }}>
      <span>{props.specie}</span>
    </div>
  )
}

export default Animal;
