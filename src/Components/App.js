import React from 'react'
import Task from './Task'
class App extends React.Component{
    constructor(){
        super()
        this.state={
            todoTask:"",
            todoList:[]
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }
    handleSubmit(event){
            event.preventDefault()
            this.state.todoList.push(this.state.todoTask)
            this.setState({
                todoTask:""
            })
            console.log(this.state.todoList)
    }
    handleChange(event){
        event.preventDefault()
        this.setState({
            todoTask:event.target.value
        })
    }
    render(){
        return (
            <div>
                <h1 className="main-heading">TODO APPLICATION</h1>
                <form onSubmit={this.handleSubmit}>
                    <label className="ml-5"><b>Enter the task to do:</b></label>
                    <input type="text" placeholder="Task" name="TodoTask" onChange={this.handleChange} value={this.state.todoTask}/>
                    <button type="submit">ADD</button>
                </form>
                {this.state.todoList.map(task=>{
                    return (
                        //  <div className="tasks">
                        //      <h2 className="mr-1">{task}</h2>
                        //      <button type="button" onClick={this.completedTask}>DONE</button>
                        //  </div>
                        <Task printtask={task} key={task}/>
                    )
                })}
            </div>
        )
    }
}
export default App