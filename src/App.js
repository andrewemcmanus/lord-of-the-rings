import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

function App(props) {
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
        <Movie
        title={props.trilogy.title[0]}
        hours={props.trilogy.hours[0]}
        minutes={props.trilogy.minutes[0]}/>
        <Movie
        title={props.trilogy.title[1]}
        hours={props.trilogy.hours[1]}
        minutes={props.trilogy.minutes[1]}/>
        <Movie
        title={props.trilogy.title[2]}
        hours={props.trilogy.hours[2]}
        minutes={props.trilogy.minutes[2]}/>
      </header>
    </div>
  );
}

export default App;
