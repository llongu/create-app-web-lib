import logo from './logo.svg';
import './App.css';
import Header from './components/Header/index';

function App() {
  return (
    <div className="App">
       <Header/>
        
       
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
