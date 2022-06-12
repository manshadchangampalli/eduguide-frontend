const scrollReducer = (state = 0,{type,payload}) =>{
    switch(type){
        case "SCROLL_VALUE":
            return payload
        default:
            return state
    }

}

export default scrollReducer