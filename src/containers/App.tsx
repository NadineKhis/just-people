import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { MainScreen } from "../components/MainScreen/MainScreen";

function App() {
  return (
    <>
      {/*<Router>*/}
      <Navbar />
      <MainScreen />
      {/*  <Switch>*/}
      {/*    <Route component={MainScreen} exact path="/"/>*/}
      {/*    <Route  component={About} exact path="/about"/>*/}
      {/*  </Switch>*/}
      {/*</Router>*/}
      {/*/!*<Users/>*!/*/}
    </>
  );
}

export default App;
