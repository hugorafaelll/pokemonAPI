import "./Bottombar.css";

function Bottombar() {
  return (
    <div className="bottom">
      <div className="bottom-btn">
        <p className="bg-circle-white">a</p>
        <p>See Details</p>
      </div>
      <div className="bottom-btn">
        <p className="bg-circle-white">x</p>
        <p>Habitat</p>
      </div>
      <div className="bottom-btn">
        <p className="bg-circle-white">y</p>
        <p>Sort</p>
      </div>
      <div className="bottom-btn">
        <p className="bg-circle-white">b</p>
        <p>See evaluation</p>
      </div>
      <div className="bottom-btn">
        <p className="bg-circle-white">b</p>
        <p>Back</p>
      </div>
    </div>
  );
}

export default Bottombar;
