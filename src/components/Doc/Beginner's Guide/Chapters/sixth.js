export default function Sixth() {
  const Message = (props) => <div className="message">{props.children}</div>;
  const element = (
    <div className="container">
      <Message>
        hello
        <Message children="Bye World"></Message>
        World
      </Message>
    </div>
  );
  return <>{element}</>;
}
