import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import './showAll.scss'

const ShowAll = () => {
    const [data, setData] = useState([])
    const nav = useNavigate()
    useEffect(() => {
        if(!localStorage.getItem("creator")){
           nav("/")
        }
        fetch(`http://localhost:5000/api/post/getall`)
            .then((res) => res.json())
            .then((data) => {
                setData(data.data);
                console.log(data.data)
            })
    }, [])
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/api/post/del/${id}`,{
            method:"DELETE"
        })
            .then((res) => {
                console.log(res);
                if(res.status === 200){
                    alert("data deleted")
                    window.location.reload()
                }
            })
            
    }

  return (
    <div className='table'>
            <Navbar />
            <div className="tableWraper">
                <div className="headerPart">
                    All Data
                </div>
                <table>
                    <tr>
                        <th>SiNo</th>
                        <th>Name</th>
                        <th>Qualification</th>
                        <th>type</th>
                        <th>Date</th>
                        <th>Delete Data</th>
                    </tr>
                    {
                        data.map((data, i) => (
                            <tr>
                                <td>{i+1}</td>
                                <td><a href={`${data.hyperLink}`}>{data.title}</a></td>
                                <td>{data.qualification}</td>
                                <td>{data.type}</td>
                                <td>{data.date}</td>
                                <td><p className='deletebutton' onClick={()=>handleDelete(data._id)}>Delete</p></td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </div>
  )
}

export default ShowAll