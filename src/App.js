import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import DisplayFiles from './Audio';

function App() {
  return (
    <div className="App">
      <h1>Audio files</h1>
      <br />
      <DisplayFiles src="lambani" />
      <br />
      <br />
      <DisplayFiles src="soliga" />
    </div>
  );
}

export default App;
