import Header from './MyComponents/Header'
import {Todos} from './MyComponents/Todos'
import {Footer} from './MyComponents/Footer'
import './App.css';


function App() {
  let todos = [{
    sno: 1,
    title: "Go to the market",
    desc: "You need to go to the market to get this job done"
  },{
    sno: 2,
    title: "Go to the mall",
    desc: "You need to go to the mall to get this job done2"
  },{
    sno: 3,
    title: "Go to the doctor",
    desc: "You need to go to the doctor to get this job done3"
  }]
  return (
   <>
   <Header title="MyTodosList" searchBar={true}/> 
   <Todos todos={todos}/>
   <Footer/>
   </>
  );
}

export default App;
