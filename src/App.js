import logo from './logo.svg';
import './App.css';
import {Switch, Route,BrowserRouter as Router, Routes} from 'react-router-dom';
import HomePage from './components/HomePage';
// import { Switch } from 'react-router';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
