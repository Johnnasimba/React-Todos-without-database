<div className="content"> 
                <table>
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
                    <tbody>
                        <tr>
                            <td className="date">2-Jun-2020</td>
                            <td className="academy">-----</td>
                            <td className="vidoes">5</td>
                            <td className="books">----</td>
                            <td className="practice">----</td>
                            <td className="comment">Not bad</td>
                            
                        </tr>
                        <tr>
                            <td>3-Jun-2020</td>
                            <td>----</td>
                            <td>10</td>
                            <td>----</td>
                            <td>----</td>
                            <td>goood</td>
                        </tr>
                        <tr>
                            <td> { this.state.todos.date} </td>
                            <td>{ this.state.todos.code}</td>
                            <td>{ this.state.todos.vidoes}</td>
                            <td>{ this.state.todos.books}</td>
                            <td>{ this.state.todos.practice}</td>
                            <td>{ this.state.todos.comment}</td>
                        </tr>
                        <tr>
                        </tr>
                    </tbody>
                    </table>


                    <p>  {new Date().toLocaleDateString()} </p>
            </div>