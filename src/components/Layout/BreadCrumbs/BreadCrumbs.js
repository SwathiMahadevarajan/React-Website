import { useLocation, useParams, Link } from "react-router-dom";
import "./breadCrumbsStyle.css";
export default function BreadCrumbs() {
  const location = useLocation();
  const path = location.pathname.split("/");
  let breadCrumbs = [];
  let navigation = "";
  path.map((name, index) => {
    if (index != 0) {
      breadCrumbs[index - 1] = path.slice(1, index + 1);
    }
  });
  return (
    <>
      <Link to="/" style={{ fontSize: "25px" }}>
        &#x2302;
      </Link>
      {breadCrumbs.map((path, index) => {
        navigation = "";

        path.map((p) => {
          navigation += `/${p}`;
        });
        return (
          <>
            &rarr;
            <Link
              to={`${navigation}`}
              className="navLink"
              style={
                index + 1 === breadCrumbs.length ? { fontWeight: "bold" } : {}
              }
            >
              {" "}
              {path.slice(-1)}
            </Link>
          </>
        );
      })}
    </>
  );
}
