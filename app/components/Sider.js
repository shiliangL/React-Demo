
import ReactSwipe from 'react-swipe';
import React, { Component } from 'react'
 
export default class Sider extends Component {
  render() {
    //配置
    let Option = {
      // auto:2000,
      continuous: true,
      callback(index){
        // console.log(index)
      }
    }

    return (
      <ReactSwipe className="carousel Sider" swipeOptions={Option}>
        <div>PANE 1</div>
        <div>PANE 2</div>
        <div>PANE 3</div>
        <div>PANE 4</div>
     </ReactSwipe>
    )
  }
}
