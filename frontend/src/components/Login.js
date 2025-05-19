import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  }); 
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({ email: '', password: '' });
    setServerError('');
    let isValid = true;

    if (!email.trim()) {
      setErrors(prev => ({ ...prev, email: 'Email is required' }));
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors(prev => ({ ...prev, email: 'Email is invalid' }));
      isValid = false;
    }

    if (!password) {
      setErrors(prev => ({ ...prev, password: 'Password is required' }));
      isValid = false;
    }

    if (isValid) {
      setLoading(true);

      try {
        const response = await axios.post('http://localhost:5003/api/auth/login', { email, password });

        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));

        setLoading(false);
        navigate('/home'); // Redirecting to home page after successful login
      } catch (err) {
        setLoading(false);
        setServerError(err.response?.data?.message || 'Login failed. Please try again.');
        console.error('Login error:', err);
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>

        {serverError && <div className="error server-error">{serverError}</div>}

        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <input 
            type="password" 
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}

          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
          <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
