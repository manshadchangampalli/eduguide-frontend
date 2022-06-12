import { combineReducers } from "redux";
import MainHeroReducer from "./MainHeroReducer";
import NavIconReducer from "./NavIconReducer";
import scrollReducer from "./scrollReducer";
import ServiceHeroReducer from "./ServiceHeroReducer";

export const allReducers = combineReducers({
    scrollValue: scrollReducer,
    navClick : NavIconReducer,
    MainHero: MainHeroReducer,
    ServiceHero:ServiceHeroReducer
})
