import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    experience: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');

  const { username, email, password, confirmPassword, experience } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({...errors, [e.target.name]: ''});
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setServerError('');

    let isValid = true;
    const newErrors = {};

    if (username.length < 3) newErrors.username = 'Username must be at least 3 characters';
    if (!email.includes('@')) newErrors.email = 'Enter a valid email address';
    if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (experience === '') newErrors.experience = 'Please select your experience level';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      isValid = false;
    }

    if (isValid) {
      setLoading(true);

      try {
        const response = await axios.post('http://localhost:5003/api/auth/register', {
          username,
          email,
          password,
          experience
        });

        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));

        setLoading(false);
        navigate('/');
      } catch (err) {
        setLoading(false);
        setServerError(err.response?.data?.message || 'Registration failed. Please try again.');
      }
    }
  };

  return (
    <div className="signup-page">
      <div className="index-container">
        <h2>Sign Up</h2>
        
        {serverError && <div className="error server-error">{serverError}</div>}
        
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleChange}
          />
          {errors.username && <span className="error">{errors.username}</span>}
          
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
          
          <input 
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
          
          <select 
            name="experience"
            value={experience}
            onChange={handleChange}
          >
            <option value="">Select Experience Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Experienced">Experienced</option>
          </select>
          {errors.experience && <span className="error">{errors.experience}</span>}
          
          <button type="submit" disabled={loading}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>

        <p>Already have an account? <Link to="/login">Log In</Link></p>
      </div>
    </div>
  );
};

export default Register;
