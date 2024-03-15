import { useState, CSSProperties } from "react";
import RotateLoader from "react-spinners/RotateLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Spinner({loading,setLoading}) {
  let [color, setColor] = useState("red");

  return (
    <div className="sweet-loading">
      {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" /> */}

      <RotateLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;