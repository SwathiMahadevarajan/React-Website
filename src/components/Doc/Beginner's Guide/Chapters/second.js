import React from "react";
export default function Second() {
  const element = React.createElement("div", {
    children: ["Hello World", " Good Bye"],
    className: "container",
  });
  return <div>{element}</div>;
}
