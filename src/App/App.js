import React, { Suspense, useState, useEffect } from "react";

const Control = React.lazy(() =>
  import(/* webpackChunkName: "control" */ "../Control")
);

const App = () => {
  const [text, setText] = useState("");
  const [isControlVisible, setIsControlVisible] = useState(false);

  useEffect(() => {
    (async () => {
      const module = await import(/* webpackChunkName: "utils" */ "../utils");
      const txt = module.default();
      setText(txt);
    })();
  }, []);

  const toggleControl = () => {
    setIsControlVisible((prev) => !prev);
  };

  return (
    <>
      <h1>App {text}</h1>
      <button onClick={toggleControl}>Toggle Control component</button>
      {isControlVisible && (
        <Suspense fallback={<div>Loading...</div>}>
          <Control />
        </Suspense>
      )}
    </>
  );
};

export default App;
