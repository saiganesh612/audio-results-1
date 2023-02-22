import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import DisplayFiles from './Audio';

function App() {
  return (
    <div className="App">
      <h1>Audio files</h1>
      <br />
      <h2>Solinga</h2>
      <DisplayFiles src="soliga" />
      <br />
      <br />
      <h2>Lambani</h2>
      <DisplayFiles src="lambani" />
    </div>
  );
}

export default App;
