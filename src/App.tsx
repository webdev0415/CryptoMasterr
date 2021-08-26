import { useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Farms from "./pages/farms";
import Governance from "./pages/governance";
import Launchpad from "./pages/launchpad";
import Vaults from "./pages/vaults";
import { getCookie, getMeta } from "./utils/someHandyFunctions";

const App = () => {
  useEffect(() => {
    var viewMode = getCookie("view-mode");
    console.log("viewMode", viewMode)
    var viewport: any = getMeta("viewport");
    if (viewMode === "desktop") {
      viewport.setAttribute("content", "width=1024");
    } else if (viewMode === "mobile") {
      viewport.setAttribute(
        "content",
        "width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no"
      );
    }
  });

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/vaults" />} />
          <Route path="/vaults" component={Vaults} />
          <Route path="/launchpad" component={Launchpad} />
          <Route path="/farms" component={Farms} />
          <Route path="/governance" component={Governance} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
