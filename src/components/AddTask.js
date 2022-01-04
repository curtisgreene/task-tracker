import {useState} from 'react'
// import {setShowAddTask} from '../App.js'

const AddTask = ( {onAdd, hideAddTask} ) => {

  const [ text, setText] = useState('')
  const [ time, setTime] = useState('')
  const [ reminder, setReminder ] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if(!text){
      alert('Please add a task')
      return
    }
    onAdd({ text, time, reminder })
    hideAddTask()
    setText('')
    setTime('')
    setReminder(false)
  }
  return (
    <form className='add-form' onSubmit={(e) => onSubmit(e)}>
      <div className='form-control'>
        <label>Task</label>
        <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}/>
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input type='text' placeholder='Add Day and Time' value={time} onChange={(e) => setTime(e.target.value)}/>
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
      </div>
      <input className='btn btn-block' type='submit' value='Save Task' />
    </form>
  );
}

export default AddTask;
