import { Pages } from "./pages";
import { Route, Switch } from "react-router-dom";

export default function Routes({ update, setUpdate }) {
  return (
    <>
      <Switch>
        <Route path="/Docs/:lesson/:chapter" component={Pages.DocPages} />
        <Route path="/Docs/" component={Pages.DocPages} />
        <Route path="/" component={Pages.HomePage} />
      </Switch>
    </>
  );
}
