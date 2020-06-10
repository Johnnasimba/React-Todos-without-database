import React, { Component } from 'react';

class Addtodos extends Component {
    state = {
        todos : {
            date: '',
            code: '',
            vidoes: '',
            books: '',
            practice: '',
            comment: '',
            id: ''
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state)
        e.target.reset()
    }
    handelChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })

    }

    render() {
        return (
            <div className="addtodos">
                
            <form className='add-form' onSubmit={this.handleSubmit}>
                <input type="date" placeholder="Add current Date" id="date" className="date" onChange={this.handelChange} required/>
                <input type="text" placeholder="code acadeny(%) done" id="code" className="code" onChange={this.handelChange} required/>
                <input type="number" placeholder="number fo vidoe tutoriala" id="vidoes" className="vidoes" onChange={this.handelChange} required/>
                <input type="number" placeholder="# of pages studied" id="books" className="books" onChange={this.handelChange} required/>
                <input type="text" placeholder="Any practice done (%)" id="practice" className="practice" onChange={this.handelChange} required/>
                <input type="text" placeholder="Overal comment" id="comment" className="comment" onChange={this.handelChange} required/>
                <button>Submit</button>
            </form>
            
                
            
            </div>


        )
    }
}
export default Addtodos;