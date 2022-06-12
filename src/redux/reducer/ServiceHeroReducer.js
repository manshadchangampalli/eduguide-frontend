const ServiceHeroReducer = (state="",{type,payload})=>{
    switch (type) {
        case "ADD_SERVICE_HERO":
         return payload
        default:
        return state
    }
}
export default ServiceHeroReducer