export default function Homepage() {
  return (
    <>
      <h1>Beginners Guide to React</h1>
      <div className="desc">
        <p>This page is built fully using react.</p>
        <p>
          The chapters in these page has content's from the following{" "}
          <a
            style={{ color: "blue" }}
            href="https://www.youtube.com/watch?v=7_x4AuqHxlg"
            target={"_blank"}
          >
            video.
          </a>
        </p>
        <p> You can look into each chapters from the side navigation bar.</p>
        <p>The concepts are basic to React.</p>
        <p>These pages include following features of react:</p>
        <ol>
          <li>Routers</li>
          <li>useState</li>
          <li>useRef</li>
          <li>useEffect</li>
          <li>Error Boundaries</li>
        </ol>
      </div>
    </>
  );
}
