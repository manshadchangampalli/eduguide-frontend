import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
BrowserRouter,
Routes,
Route
} from 'react-router-dom'
import ContactUs from './Pages/Contact us/ContactUs'
import Home from './Pages/Home/Home'
import Service from './Pages/Services/Service'
import { scrollAction } from './redux/action/action'
import ServiceData from './Data/ServiceData.json'
import ScrollTop from './Components/ScrollTopRouter/ScrollTop'
import TypesEdu from './Pages/TypesEdu/TypesEdu'
import Table from './Pages/Table/Table'
import CreatorPage from './Pages/CreatorPage/CreatorPage'
import Login from './Pages/signin/Signin'
import Signup from './Pages/Signup/Signup'
import Clogin from './Pages/creatorLogin/clogin'
import ShowAll from './Pages/showAll/ShowAll'

function Page() {
    const [scroll, setScroll] = useState(0)
    const dispatch = useDispatch()
    const scrollHandle = () =>{
        setScroll(window.scrollY)
    }
    useEffect(() => {
        window.addEventListener('scroll',scrollHandle)
    }, [])
    dispatch(scrollAction(scroll))
    return (
        <>
            <BrowserRouter>
                <ScrollTop />
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="contactus" element={<ContactUs/>}/>
                    <Route path="/:type" element={<TypesEdu/>}/>
                    <Route path="/:point/:type" element={<Table/>}/>
                    <Route path="/creator" element={<CreatorPage/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/cretorshowall" element={<ShowAll />}/>
                    <Route path="/creatorlogin" element={<Clogin/>}/>
                    <Route path="*" element={<h1>404</h1>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Page
