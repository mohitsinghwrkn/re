import React, { useState, useEffect } from 'react'
import './CrudOps.css';
import axios from "axios";

const CrudOps = () => {

    const [crudRefresh, setCrudRefresh] = useState()
    const [employeeData, setEmployeeData] = useState([])
    const [Employee, setEmployee] = useState({})

    useEffect(() => {
        axios.get('http://172.16.30.30:5555/ex/rEmployee')
            .then(res => setEmployeeData(res.data))
    }, [crudRefresh])

    const handleCrudRefresh = () => setCrudRefresh(Math.random())

    const handleCreate = async (e) => {
        e.preventDefault();
        const createData = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
        }
        await axios.post('http://localhost:5555/ex/cEmployee', createData)
            .then(res => console.log(res.data))
        document.getElementById("resetC").reset()
        handleCrudRefresh()
    }

    const handleRead = (e) => {
        e.preventDefault();
        const paramString = e.target.id.value
        // e.target.id.value = '';
        axios.get('http://172.16.30.30:5555/ex/rEmployee/' + paramString)
            .then(res => setEmployee(res.data))
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        const updateData = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
        }
        const paramString = e.target.id.value
        await axios.post('http://localhost:5555/ex/uEmployee/' + paramString, updateData)
            .then(res => console.log(res.data))
        document.getElementById("resetU").reset()
        document.getElementById("crudR-btn").click();
        handleCrudRefresh()
    }

    const handleDelete = (e) => {
        e.preventDefault();
        const paramString = e.target.id.value
        e.target.id.value = '';
        axios.get('http://localhost:5555/ex/dEmployee/' + paramString)
            .then(res => console.log(res.data))
        document.getElementById("crudR-btn").click();
        handleCrudRefresh()
    }

    return (
        <div className='CrudOps'>
            <div style={{ color: "black" }} className='CrudOps-form'>
                <h1>Displaying All Data</h1><hr />
                {employeeData.map((document, index) => {
                    const { _id, firstName, lastName, email, phone } = document
                    return (
                        <div key={_id}>
                            Name: {firstName} {lastName} Email: {email} Phone: {phone} <br /> ID: {_id}
                        </div>
                    )
                })}
                <div className=''>
                    <button onClick={handleCrudRefresh}>Refresh <i className="fa fa-refresh"></i></button>
                </div>

            </div>
            <div style={{ color: "green" }} className='CrudOps-form'>
                <h1>Create</h1>
                <form onSubmit={handleCreate} id="resetC" >
                    <label htmlFor="id">Create Employee via Employee Details</label><br />
                    <input type="text" placeholder='firstName' name='firstName' /><br />
                    <input type="text" placeholder='lastName' name='lastName' /><br />
                    <input type="email" placeholder='email' name='email' /><br />
                    <input style={{marginBottom:"5px"}} type="number" placeholder='phone' name='phone' /><br />
                    <button style={{backgroundColor:"green", border:"none", color:"white"}}>Create</button>
                </form>
            </div>
            <div style={{ color: "royalblue" }} className='CrudOps-form'>
                <h1>Read</h1>
                <form onSubmit={handleRead}>
                    <label htmlFor="id">Read Employee Details via Employee ID</label><br />
                    <input style={{marginBottom:"5px"}} type="text" name='id' placeholder='Employee ID' /><br />
                    <button style={{backgroundColor:"royalblue", border:"none", color:"white"}} id='crudR-btn'>Read</button>
                </form><hr />
                <p>EMPLOYEE DETAILS</p>
                "Name": "{Employee.firstName} {Employee.lastName}", "Email": "{Employee.email}", "Phone": "{Employee.phone}" "Employee ID":{Employee._id}
            </div>
            <div style={{ color: "tomato" }} className='CrudOps-form'>
                <h1>Update</h1>
                <form onSubmit={handleUpdate} id="resetU" >
                    <label htmlFor="id">Update Employee Detail via Employee ID</label><br />
                    <input type="text" placeholder='Employee ID' name='id' /><hr />
                    <p>DATA TO BE UPDATED</p>
                    <input type="text" placeholder='firstName' name='firstName' /><br />
                    <input type="text" placeholder='lastName' name='lastName' /><br />
                    <input type="email" placeholder='email' name='email' /><br />
                    <input style={{marginBottom:"5px"}} type="number" placeholder='phone' name='phone' /><br />
                    <button style={{backgroundColor:"tomato", color:"white", border:"none"}}>Update</button>
                </form>
            </div>
            <div style={{ color: "red" }} className='CrudOps-form'>
                <h1>Delete</h1>
                <form onSubmit={handleDelete} >
                    <label htmlFor="id">Delete Employee via Employee ID</label><br />
                    <input style={{marginBottom:"5px"}} type="text" name='id' placeholder='Employee ID' /><br />
                    <button style={{backgroundColor:"red", color:"white", border:"none"}}>Delete</button>
                </form>
            </div>
        </div>
    )
}

export default CrudOps
