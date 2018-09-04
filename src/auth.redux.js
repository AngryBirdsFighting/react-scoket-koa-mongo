
const LOGIN = "login"
const LOGOUT = "logout"
export function auth(state ={isAuth: false, user:"李云龙"} , action){
    switch(action.type){
        case LOGIN:
            return Object.assign({},state, {isAuth:true})
        case LOGOUT:
            return {...state, isAuth: false}
        default:
            return state
    }
}
export function login(){
    return {type: LOGIN}
}
export function logout(){
    return {type: LOGOUT}
}