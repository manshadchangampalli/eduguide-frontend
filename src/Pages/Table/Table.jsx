import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import './Table.scss'

const Table = () => {
    const [urlArray, setUrlArray] = useState([])
    const { pathname } = useLocation()
    useEffect(() => {
        setUrlArray(pathname.split('/').splice(1, 2))
    }, [])
    console.log(urlArray);

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
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td><a href="https:/www.google.com">Google</a></td>
                        <td>Germany</td>
                        <td>Germany</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Table