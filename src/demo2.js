
import {createStore} from 'redux'
// 新建store
// 通过reducer建立
// 根据老的state 和 action 生成新的 state
function couter(state =0 , action){
    switch(action.type){
        case 'add':
            return state+1 // 不能使用 ++
        case 'mixin':
            return state-1
        default:
            return 10
    }
}
// 获取state
const store =  createStore(couter)
function lister(){
    var init = store.getState()
    console.log(`现在有${init}把机关枪`)
}
// 订阅， 监视state 变化， 初始不会监视
store.subscribe(lister)
// 派发事件 传递action
store.dispatch({type: 'add'})
console.log(store.getState())
store.dispatch({type: 'mixin'})
console.log(store.getState())
