export default function Third() {
  const rootElement = document.getElementById("root");
  const element = <div className="container">Hello World with JSX</div>;
  return <>{element}</>;
}
