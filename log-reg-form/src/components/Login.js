  
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};

		this.update = this.update.bind(this);

		this.displayLogin = this.displayLogin.bind(this);
    }

    
    

	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	displayLogin(e) {
		e.preventDefault();
		// console.log('You are logged in');
		console.log(this.state);
		// this.setState({
		// 	email: '',
		// 	password: ''
        // });
        axios.post('https://reqres.in/api/login', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log('Missing password')
        })
	}

	render() {
     
		return (
            <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string()
                    .email('Email is invalid')
                    .required('Email is required'),
                password: Yup.string()
                    .min(6, 'Password must be at least 6 characters')
                    .required('Password is required')
            })}
            // onSubmit={fields => {
            //     alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
            // }}
            render={({  touched }) => (
                <div className="login">
                <h2>Login</h2>
               

				<form onSubmit={this.displayLogin}>
					
					<div className="username">
						
                        <Field name="email" type="text" placeholder = "Username..." value={this.state.email} onChange={this.update} className={'form-control' + ( touched.email ? ' is-invalid' : '')} />
                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                         
                       
					</div>

					<div className="password">
						
                        <Field name="password" type="password" placeholder = "Password.."  value={this.state.password} onChange={this.update} className={'form-control' + ( touched.password ? ' is-invalid' : '')} />
                        <ErrorMessage name="password" component="div" className="invalid-feedback" />
					</div>

					<input type="submit" value="Login" />
				</form>
              
				<Link to="/register">Create an account</Link>
			</div>
                
            )}
            />
		);
	}
}

export default Login;