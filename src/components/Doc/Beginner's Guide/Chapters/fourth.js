export default function Fourth() {
  const rootElement = document.getElementById("root");
  const children = "Hello World with JSX tricks";
  const className = "container";
  const props = { children, className };
  const element = <div {...props} />;
  return <>{element}</>;
}
