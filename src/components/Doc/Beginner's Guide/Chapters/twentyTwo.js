import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error }) {
  return (
    <div>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
}

function Bomb() {
  throw new Error("💥 CABOOM 💥");
}

export default function TwentyTwo() {
  const [explode, setExplode] = useState(false);
  return (
    <div>
      <div>
        <button onClick={() => setExplode(true)}>💣</button>
      </div>
      <div>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          {explode ? <Bomb /> : "Push the button Max!"}
        </ErrorBoundary>
      </div>
    </div>
  );
}
