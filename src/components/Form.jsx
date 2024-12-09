import React, { useEffect, useState } from 'react'

const Form = ({addTodo ,edit, updateTodo}) => {
const[text , setText] = useState('')
console.log(edit);

  const handleSubmit = ((e) => {
    e.preventDefault()
     if (edit.isEdit){
      updateTodo(edit.todo.id, text);
     } else {
      addTodo(text);
     }
    setText('')
  })

  useState(() => {
    setText(edit.todo.text)
  },[edit])


  useEffect (() => {
   setText(edit.todo.text);
  },[edit])
  
  return (
    <form
    onSubmit={handleSubmit}
    className="my-3">
    <input
    value={text}
    onChange={(e) => {
      setText(e.target.value)
    }}
    type="text" placeholder='enter something' className="form-control rounded-0" required/>
    <button className="btn btn-success my-2 rounded-0 w-100">save</button>

  </form>
  )
}

export default Form