import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react'
import Todo from './Todo';

function Home() {

    const [data , setData] = useState(''); // value of input field
    const [tasks , setTask] = useState([]); // value of task on click


    function handleChange(e){     
        setData(e.target.value);     
        }
    function addTodo() {
        setTask([...tasks, data]);   
        setData(''); 
        }
    const deleteTodo = (index) =>{       
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTask(updatedTasks);
    }
  return (
    <>
        <div className='container'>
            <section className='mt-3 text-center' >
                <h3>Enter Your Task</h3>
                <div className='todo col-lg-5 mx-auto d-flex justify-content-center align-items-center'>
                    <input className='form-control' name= "task" value={data} onChange={handleChange} /> 
                    <Button variant='contained' className='mx-2' onClick={addTodo}><AddIcon /></Button>
                </div>   
                {tasks.map((tasks, index)=>(
                    <Todo value={tasks} key={index} onDelete={() => deleteTodo(index)} />
                                        
                ))}             
                
            </section>
        </div>
        
    </>
  )
}

export default Home