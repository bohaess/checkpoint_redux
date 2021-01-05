import {useState,useEffect} from "react" 
import './App.css';

 import {useSelector,useDispatch} from 'react-redux'
 import {allTodo,todoDone,todoNotDone,addTodo,editTodo,saveTodo} from './actions/todosActions' 
 import { v4 as uuidv4 } from "uuid"; 

function App() {
  const todos=useSelector(state=>state.todosReducer) ;
  const dispatch=useDispatch() ;
  const [input,setInput]=useState("") ;
  const handleChange=(e)=>{
    setInput(e.target.value)
  } ;
  useEffect(()=>{
    if(todos.save) {
      setInput(todos.save.description) ;
      console.log(input)
    }
  },[todos.save]) ;
  
      const add=()=>{
        if(input) {
          if(!todos.save) {
            dispatch(addTodo({
              description:input ,
              id:uuidv4(),
              state:"notDone"
            })) ;
            setInput("") ;
          }
          else {
            dispatch(editTodo({...todos.save,description:input})) ;
            setInput("");
          }
      }  
      
    }
    
  
  return (
    <div className="App">
      <header className="App-header">
       <h2 className="app-title">Todo Application</h2> 
       <div className="filt">
         <button onClick={()=>dispatch(allTodo())}>all todos</button>
         <button onClick={()=>dispatch(todoDone())}>Todos Done</button>
         <button onClick={()=>dispatch(todoNotDone())}>Todos not Done</button>
         
       </div>
       <div className="add">
           <h2>Add Todo</h2>
           <div className="btn-add">
           <input type="text" value={input} onChange={(e)=>{handleChange(e)}}/> 
           <button onClick={add}>Add todo</button>
           </div>
        </div>
        <div style={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"}}>
        { 
           todos.filt?(
             todos.todos.filter(item=>item.state===todos.filt)
             .map(item=>(
              <div className="todo" key={item.id}>
                <h6>{item.description}</h6>
                <h5>{item.state}</h5>
                <button onClick={()=>dispatch(saveTodo(item))}>Edit</button>
                <button>Delete</button>
              </div>
             )))
           :(
          todos.todos.map(item=>(
            <div className="todo"  key={item.id}>
              <h6>{item.description}</h6>
              <h5>{item.state}</h5>
              <button onClick={()=>dispatch(saveTodo(item))}>Edit</button>
              <button>Delete</button>
            </div>
          ))
        )
        }
        </div>
        
      </header>
    </div>
  );
}

export default App;
 