import React from "react";
import {BrowserRouter as Router , Route, Switch} from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Porfolio from "./pages/Porfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Services from "./pages/Services";
import "./styles/index.scss";
import Load  from "./components/Load";
function App() {
  return (
    <Router>
      <div className="App" >
         <header style={{height : "auto"}}>
          <Menu />
         </header>
        <main>
            <Switch>
              <Route exact path={'/'}> <Home/></Route>
              <Route path={'/Resume'}> <Resume/></Route>
              <Route path={'/Porfolio'}> <Porfolio/></Route>
              <Route path={'/Services'}> <Services/></Route>
              <Route path={'/Contact'}> <Contact/></Route>
            </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;