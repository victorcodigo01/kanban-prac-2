
import './App.css';
import Header from './components/header';
import Nav from './components/nav';
import Todo from './components/todo';
import InProgress from './components/inprogress';
import Done from './components/done';


function App() {
  return (
    <>
    <Header></Header>
    <Nav></Nav>
    <Todo></Todo>
    <InProgress></InProgress>
    <Done></Done>
     
    </>
  );
}

export default App;
