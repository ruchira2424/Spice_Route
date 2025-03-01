import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation for empty fields
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('All fields are required.');
      return;
    }

    // Password and confirm password must match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Successful submission (in real case, send data to server)
    console.log('Form submitted:', formData);

    // Reset form and error
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    setError('');
  };

  return (
    <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Signup</h2>
      {error && <div style={{ color: 'red', textAlign: 'center', marginBottom: '15px' }}>{error}</div>}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name" style={{ fontWeight: 'bold' }}>Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            style={{ padding: '10px', fontSize: '14px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ fontWeight: 'bold' }}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            style={{ padding: '10px', fontSize: '14px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password" style={{ fontWeight: 'bold' }}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
            style={{ padding: '10px', fontSize: '14px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="confirmPassword" style={{ fontWeight: 'bold' }}>Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            placeholder="Confirm your password"
            style={{ padding: '10px', fontSize: '14px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
          />
        </div>
        <button type="submit" style={{ padding: '12px', fontSize: '16px', color: 'white', backgroundColor: '#007bff', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '100%' }}>
          Signup
        </button>
      </form>
      <div style={{ textAlign: 'center', marginTop: '15px' }}>
        <p>Already have an account? <a href="/login" style={{ color: '#007bff', textDecoration: 'none' }}>Login</a></p>
      </div>
    </div>
  );
};

export default Signup;
