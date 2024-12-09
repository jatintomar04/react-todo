import React from 'react'
import Listitems from './Listitems'


const ListGroup = ({todos ,handleDelete, handleEdit }) => {
  return (
    
     
    <ul className="list-group">
      {
        todos.map((todo) => <Listitems 
        key={todo.id}
         todo={todo}
          handleDelete={handleDelete}
           handleEdit={handleEdit}/>)
      }
 </ul>

  )
}

export default ListGroup