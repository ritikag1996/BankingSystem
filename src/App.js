
import './App.css';
import Customer from './components/Customer';
import Footer from './components/Footer';
import History from './components/History';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Transfer from './components/Transfer';
import Currentbalance from './components/Currentbalance';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Router>
     <Navbar/>
     <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/history" element={<History/>}></Route>
      <Route exact path="/customer" element={<Customer/>}></Route>
      <Route exact path="/transfer/:id" element={<Transfer/>}></Route>
      <Route exact path="/balance" element={<Currentbalance/>}></Route>
      <Route exact path="/about" element={<About/>}></Route>
     </Routes>
        <Footer/>
     </Router>
    </div>
  );
}

export default App;
