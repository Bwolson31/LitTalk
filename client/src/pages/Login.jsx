import React, { useState } from 'react';
import { Form, Button, Alert, Row, Col } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../graphql/mutations/loginUser';
import Header from '../components/Header';
import './Login.css';

const Login = () => {
  const [userFormData, setUserFormData] = useState({ username: '', password: '' });
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!event.currentTarget.checkValidity()) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    try {
      const { data } = await login({
        variables: { ...userFormData },
      });

      if (data && data.login && data.login.token) {
        Auth.login(data.login.token);
        window.location.assign('/profile');
      } else {
        setShowAlert(true);
      }
    } catch (err) {
      console.error("Error during login:", err);
      setShowAlert(true);
    }
  };

  return (
    <div className="auth-container">
      <div className="header-container">
        <Header /> {/* LitTalk header positioned to the left */}
      </div>
      <div className="login-form-container">
        <h2 className="modal-title mb-4 text-center">Login</h2> {/* Login title */}
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='warning'>
            Something went wrong with your login!
          </Alert>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your username"
              name="username"
              onChange={handleInputChange}
              value={userFormData.username}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={handleInputChange}
              value={userFormData.password}
              required
            />
          </Form.Group>
          <Button type="submit" variant="primary" className="w-100">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;


