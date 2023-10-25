import React, {useState} from 'react'
import {Container, Form, Button} from "react-bootstrap";
import "../styles/Signup.css";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios"
import API_URL from '../../config/global';

const Signup = () => {

    const [formData, setformData] = useState({
        name:"",
        email:"",
        password:""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setformData({
            ...formData,
            [name]:value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const response = await axios.post(`${API_URL}/signin/verify`, formData)
            console.log(response)
            if(response.data === true){
                alert("registration link sent to email")
            }else if(response.data === false){
                alert("user already exist")
            }
        }catch(error){
            console.log(error)
        }

    }


  return (
    <Container>
        <h1>Register</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' name='name' value={formData.name} onChange={handleChange} required />
            </Form.Group>

            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' name='email' value={formData.email} onChange={handleChange} required />
            </Form.Group>

            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' name='password' value={formData.password} onChange={handleChange} required />
            </Form.Group>

            <Button variant='primary' type='submit'>Register</Button>
            <p>Already have an account?<Link to="login" style={{textDecoration:"none"}}>Login</Link></p>
        </Form>

    </Container>
  )
}

export default Signup;
