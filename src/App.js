import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import AddEmployee from "./components/pages/AddEmployee";
import Navbar from "./components/layout/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import notFound404 from "./components/pages/notFound404";
import EditEmployee from "./components/pages/EditEmployee";
import ViewEmployee from "./components/pages/ViewEmployee";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/employees/add" component={AddEmployee} />
          <Route exact path="/employees/edit/:id" component={EditEmployee} />
          <Route exact path="/employees/view/:id" component={ViewEmployee} />
          <Route component={notFound404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
