const NavIconReducer = (state=false,{type,payload})=>{
    switch (type) {
        case "NAV_ICON_CLICKED":
                return state=!state
        default:
            return state
    }
}
export default NavIconReducer;