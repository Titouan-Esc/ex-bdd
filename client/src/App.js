import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import PostForm from "./pages/PostForm";
import NavBar from "./components/NavBar";


function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/post-form" component={PostForm}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
