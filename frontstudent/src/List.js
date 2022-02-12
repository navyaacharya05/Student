import React, { useEffect, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Insert from "./Insert";
//import info, { getting } from './DataAccess'
import Read from "./Read";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import EditIcon from '@mui/icons-material/Edit';
import Edit from "./Edit";
import Button from '@mui/material/Button';
import { oneAtTime, terminate, traverse } from "./API";



const List=()=>{
    const [cview,setCview]=useState(false)
    const [rview,setRview]=useState(false)
    const [eview,setEview]=useState(false)
    const [company,setCompany]=useState("")

    const [all,setAll]=useState([])

    useEffect(()=>{
        iterate()
    },[])

    const iterate=async()=>{
        const t=await traverse()
        setAll(t.data)
    }

    const [obj,setObj]=useState(
        {
            "studentId":0,
            "name":"",
            "gender":"",
            "birthdate":"",
            "contactNo":0,
            "address":[]
        }
    )

    const callInsert=()=>{
        setCview(true)
    }

    const reading=async(one)=>{
        const hey=await oneAtTime(one)
        setObj(hey.data)
    }

    const abort=async(par)=>{
        const yet=await terminate(par)
        alert(yet.data)
        window.location.assign("http://localhost:3000")
    }
    return(
        <>
            {(cview)?
            <>
                <Insert/>
                <button className="btn btn-outline-dark" 
                onClick={()=>setCview(false)}>
                    Back
                </button>
            </>
            :
            (rview)?
            <>
                <Read corp={obj}/>
                <button className="btn btn-outline-dark" 
                onClick={()=>setRview(false)}>
                    Back
                </button>
            </>
            :
            (eview)?
            <>
                <Edit id={company}/>
                <button className="btn btn-outline-dark" 
                onClick={()=>setEview(false)}>
                    Back
                </button>
            </>
            :
            <>
            <button className="btn btn-outline-success" onClick={callInsert}>
                Insert
            </button>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12 table-responsive">
                    <table className="table table-stripped table-hover shodow text-light bg-info">
                        <thead>
                            <tr>
                                <th>Student Id</th>
                                <th>Student Name</th>
                                <th>Gender</th>
                                <th>Date of Birth</th>
                                <th>Contact Number</th>
                                <th>Student Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {all.map((data,index)=>(
                                <tr>
                                    <td onClick={
                                        ()=>{
                                            setRview(true)
                                            reading(data.org)
                                        }}>
                                        {data.studentId}
                                    </td>
                                    <td>{data.name}</td>
                                    <td>{data.gender}</td>
                                    <td>{data.birthdate}</td>
                                    <td>{data.contactNo}</td>
                                    <td>
                                        {data.address.map((ele)=>(
                                            <p>{ele}</p>
                                        ))}
                                    </td>
                                    <td>
                                        <Button color="error" className="btn btn-outline-danger" onClick={
                                            ()=>{
                                                abort(data.studentId)
                                            }
                                        }>
                                            <RemoveCircleIcon/>
                                        </Button>
                                    </td>
                                    <td>
                                        <Button color="warning" className="btn btn-outline-warning" onClick={
                                            ()=>{
                                                setEview(true)
                                                setCompany(data.studentId)
                                            }
                                        }>
                                            <EditIcon/>
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            </>
            }
        </>
    );
}

export default List;