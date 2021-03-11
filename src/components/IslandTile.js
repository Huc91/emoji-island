import './island-tile.css';

function IslandTile(props){
  return (
    <div className="island__tile">
      <span>{props.element}</span>
    </div>
  )
}

export default IslandTile;
