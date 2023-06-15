import logo from './logo.svg';
import './App.css';

const number = 72;
const student = {
  name: 'Salem',
  age: 10, 
  food: "beriany",
}
const style = {
  color: 'red', 
  background: 'blue',
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Hello from My App</h1>
        <p className='fruit'>Total Fruit: {number + 8}</p>
        <p style={style}>His name is {student.name} and his favourite food is {student.food}</p>
      </header>
    </div>
  );
}

export default App;
