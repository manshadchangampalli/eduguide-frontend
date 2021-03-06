import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import './Table.scss'

const Table = () => {
    const [urlArray, setUrlArray] = useState([])
    const [data, setData] = useState([])
    const { pathname } = useLocation()
    useEffect(() => {
        setUrlArray(pathname.split('/').splice(1, 2))
        fetch(`http://localhost:5000/api/post/get/${pathname.split('/').splice(1, 2)[1]}-${pathname.split('/').splice(1, 2)[0]}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data.data);
                console.log(data.data)
            })
    }, [])
    return (
        <div className='table'>
            <Navbar />
            <div className="tableWraper">
                <div className="headerPart">
                    {urlArray.length > 0 &&
                        <>
                            <h1>{urlArray[0]}</h1>
                            <p>{urlArray[1]}</p>
                        </>
                    }
                </div>
                <table>
                    <tr>
                        <th>SiNo</th>
                        <th>Name</th>
                        <th>Qualification</th>
                        <th>Date</th>
                    </tr>
                    {
                        data.map((data, i) => (
                            <tr>
                                <td>{i+1}</td>
                                <td><a href={`${data.hyperLink}`}>{data.title}</a></td>
                                <td>{data.qualification}</td>
                                <td>{data.date}</td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </div>
    )
}

export default Table