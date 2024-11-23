import React, { useState } from 'react'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const TaskDetails = (props) => {
    const {taskDetails , deleteTask , editTask} = props 
    const {title , description , status , date , id} = taskDetails
    const [inputTitle , setInputTItle] = useState(title);
    const [inputDescription , setInputDescription] = useState(description);
    const [inputDate , setInputDate] = useState(description);
    const [inputStatus , setInputStatus] = useState(description);

  return (
    <div>
      <div className='w-[350px] min-h-[250px] rounded-md border-2 bg-gray-100 p-6 mt-5 md:m-5 flex flex-col justify-center'>
        <h1 className='font-semibold text-xl my-2'>{title}</h1>
        <p className='font-sans mb-2'>{description}</p>
        <small className='text-gray-500'>{date}</small>
        <div className='flex justify-between py-2 items-center mt-3'>
        <button className='px-3 py-1 bg-green-400 rounded-full'>{status}</button>
        <div className='flex self-end'><CiEdit className='text-2xl m-2'/> <MdDelete className='text-2xl m-2' onClick={()=>{deleteTask(id)}}/></div>
        </div>
      </div>
      {/* <div className='fixed right-10 bottom-10 bg-gray-50 shadow-2xl p-6 w-[300px] flex flex-col justify-stretch'>
        <form>
          <div className='mb-2'>
          <label htmlFor="title">Title</label> <br />
          <input type="text" id='title'  className='p-1 rounded outline-none border-2 border-black w-full ' value={}/>
          </div>
          <div className='mb-2'>
          <label htmlFor="description">description</label> <br />
          <textarea rows={5} type="text" id='description' className='p-1 rounded outline-none border-2 border-black w-full ' />
          </div>
          <div className='mb-2'>
          <label htmlFor="date">date</label> <br />
          <input type="text" id='date' className='p-1 rounded outline-none border-2 border-black w-full '/>
          </div>
          <div className='mb-2'>
          <label htmlFor="status">status</label> <br />
          <input type="text" id='status' className='p-1 rounded outline-none border-2 border-black w-full '/>
          </div>
          <div><button className='bg-black px-3 py-2 mt-2 rounded-md text-white w-full'>Update</button></div>
        </form>
      </div> */}
    </div>
  )
}

export default TaskDetails
