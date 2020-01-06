import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../js/actions/index'


class AddTodo extends Component {
    state={

        inputText:""
    }
    handleChange=(e)=>{
        this.setState({inputText:e.target.value})
    }
    render() {
        console.log(this.props)
        return (
            <div className="input-section">
                <h1 className="head-title">Todolist</h1>
                <input onChange={this.handleChange}/>
                <button onClick={()=>{this.props.addTodo(
                    {text:this.state.inputText, isComplete:false, isEditing:false, id: Math.random()}
                    )}}>Add</button>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {todos: state.todoList}
}
const mapDispatchToProps=(dispatch)=>{
    return { addTodo: payload=> dispatch(addTodo(payload)) }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)