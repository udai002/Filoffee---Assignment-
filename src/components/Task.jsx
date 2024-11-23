import React, { useDebugValue, useEffect, useState } from 'react'
import TaskDetails from './TaskDetails'
import { IoAdd } from "react-icons/io5";
import CreateTask from './CreateTask';

const Task = () => {

    const [openForm , setOpenForm] = useState(false)
    const [task , setTask] = useState(() => {
        const savedArray = localStorage.getItem('task');
        return savedArray ? JSON.parse(savedArray) : [];
      })


    useEffect(()=>{
        const stringfy = JSON.stringify(task)
        localStorage.setItem('task' , stringfy);
    } , [task])



    const creatTask =  (newTask)=>{
        setTask(prev=>[...prev , newTask])
    }

    const deleteTask = (id)=>{
        const filtered = task.filter(item=>item.id!==id)
        const isCheck = confirm(`Are you sure you want to delete ${id} `)
        isCheck&&setTask(filtered)
    }

    const editTask = (id , title , description , status , date )=>{
      const indexOf = task.findIndex(item=>item.id === id);
      task[indexOf].title = title
      task[indexOf].description = description
      task[indexOf].status = status
      task[indexOf].date = date
    }

    

  return (
    <>
       {openForm?<CreateTask setOpenForm={setOpenForm} creatTask={creatTask}  />:""} 
    <div className='p-6 md:p-10'>
      <h1 className='text-2xl ml-5 my-5 font-bold before:w-5 before:border-2 before:border-black before:mr-2'>All Tasks</h1>
      <div className='flex flex-wrap '>
      <button className='min-w-[350px] min-h-[250px]  border-dashed border-2 hover:bg-gray-200 border-gray-600 bg-gray-50 p-6 mt-5 text-center md:m-5 flex justify-center items-center rounded-md' onClick={()=>{setOpenForm(true)}}>
        <p className='text-gray-600 flex items-center '>
           <IoAdd className='m-2'/> Add Task
        </p>
        </button>
        {task.map(item=><TaskDetails taskDetails={item} deleteTask={deleteTask} editTask={editTask}  />)}
        
      </div>
    </div>
    </>
  )
}

export default Task
