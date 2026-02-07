import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('Login attempt:', { email, password });
    alert('Login functionality would be implemented here');
  };

  const styles = {
    container: {
      display: 'flex',
      width: '100%',
      height: '100vh',
      background: 'white',
      overflow: 'hidden',
    },
    leftSide: {
      width: '50%',
      background: 'linear-gradient(135deg, #5483B3 0%, #6a9ac4 100%)',
      padding: '60px 40px',
      color: 'white',
      position: 'relative',
    },
    icon: {
      width: '60px',
      height: '60px',
      background: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '15px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '40px',
    },
    iconSvg: {
      width: '30px',
      height: '30px',
      fill: 'white',
    },
    h1: {
      fontSize: '48px',
      marginBottom: '10px',
    },
    subtitle: {
      fontSize: '20px',
      marginBottom: '30px',
      opacity: 0.9,
    },
    description: {
      fontSize: '14px',
      lineHeight: 1.6,
      opacity: 0.8,
    },
    rightSide: {
      width: '50%',
      padding: '60px 50px',
      position: 'relative',
    },
    loginHeaderH2: {
      fontSize: '32px',
      color: '#111827',
      marginBottom: '8px',
    },
    loginHeaderP: {
      fontSize: '13px',
      color: '#6b7280',
      marginBottom: '30px',
    },
    formGroup: {
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      fontSize: '14px',
      color: '#374151',
      marginBottom: '8px',
    },
    inputWrapper: {
      position: 'relative',
    },
    inputIcon: {
      position: 'absolute',
      left: '15px',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '18px',
      height: '18px',
      fill: '#9ca3af',
    },
    input: {
      width: '100%',
      padding: '14px 45px',
      border: '1px solid #e5e7eb',
      borderRadius: '10px',
      fontSize: '14px',
      background: '#f9fafb',
      outline: 'none',
      boxSizing: 'border-box',
    },
    forgotPassword: {
      textAlign: 'right',
      marginBottom: '25px',
    },
    forgotPasswordLink: {
      color: '#5483B3',
      textDecoration: 'none',
      fontSize: '13px',
    },
    loginBtn: {
      width: '100%',
      padding: '16px',
      background: 'linear-gradient(135deg, #5483B3 0%, #4a7199 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '10px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      marginBottom: '20px',
    },
    signupLink: {
      textAlign: 'center',
      fontSize: '13px',
      color: '#6b7280',
    },
    signupLinkA: {
      color: '#5483B3',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
    footer: {
      textAlign: 'center',
      marginTop: '30px',
      fontSize: '11px',
      color: '#9ca3af',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftSide}>
        <div style={styles.icon}>
          <svg style={styles.iconSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
          </svg>
        </div>
        <h1 style={styles.h1}>Hello!</h1>
        <div style={styles.subtitle}>Welcome Student</div>
        <div style={styles.description}>
          Access your courses, assignments, and grades in one place.
        </div>
      </div>

      <div style={styles.rightSide}>
        <div>
          <h2 style={styles.loginHeaderH2}>Login</h2>
          <p style={styles.loginHeaderP}>Please enter your credentials to access your portal</p>
        </div>

        <form onSubmit={handleLogin}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <div style={styles.inputWrapper}>
              <svg style={styles.inputIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <input 
                style={styles.input}
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={(e) => {
                  e.target.style.borderColor = '#5483B3';
                  e.target.style.background = 'white';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e5e7eb';
                  e.target.style.background = '#f9fafb';
                }}
                required
              />
            </div>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <div style={styles.inputWrapper}>
              <svg style={styles.inputIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
              <input 
                style={styles.input}
                type="password" 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={(e) => {
                  e.target.style.borderColor = '#5483B3';
                  e.target.style.background = 'white';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e5e7eb';
                  e.target.style.background = '#f9fafb';
                }}
                required
              />
            </div>
          </div>

          <div style={styles.forgotPassword}>
            <a 
              href="#" 
              style={styles.forgotPasswordLink}
              onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
              onMouseOut={(e) => e.target.style.textDecoration = 'none'}
            >
              Forgot Password?
            </a>
          </div>

          <button 
            type="submit" 
            style={styles.loginBtn}
            onMouseOver={(e) => e.target.style.background = 'linear-gradient(135deg, #4a7199 0%, #3d5f80 100%)'}
            onMouseOut={(e) => e.target.style.background = 'linear-gradient(135deg, #5483B3 0%, #4a7199 100%)'}
          >
            Login
          </button>

          <div style={styles.signupLink}>
            New here? <a 
              href="/signup" 
              style={styles.signupLinkA}
              onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
              onMouseOut={(e) => e.target.style.textDecoration = 'none'}
            >
              Sign Up
            </a>
          </div>

          
        </form>
      </div>
    </div>
  );
};

export default Login;
