import React, { useState } from 'react';
import './AuthPage.css';

const AuthPage = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    qualification: '',
    certificate: null,
    username: '',
    password: '',
  });

  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const handleRegisterChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'certificate') {
      setFormData({ ...formData, certificate: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!formData.certificate) {
      setMessage('Please upload a certificate file.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const user = {
        ...formData,
        certificate: reader.result, // Base64-encoded file
      };

      const existing = localStorage.getItem(formData.username);
      if (existing) {
        setMessage('Username already exists!');
      } else {
        localStorage.setItem(formData.username, JSON.stringify(user));
        setMessage('Registration successful! Please login.');
        setFormData({
          name: '',
          qualification: '',
          certificate: null,
          username: '',
          password: '',
        });
        setIsRegistered(true);
      }
    };

    reader.readAsDataURL(formData.certificate);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = localStorage.getItem(loginData.username);
    if (!storedUser) {
      setMessage('User not found.');
      return;
    }

    const userObj = JSON.parse(storedUser);
    if (userObj.password === loginData.password) {
      setMessage(`Welcome, ${userObj.name}!`);
    } else {
      setMessage('Incorrect password.');
    }
  };

  return (
    <div className="auth-container">
      <h2>{isRegistered ? `Doctor's Login` : `Doctor's Register`}</h2>
      {message && <p className="auth-message">{message}</p>}

      {!isRegistered ? (
        <form onSubmit={handleRegister} className="auth-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleRegisterChange}
            required
          />
          <input
            type="text"
            name="qualification"
            placeholder="Qualification"
            value={formData.qualification}
            onChange={handleRegisterChange}
            required
          />
          <input
            type="file"
            name="certificate"
            accept=".pdf,.jpg,.png"
            onChange={handleRegisterChange}
            required
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleRegisterChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleRegisterChange}
            required
          />
          <button type="submit">Register</button>
          <p className="auth-toggle" onClick={() => setIsRegistered(true)}>
            Already registered? Login
          </p>
        </form>
      ) : (
        <form onSubmit={handleLogin} className="auth-form">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={loginData.username}
            onChange={handleLoginChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleLoginChange}
            required
          />
          <button type="submit">Login</button>
          <p className="auth-toggle" onClick={() => setIsRegistered(false)}>
            Need to register? Click here
          </p>
        </form>
      )}
    </div>
  );
};

export default AuthPage;
