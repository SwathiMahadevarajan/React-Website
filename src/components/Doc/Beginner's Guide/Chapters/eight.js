export default function Eight() {
  function CharacterCount({ text }) {
    return (
      <div>
        {`the text ${text} has `}
        {text.length ? text.length : " No "}
        {` characters`}
      </div>
    );
  }

  const element = (
    <>
      <CharacterCount text="" />
      <CharacterCount text="Morning World" />
    </>
  );
  return <>{element}</>;
}
