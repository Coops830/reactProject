import logo from './logo.svg';
import './App.css';
import Timer from './timerApp/Timer';
import TodoAppHome from './todo app/TodoAppHome';

function App() {
  return (
    <div className="App">
      {/* Timer App */}
      <Timer/>

      {/* ToDo List App */}
      <TodoAppHome/>
    </div>
  );
}

export default App;
