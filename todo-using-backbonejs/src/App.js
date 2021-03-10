import { useState } from 'react';
import './App.css';
import DisplayGuy from './DisplayGuy';
import InputGuy from './InputGuy';
import collection from './data-layer/todoCollection'

function App() {

  const [list, setList] = useState(null)


  function updateList() {
    setList(JSON.parse(JSON.stringify(collection)))
  }


  return (
    <div className="App">
      <h1>Welcome back!</h1>
      <h1>TODO app</h1>
      <InputGuy updateList={updateList} />
      <DisplayGuy list={list} updateList={updateList} />
    </div>
  );
}

export default App;
