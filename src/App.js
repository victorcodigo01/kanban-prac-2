
import './App.css';
import Header from './components/header';
import Nav from './components/nav';
import Form from './components/shared-components/form';
import Board from './components/board';
import { TasksProvider } from './context/tasks.provider';



function App() {
  return (
    <>

      <Header></Header>

        <TasksProvider>
        <Nav></Nav>
        <Board></Board>
        </TasksProvider>
      
    </>
  );
}

export default App;
