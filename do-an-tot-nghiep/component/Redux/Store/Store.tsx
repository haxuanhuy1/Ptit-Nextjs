const initState = {
    id : 1,
    payload : false
}
const reduxStore = (state = initState , actions : {type:string})=>{
    switch(actions.type){
        case 'DECREMENT':
            return {
                ...state,
                payload : true
            }
            case 'SEACHCREMENT':
                return {
                    ...state,
                    payload : false
                }
    }

}
export default reduxStore;
