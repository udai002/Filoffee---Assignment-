import React, { useState } from 'react'
import { TbTable } from 'react-icons/tb';

const CreateTask = (props) => {
    const { setOpenForm, creatTask  } = props
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('');
    const [status, setStatus] = useState('PENDING')

    const [fieldError, setFieldError] = useState(false)

    const submitForm = e => {
        e.preventDefault();
        if (title && description && date && status) {
            const newTask = {
                id:Date.now(),
                title ,
                description,
                status,
                date 
            }
            creatTask(newTask);
            setOpenForm(false)
            setTitle('')
            setDescription('')
            setDate('')
            setStatus('PENDING')
        } else {
            setFieldError(true)
        }
    }
    return (
        <div>
            <div className='w-full h-screen bg-black/75 fixed' onClick={() => { setOpenForm(false) }}></div>
            <div className='flex justify-center items-center fixed'>
                <form className='bg-white p-6 w-[350px] flex flex-col justify-stretch fixed rounded bottom-1/2 right-1/2  translate-x-1/2 translate-y-1/2' onSubmit={submitForm}>
                    <div className='mt-2'>
                        <label htmlFor="Title">Title</label> <br />
                        <input type="text" id='Title' className='border-2 w-full border-black px-2 py-2 rounded outline-none' onChange={e=>setTitle(e.target.value)} value={title}/>
                    </div>
                    <div className='mt-2'>
                        <label htmlFor="desc">Description</label> <br />
                        <textarea rows={5} type="text" id='desc' className='border-2 w-full border-black px-2 py-2 rounded outline-none' onChange={e=>setDescription(e.target.value)} value={description}/>
                    </div>
                    <div className='mt-2'>
                        <label htmlFor="due">Due date</label> <br />
                        <input type="date" id='due' className='border-2 w-full border-black px-2 py-2 rounded outline-none' onChange={e=>setDate(e.target.value)} value={date}/>
                    </div>
                    <div className='mt-2'>
                        <label htmlFor="status">Status</label> <br />
                        <select name="status" id="status" className='border-2 w-full border-black px-2 py-2 rounded outline-none' onChange={e=>setStatus(e.target.value)} value={status}>
                            <option value="PENDING">Pending</option>
                            <option value="INPROGRESS">In Progress</option>
                            <option value="COMPLETED">Completed</option>
                        </select>
                    </div>
                    {fieldError ? <p className='text-red-500 my-1'>All Fields are required</p> : ""}
                    <div className='flex justify-end'><button className='py-2 px-3 w-full  bg-black mt-4 text-white rounded-md'>Submit</button></div>
                </form>
            </div>
        </div>
    )
}

export default CreateTask
