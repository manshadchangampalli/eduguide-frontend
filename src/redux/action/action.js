export const scrollAction = (payload) =>{
    return{
        type:"SCROLL_VALUE",
        payload
    }
}
export const navIconAction = (payload)=>{
    return{
        type:"NAV_ICON_CLICKED",
        payload
    }
}

export const mainHeroAction = (payload)=>{
    return{
        type:"ADD_MAIN_HERO",
        payload
    }
}
export const serviceHeroAction = (payload)=>{
    return{
        type:"ADD_SERVICE_HERO",
        payload
    }
}