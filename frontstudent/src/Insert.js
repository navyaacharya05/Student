import React, { useState } from "react";
import TextField from '@mui/material/TextField';
//import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import { append } from "./API";
//import { putting } from "./DataAccess";

const Insert=()=>{

    const[data,setDate]=useState(
        {
            "studentId":0,
            "name":"",
            "gender":"",
            "birthdate":"",
            "contactNo":0,
            "address":[]
        }
    )

    const perform=(eve)=>{
        // extraction
        const{name,value}=eve.target;
        setDate((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const adding=async()=>{

        // replacing simple text with , to list of text by , as delimiter
        data.address=data.address.split(',')
        alert(JSON.stringify(data))
        //putting(data)
        const yet=await append(data) // data: json of corporate
        alert(yet.data)
        // yet.data >> response keyword from back end which recieved by yet variable via axios
    }

    return(
        <>
            <div className="mt-4 container">
                <h1 className="display-2 text-center text-info">Enroll Student</h1>
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-sm-12 shadow-lg p-3">
                        <TextField
                        required
                        id="outlined-required"
                        label="Student Id"
                        onChange={perform}
                        name="studentId"
                        value={data.studentId}
                        className="form-control mb-3"
                        />
                        <TextField
                        required
                        id="outlined-required"
                        label="Student Name"
                        onChange={perform}
                        name="name"
                        value={data.name}
                        className="form-control mb-3"
                        />
                         <TextField
                        required
                        id="outlined-required"
                        label="Gender"
                        onChange={perform}
                        name="gender"
                        value={data.gender}
                        className="form-control mb-3"
                        />
                         <TextField
                        required
                        id="outlined-required"
                        label="Date Of Birth"
                        onChange={perform}
                        name="birthdate"
                        value={data.birthdate}
                        className="form-control mb-3"
                        />
                         <TextField
                        required
                        id="outlined-required"
                        label="Contact number"
                        onChange={perform}
                        name="contactNo"
                        value={data.contactNo}
                        className="form-control mb-3"
                        />
                        <InputLabel htmlFor="outlined-adornment-services">Student Address</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-services"
                            className="form-control mb-3"
                            onChange={perform}
                            name="address"
                            value={data.address}
                        />
                        
                        <div className="row justify-content-around">
                            <Button variant="outlined" color="primary" className="col-4" onClick={adding}>
                                <AddCircleIcon/>
                            </Button>
                            <Button variant="outlined" color="error" className="col-4">
                                <RotateLeftIcon/>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Insert;