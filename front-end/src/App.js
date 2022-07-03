import './App.css';
import MainTask from './components/MainTask';
// import ListAllTasks from './components/list/ListAllTasks';

function App() {
  return (
    <div className="App">
      <h1>To-do</h1>
      <MainTask />
      {/* <ListAllTasks /> */}
    </div>
  );
}

export default App;
