import React from "react";

function App() {
  return (
    <div className="App">
      <h1 style={headeStyle}>React App</h1>
    </div>
  );
}

const headeStyle: React.CSSProperties = {
  backgroundColor: "blue",
  fontWeight: 200
}
export default App;
