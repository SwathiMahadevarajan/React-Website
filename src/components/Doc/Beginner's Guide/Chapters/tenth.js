export default function Tenth() {
  function Box({ style, size, className = "", ...rest }) {
    const sizeClassName = size ? `box--${size}` : "";
    return (
      <div
        className={`box ${className} ${sizeClassName}`}
        style={{ fontStyle: "italic", ...style }}
        {...rest}
      />
    );
  }

  const element = (
    <div>
      <Box size="small" style={{ backgroundColor: "lightblue" }}>
        small lightblue box
      </Box>
      <Box size="medium" style={{ backgroundColor: "pink" }}>
        medium pink box
      </Box>
      <Box size="large" style={{ backgroundColor: "orange" }}>
        large orange box
      </Box>
      <Box>sizeless box</Box>
    </div>
  );
  return <>{element}</>;
}
