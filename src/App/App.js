import React, { useState, useEffect } from "react";

const Control = React.lazy(() =>
  import(/* webpackChunkName: "utils" */ "../Control")
);

const App = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    (async () => {
      const module = await import(/* webpackChunkName: "utils" */ "../utils");
      const txt = module.default();
      setText(txt);
    })();
  }, []);

  return (
    <>
      <h1>App {text}</h1>
      {/* <Control /> */}
    </>
  );
};

export default App;
