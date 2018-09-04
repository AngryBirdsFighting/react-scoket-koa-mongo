import React, { Component } from 'react';
import {Button} from 'antd-mobile'
import {connect} from 'react-redux' // 从外部获取组件需要的redux参数
import {addGun, addGunAsync, mixinGun, mixinGunAsync} from './index.redux'
import './App.css';



@connect(  // 效果同36行， 使用修饰器
  state => ({num: state.counter}), // 第一个参数state放入组件props中
  {addGun, addGunAsync, mixinGun, mixinGunAsync} // 第二个参数 actions放入组件props中 
)
class App extends Component {
  render() {
    return (
      <div>
         <Button onClick={() =>this.props.addGun()}>add</Button>
         <Button onClick={() =>this.props.mixinGun()}>mixin</Button>
         <Button onClick={() =>this.props.addGunAsync()}>addAsync</Button>
         <Button onClick={() =>this.props.mixinGunAsync()}>mixinAsync</Button>
      <h1>现在有{this.props.num}把机枪</h1>
      </div>
     
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get sed, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}
// 这种写法 必须放到 class App后面
// const mapState = (state) =>{ 
//   return {num: state}
// }
// const actions = {addGun, addGunAsync, mixinGun, mixinGunAsync} 
//App = connect(mapState, actions)(App)   第一个参数state, 第二个参数 actions  将redux的state action 放入组件props 中
export default App;
