import './App.css';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom'
import Nav from './views/Nav/Nav';
import Home from './views/Home/home';
import ClassList from './views/ClassList/ClassList';
/**
 * 
 * @returns Redirect 重定向 to：路径
 */
function App() {
  return (
    <Router>
      <div className="App">          
          <Nav></Nav>
          <Route exact path="/" render={()=><Redirect to="/home"/>}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/ClassList" component={ClassList}></Route>
      </div>
    </Router>
  );
}

export default App;
