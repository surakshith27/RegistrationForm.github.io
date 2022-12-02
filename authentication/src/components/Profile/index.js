import styles from './index.css';
import React from 'react';
import { useState, useEffect } from 'react'
import { Button, Row, Col, Form, InputGroup, Alert } from "react-bootstrap"
import { NavLink } from 'react-router-dom'

function Profile (){
    return<div className='detales'>
        <div className='heading'>Profile</div>
        <div className='name'>Full Name :</div>
        <div className='email'>Email :</div>
        <div className='password'>Password :</div>
        <Button className='Logout_button' variant="dark" type="submit">
        <NavLink to="/" className='Logout_button'>
              Logout
            </NavLink>
        </Button>
    </div>
}

export default Profile;