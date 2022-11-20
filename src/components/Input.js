import React,{useState} from 'react'
import Show from './Show'



const Input = () => {

    const [state,setState] = useState("")
    const [todos,setTodos] = useState([])
    

    const handleChange=(event)=>{
        setState(event.target.value)

    }

    const addTodo=()=>{
        let item=localStorage.getItem("todo") //todo is a key. Returns null if the storage is empty. localStroag.getItem() is prebuild method
        if (item){
            //if item is null
            const itemObj =JSON.parse(item);
            itemObj.push(state)
            localStorage.setItem("todo",JSON.stringify(itemObj)) //prebuilt method

        }
        else{
            const newItems=[]
            newItems.push(state)
            localStorage.setItem("todo",JSON.stringify(newItems))
        }

    }
  return (
    <div className='row'>
        <div className='col-6 offset-3'>
        <h1>My ToDo</h1>
        <input type="text" className='form-control' onChange={handleChange}/>
        <button className='btn-btn-info' onClick={addTodo}>AddTodo</button>
        <Show/>
        
    </div>
    </div>
  )
}

export default Input