import React, { Component } from 'react';

class TodoApp extends Component {
    
    render () {
     
        const { todos, deleteData }  = this.props
        const todolist = todos.map( todo => {
            return (
            <tbody>
               <tr className="contain" key={todos.id}> 
                     <td className="date">      { todo.date}    </td>
                     <td className="academy" >   { todo.code}    </td>
                     <td className="vidoes">    { todo.vidoes}  </td>
                     <td className="books">     { todo.books}    </td>
                     <td className="practice">  { todo.practice} </td>
                    <td className="comment">    { todo.comment}   </td> 
                    <td className="delete" onClick={()=>{deleteData(todo.id)}} key={todo.date}>Delete</td>   
                </tr>       
            </tbody>
            )
        })


        return (
            <table className="content">
                    <thead>
                        <tr>
                        <th>DATE</th>
                        <th>CODEACADEMY</th>
                        <th>VIDEOS</th>
                        <th>BOOKS</th>
                        <th>PRACTICE</th>
                        <th>COMMENT</th>                    
                        </tr>
                    </thead>
                    
                      { todolist }
                      
            </table>
        )
    }


}
export default TodoApp