import React, { Component } from 'react';

class ToDo extends Component {
    constructor(){
        super();
        this.state = {
            toDoList : [],
            count: 0,
            tempTodo: ''
        }
        this.addTodo = this.addTodo.bind(this);
        // this.checkTodo = this.checkTodo.bind(this);
    }

    addTodo = () => {
        let tempp = {
            id: this.state.count+1,
            value: this.state.tempTodo,
            isDone: false
        }
        this.state.toDoList.push(tempp);
        this.setState({count: this.state.count + 1, tempTodo: ''})
    }

    textOnChange = (e) => {
        this.setState({ tempTodo: e.target.value })
    }

    render() {

        const checkTodo = (id) => {
            const temptodo = [...this.state.toDoList];
            temptodo[id-1].isDone = !temptodo[id-1].isDone;
            this.setState({ toDoList: temptodo });
        }

        const renderList = this.state.toDoList.map((item,idx)=>(
            <div className='list-item' key={item.id}>
                <input type='checkbox' checked={item.isDone} onChange={ () => checkTodo(item.id)} disabled={item.isDone} ></input>
                <span className={`${ item.isDone ? "itemm checked" : "itemm" }`}>{item.value}</span>

                {/* {
                    item.isDone ?
                        <span className={`${ item.isDone ? "itemm checked" : "itemm" }`}>{item.value}</span>
                    :
                        <span className={item.value}>{item.value}</span>
                } */}
            </div>
        ));

        return (
            <>
                <h4> Enter a to-do item to add to the master list below.</h4>
                <h5> Check from the boxif you have completed.</h5>

                <div className='input-div'>
                    <input placeholder="Enter a task..." type="text" value={this.state.tempTodo} onChange={this.textOnChange} ></input>
                    <button onClick={this.addTodo}>Submit</button>
                </div>
                <div className='list-wrapper-parent'>
                    My Todos :
                    <div className='list-wrapper'>
                        {renderList}
                    </div>
                </div>
            </>
        )
    }
}

export default ToDo;