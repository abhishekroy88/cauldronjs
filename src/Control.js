import React, { useState, useEffect } from "react";

const Control = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    (async () => {
      const module = await import(/* webpackChunkName: "utils" */ "./utils");
      const txt = module.default();
      setText(txt);
    })();
  }, []);

  return <h1>Control {text}</h1>;
};

export default Control;
