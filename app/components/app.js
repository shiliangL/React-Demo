import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class  AddTodo extends Component {
    handleClick(){
        console.log('点击了')
        console.log(this.props)
        this.props.dispatch(addTodo('测试'))
    }

    render() {
        return (
            <div>
                页面测试xxx
                <button onClick={()=>{this.handleClick()}}>按键</button>
            </div>
        )
    }
}

const App = connect(

)(AddTodo)
export default App