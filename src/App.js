import logo from './logo.svg';
// import "./style.css"
import './App.css';
import Home from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Album from './components/Album';
import {BrowserRouter as Router, Route} from "react-router-dom"
import BottomBar from './components/BottomBar';
import SideBar from './components/SideBar';
import TopNav from './components/TopNav';
import {Container} from "react-bootstrap"
import Artist from './components/Artist';

function App() {
  return (
    <div className="App">
      <Router>
      <Container fluid>
      <SideBar />
      <Container>
        <TopNav />
        <Route path="/" exact render={(props) => <Home {...props}/>}/>
        <Route path="/album/:albumId" exact render={(props) => <Album {...props}/>}/>
        <Route path="/artist/:artistId" exact render={(props) => <Artist {...props}/>}/>
        </Container>
        <BottomBar />
      </Container>
        
      
      {/* <Album /> */}
      </Router>
    </div>
  );
}

export default App;
