

function Card(props) {
  return (
    <>
      <div className="card-container">
        <div className="image-container">
          <img src={props.pirate.image} alt="profile picture"></img>
        </div>
        <div className="card-content">
          <div className="content-wrapper">
            <p><b>Name:</b> {props.pirate.name}</p>
            <p><b>Age:</b> {props.pirate.age}</p>
            <p><b>Pirate:</b> {props.pirate.pirate ? <span className="true">Yes</span> : <span className="false">No</span>}</p>
            <a href="#">View Details</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card