import styles from './index.css';
import React from 'react';
import { useState, useEffect } from 'react'
import { Button, Row, Col, Form, InputGroup, Alert } from "react-bootstrap"
import { NavLink } from 'react-router-dom'

function Signup() {
    const [userDetails, setUserDetails] = useState({
		firstName: '',
		email: '',
		password: '',
		confirmPassword: '',
	})
	const [error, setError] = useState({
		firstName: false,
		email: false,
		password: false,
		confirmPassword: false,
	})
	const [submit, setSubmit] = useState(false)
	const [success, setSuccess] = useState(false)

	useEffect(() => {
		if(submit && !Object.values(error).includes(true)){
			setSuccess(true)
			setUserDetails({
				firstName: '',
				email: '',
				password: '',
				confirmPassword: '',
			})
		}
	}, [submit, error])
	
  const handleSubmit = (e) => {
		e.preventDefault();
		setSubmit(true)

		const { firstName, email, password, confirmPassword} = userDetails

		if(firstName.length >= 2 &&
            email.includes("@") &&
			email.includes(".") &&
			email.indexOf("@") != 0 &&
			email.length - email.lastIndexOf(".") >= 3 &&
            password.length >= 3 &&
            confirmPassword == password) {
			setError((previousError) => ({
				...previousError,
				firstName: false
			}))
		} else {
			setError((previousError) => ({
				...previousError,
				firstName: true
			}))
		}
  };


    return<div className='regForm'>
    <p className='heading'>Signup</p>
    <Form onSubmit={handleSubmit} className='reg'>

    <Form.Label>{/*First name*/}</Form.Label>
    <Form.Control className='inputfield'
              type="text"
              placeholder="First name"
              value={userDetails.firstName}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  firstName: e.target.value,
                })
              }
            />
            

    <Form.Label>{/*Email*/}</Form.Label>
    <Form.Control className='inputfield'
                type="text"
                placeholder="Email"
                aria-describedby="inputGroupPrepend"
                value={userDetails.email}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    email: e.target.value,
                  })
                }
              />

     <Form.Label> {/* Password */} </Form.Label>
     <Form.Control 
                 type="password" placeholder="Password"
                 value={userDetails.password}
                 onChange={(e) =>
                 setUserDetails({
                   ...userDetails,
                   password: e.target.value,
                 })
               } 
             />         

     <Form.Label> {/* Confirm Password */} </Form.Label>
     <Form.Control 
                 type="password" placeholder="Confirm Password"
                 value={userDetails.confirmPassword}
                 onChange={(e) =>
                 setUserDetails({
                   ...userDetails,
                   confirmPassword: e.target.value,
                 })
               } 
             />
              {submit && !success && (error.firstName ? (
              <Form.Control.Feedback className='invalid' type="invalid">
                Error:All the fields are mandatory
              </Form.Control.Feedback>
            ) : (
              <Form.Control.Feedback className='valid'>Successfully Signed Up!</Form.Control.Feedback>
            ))}
            {success && (
            <Alert variant="success" className='valid'>Successfully Signed Up!</Alert>
            )}
     
     <Button className='Signup_button' variant="dark" type="submit">
     Signup
      </Button>
    </Form>
</div>
}

export default Signup;
