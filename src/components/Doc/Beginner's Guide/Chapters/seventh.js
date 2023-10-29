import PropTypes from "prop-types"; // FOR PROP TYPES

export default function Seventh() {
  function SayHello({ firstName, lastName }) {
    return (
      <div>
        Hello {firstName} {lastName}!
      </div>
    );
  }

  SayHello.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string.isRequired,
  };
  const element = <SayHello firstName={false} />;
  return <>{element}</>;
}
