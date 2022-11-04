import "./Topbar.css";
import pokeball from "../images/pokeball.png";
import pokeball2 from "../images/pokeball2.jpg";

function Topbar() {
  return (
    <div className="title">
      <div className="title_left">
        <p>PokeDex</p>
        <div className="caught-seen">
          <div className="caught">
            <img
              src={pokeball}
              alt="pokeball standart"
              style={{ width: "30px", marginRight: "10px" }}
            />
            <p>438</p>
          </div>
          <div className="seen">
            <img
              src={pokeball2}
              alt="pokeball black"
              style={{ width: "30px", marginRight: "10px" }}
            />
            <p>649</p>
          </div>
        </div>
      </div>
      <p style={{ color: "white" }}>A -&gt; Z</p>
    </div>
  );
}

export default Topbar;
