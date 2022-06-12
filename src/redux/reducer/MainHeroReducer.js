const MainHeroReducer = (state="",{type,payload})=>{
    switch (type) {
        case "ADD_MAIN_HERO":
         return payload
        default:
        return state
    }
}
export default MainHeroReducer