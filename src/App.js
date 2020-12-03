import "./App.css";
import "../src/pages/services/services.css";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "../src/pages/services/Gallery";
import Users from "../src/pages/services/Users";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/services" component={Gallery} /> */}
          <Route path="/services" component={Users} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
