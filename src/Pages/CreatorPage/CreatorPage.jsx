import React, { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import './Creator.scss'

const CreatorPage = () => {
    const title = useRef()
    const qualification = useRef()
    const type = useRef()
    const date = useRef()
    const link = useRef()
    const nav = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem("creator")) {
            nav("/")
        }
    }, [])
    const addData = () => {
        const data = {
            title: title.current.value,
            qualification: qualification.current.value,
            hyperLink: link.current.value,
            date: date.current.value,
            type: `${type.current.value}-${qualification.current.value}`
        }
        fetch("http://localhost:5000/api/post/add", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                console.log(res);
                alert("data added successfully")
                title.current.value = ""
                qualification.current.value = ""
                link.current.value = ""
                date.current.value = ""
                type.current.value = ""
            })
            .catch(err => {
                alert("data added failed" + err)
            })
        

    }
    return (
        <div className="createadformechine">
            <Navbar />
            <div className="boxcontainter">
                <h1>create</h1>
                <div>
                    <p>Name</p>
                    <input ref={title} type="text" />
                </div>
                <div>
                    <p>Link</p>
                    <input ref={link} type="text" />
                </div>
                <div>
                    <p>Type</p>
                    <select ref={type} name="" id="">
                        <option value="exam">Exam</option>
                        <option value="job">Job</option>
                        <option value="scholarship">Scholarship</option>
                        <option value="courses">Courses</option>
                    </select>
                </div>
                <div>
                    <p>level</p>
                    <select ref={qualification} name="" id="">
                        <option value="after10th">After 10th</option>
                        <option value="after12th">After 12th</option>
                        <option value="afterdegree">After Degree</option>
                        <option value="scholarship">Scholarship</option>
                    </select>
                </div>
                <div>
                    <p>Date</p>
                    <input ref={date} type="date" />
                </div>

                <div className="buttons">
                    <button onClick={addData} className="button">Create</button>
                    <button className="button">Discard</button>
                </div>
                <Link to={"/cretorshowall"}>Show All</Link>
            </div>

        </div>
    )
}

export default CreatorPage

// title:{
//     type: String,
//     required: true
// },
// qualification:{
//     type: String,
//     required: true
// },
// hyperLink:{
//     type: String,
//     required: true
// },
// date:{
//     type: String,
// },
// type:{
//     type: String,
//     required: true
// },