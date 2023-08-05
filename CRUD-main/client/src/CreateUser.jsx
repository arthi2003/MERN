import React,{ useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function CreateUser () {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createUser", {name, email, age})
        .then(result => {
          console.log(result)
          navigate('/')
        })
        .catch(err => console.log(err))
    }
    return(
        <div className='d-flex  justify-content-center align-items-center bg-primary vh-100 '>
            <div className="bg-white p-3 rounded w-50">
              <form onSubmit={Submit}>
                <h2>Add User</h2>
                <div className='mb-2'>
                    <label htmlFor="name"><strong>Name</strong></label>
                    <input type="text" placeholder="Enter Name" className="form-control"
                    onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder="Enter Email" className="form-control"
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="age"><strong>Age</strong></label>
                    <input type="text" placeholder="Enter Age" className="form-control"
                    onChange={(e) => setAge(e.target.value)}/>
                </div>
                <button className='btn btn-success'>Submit</button>
                </form>  
                
            </div>
        </div>
    )
}
export default CreateUser;

