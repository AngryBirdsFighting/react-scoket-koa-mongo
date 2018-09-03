import React from "react"
import {Button, List} from 'antd-mobile'

class App extends React.Component{

    render(){
      const a = "李云龙独立团d"
      return <div><h1> {a}</h1><Zhangdabiao name = "一营张大彪"></Zhangdabiao>
      <Qibinglian  name = "宋德胜"></Qibinglian></div>
    }
}
class Zhangdabiao extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
        solders: ["虎子", "柱子", "王根生"]
    }
    // this.addSolder = this.addSolder.bind(this)
  }
  addSolder(){
    console.log(this)
    this.setState({
      solders:[ ...this.state.solders,`新兵蛋子${Math.random()}` ]
    })
    console.log("新兵入伍")
  }
  render(){
    return(<div><h2> {this.props.name}</h2>
    <Button type = 'primary' onClick = {() =>this.addSolder()}>新兵入伍</Button>
    <List renderHeader={() =>'士兵列表'} >
    {this.state.solders.map( v => {
      return <List.Item key={v}>{v}</List.Item>
    })}
    </List>
   
    </div>) 
  }
}
function Qibinglian(props){
    return <h3> {props.name}</h3>
}
export default App
