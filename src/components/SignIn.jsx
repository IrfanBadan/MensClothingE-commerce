import React, { useState, useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const formRef = useRef();

  useEffect(() => {
    gsap.fromTo(formRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.6 });
  }, []);

const handleSubmit = (e) => {
  e.preventDefault();
  login(email, password);

  if (email === 'admin@looque.com' && password === 'admin123') {
    navigate('/dashboard');
  } else {
    navigate('/');
  }
};


  return (
    <div className="container py-5 text-center">
      <h2 className="fw-bold mb-4">Login</h2>
      <form ref={formRef} onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '400px' }}>
        <input
          type="email"
          placeholder="Email"
          className="form-control mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="form-control mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-dark w-100">Login</button>
      </form>
    </div>
  );
}

export default SignIn;
