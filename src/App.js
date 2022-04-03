import logo from './logo.svg';
import './App.css';
import Greeting  from './components/pure/greeting';
import TaskList from './components/conteiner/task_list';
import TaskListComponent from './components/conteiner/task_list';
import EstadoContacto from './components/conteiner/estado';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio Greeting.jsx   -    Los comentarios se colocan entre llaves*/}
        {/*<Greeting name="Martin"></Greeting>*/}
        {/* Componente de ejemplo funcional*/}
        {/* Componente de un listado de tareas*/}

        {/*<TaskListComponent></TaskListComponent>*/}
        <EstadoContacto></EstadoContacto>
      </header>
    </div>
  );
}

export default App;
