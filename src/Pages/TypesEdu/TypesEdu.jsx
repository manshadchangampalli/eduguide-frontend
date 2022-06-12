import React, { useEffect, useState } from 'react'
import './Types.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Card from '../../Components/Service-section/card'
import { Link, useLocation } from 'react-router-dom'

const TypesEdu = () => {
    const [type, setType] = useState("")
    const route = useLocation()
    useEffect(() => {
        console.log(route);
        if (route.pathname === "/after12th") {
            setType("After 12th")
        } else if (route.pathname === "/afterdegree") {
            setType("After Degree")
        } else if (route.pathname === "/after10th") {
            setType("After 10th")
        } else {
            setType("Scholarships")
        }
    }, [])

    return (
        <div className='types'>
            <Navbar />
            <h1>{type}</h1>
            <div className="boxes">
                    <div className="card">
                <Link to={"exam"}>
                        <img src="https://cdn-icons-png.flaticon.com/512/3022/3022254.png" alt="" />
                        <h4>Exams</h4>
                </Link>
                    </div>
                    <div className="card">
                <Link to={"scholarship"}>
                        <img src="https://cdn-icons.flaticon.com/png/512/3511/premium/3511615.png?token=exp=1655056070~hmac=631212b481b920ff7202fbffc4d24662" alt="" />
                        <h4>Scholarship</h4>
                </Link>
                    </div>
                    <div className="card">
                <Link to={"jobs"}>
                        <img src="https://cdn-icons-png.flaticon.com/512/1243/1243560.png" alt="" />
                        <h4>Jobs</h4>
                </Link>
                    </div>
                    <div className="card">
                <Link to={"courses"}>
                        <img src="https://cdn-icons.flaticon.com/png/512/4711/premium/4711767.png?token=exp=1655056140~hmac=4aaf062c89c34ad95cd2c51d4ed16e11" alt="" />
                        <h4>Courses</h4>
                </Link>
                    </div>
            </div>
        </div>
    )
}

export default TypesEdu