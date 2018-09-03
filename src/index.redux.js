
const ADD_GUN = "add"
const MIXIN_GUN = "mixin"
export function couter(state =0 , action){
    switch(action.type){
        case ADD_GUN:
            return state+1 // 不能使用 ++
        case MIXIN_GUN:
            return state-1
        default:
            return 10
    }
}
export function addGun(){
    return {type: ADD_GUN}
}
export function mixinGun(){
    return {type: MIXIN_GUN}
}
export function addGunAsync(){
    return dispatch => {
        setTimeout(() => {
            dispatch(addGun())
        }, 2000);
    }
}
export function mixinGunAsync(){
    return dispatch => {
        setTimeout(() => {
            dispatch(mixinGun())
        }, 2000);
    }
}