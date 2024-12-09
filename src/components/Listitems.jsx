import React, { useEffect } from 'react'

const Listitems = ({todo ,handleDelete, handleEdit}) => {

  

 useEffect (()=> {
  
 },[]);


  return (
    <li className="list-group-item rounded-0 my-2"> <h2>{todo.text}</h2>
    <span>
    <button

    onClick={()=>{
        handleEdit(todo)
    }}
    className="btn btn-sm btn-warning mx-2 rounded-0 float-end">Edit</button>




    <button
    onClick={() => {
        handleDelete(todo.id)
    }}
    className="btn btn-sm btn-danger rounded-0 float-end">Delete</button>

    
    </span>
     
 </li> 
  )
}

export default Listitems