
import './App.css';
import Timer from './timerApp/Timer';
import TodoAppHome from './todo app/TodoAppHome';
import Theme from './themeApp/Theme'

function App() {
  return (
    <div className="App">
      {/*Theme App*/}
      <Theme/>

      {/* Timer App */}
      <Timer/>

      {/* ToDo List App */}
      <TodoAppHome/>


    </div>
  );
}

export default App;
