import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Mail, Lock } from 'lucide-react';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();
    
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    localStorage.setItem('vconnect-auth', 'true');
    navigate('/', { replace: true });
  };

  const getCompletedFields = () => {
    let count = 0;
    if (fullName) count++;
    count++; // Email static
    if (password) count++;
    if (confirmPassword) count++;
    return count;
  };

  const completed = getCompletedFields();
  const progressPercent = (completed / 4) * 100;

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
      background: 'linear-gradient(135deg, #2C5282 0%, #3182CE 100%)',
      padding: '60px 40px',
      color: 'white',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    backLink: {
      position: 'absolute',
      top: '20px',
      left: '20px',
      color: 'white',
      textDecoration: 'none',
      fontSize: '14px',
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
    },
    icon: {
      width: '80px',
      height: '80px',
      background: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '30px',
    },
    iconSvg: {
      width: '40px',
      height: '40px',
      fill: 'white',
    },
    h1: {
      fontSize: '32px',
      marginBottom: '15px',
      fontWeight: 'bold',
    },
    description: {
      fontSize: '14px',
      lineHeight: 1.6,
      opacity: 0.9,
    },
    rightSide: {
      width: '50%',
      padding: '50px 50px',
      position: 'relative',
      overflowY: 'auto'
    },
    signupHeaderH2: {
      fontSize: '32px',
      color: '#111827',
      marginBottom: '8px',
      textAlign: 'center'
    },
    signupHeaderP: {
      fontSize: '14px',
      color: '#6b7280',
      marginBottom: '20px',
      textAlign: 'center'
    },
    progressWrapper: {
      marginBottom: '24px',
    },
    progressLineBg: {
      width: '100%',
      height: '4px',
      background: '#e2e8f0',
      borderRadius: '2px',
      marginBottom: '8px',
      overflow: 'hidden'
    },
    progressLineFill: {
      height: '100%',
      background: '#5b7b97',
      borderRadius: '2px',
      width: `${progressPercent}%`,
      transition: 'width 0.3s ease'
    },
    progressText: {
      fontSize: '13px',
      color: '#64748b',
      textAlign: 'center',
    },
    formGroup: {
      marginBottom: '16px',
    },
    inputWrapper: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      background: 'white',
      border: '1px solid #e5e7eb',
      borderRadius: '16px',
      padding: '4px 16px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
    },
    emailWrapper: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      background: '#f0f7ff',
      border: '1px solid #bae6fd',
      borderRadius: '16px',
      padding: '14px 16px',
      marginBottom: '16px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
    },
    inputIcon: {
      color: '#94a3b8',
      marginRight: '12px'
    },
    emailIcon: {
      color: '#5b7b97',
      marginRight: '12px'
    },
    input: {
      flex: 1,
      height: '42px',
      border: 'none',
      background: 'transparent',
      fontSize: '14px',
      outline: 'none',
      color: '#1e293b'
    },
    emailText: {
      fontSize: '14px',
      color: '#475569',
    },
    emailDomain: {
      color: '#1e3a8a',
      fontWeight: '600'
    },
    toggleBtn: {
      width: '36px',
      height: '20px',
      borderRadius: '10px',
      background: '#0f172a',
      position: 'relative',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      marginLeft: '8px'
    },
    toggleCircle: {
      width: '14px',
      height: '14px',
      background: 'white',
      borderRadius: '50%',
      position: 'absolute',
      top: '3px',
      transition: 'left 0.2s',
    },
    signupBtn: {
      width: '100%',
      padding: '16px',
      background: '#8ba2b9', // matched to UI
      color: 'white',
      border: 'none',
      borderRadius: '16px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      marginTop: '12px',
      marginBottom: '18px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftSide}>
        <Link 
          to="/login" 
          style={styles.backLink}
          onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
          onMouseOut={(e) => e.target.style.textDecoration = 'none'}
        >
          ← Back to login
        </Link>
        
        <div style={styles.icon}>
          <svg style={styles.iconSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 14l9-5-9-5-9 5 9 5z"/>
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
            <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
          </svg>
        </div>
        <h1 style={styles.h1}>Student Portal</h1>
        <div style={styles.description}>
          Join our community of learners and take the next step in your educational journey.
        </div>
      </div>

      <div style={styles.rightSide}>
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
          <h2 style={styles.signupHeaderH2}>Create Account</h2>
          <p style={styles.signupHeaderP}>Sign up to get started</p>
          
          <div style={styles.progressWrapper}>
            <div style={styles.progressLineBg}>
              <div style={styles.progressLineFill}></div>
            </div>
            <div style={styles.progressText}>{completed} of 4 fields complete</div>
          </div>

          <form onSubmit={handleSignup}>
            <div style={styles.formGroup}>
              <div style={styles.inputWrapper}>
                <User size={20} style={styles.inputIcon} />
                <input 
                  style={styles.input}
                  type="text" 
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#8ba2b9';
                    e.target.style.boxShadow = '0 0 0 4px rgba(139, 162, 185, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e5e7eb';
                    e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.02)';
                  }}
                  required
                />
              </div>
            </div>

            <div style={styles.emailWrapper}>
              <Mail size={20} style={styles.emailIcon} />
              <div style={styles.emailText}>
                Your email will be: <span style={styles.emailDomain}>yourname@vitbhopal.ac.in</span>
              </div>
            </div>

            <div style={styles.formGroup}>
              <div style={styles.inputWrapper}>
                <Lock size={20} style={styles.inputIcon} />
                <input 
                  style={styles.input}
                  type={showPassword ? "text" : "password"} 
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#8ba2b9';
                    e.target.style.boxShadow = '0 0 0 4px rgba(139, 162, 185, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e5e7eb';
                    e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.02)';
                  }}
                  required
                />
                <button 
                  type="button" 
                  style={styles.toggleBtn}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <div style={{...styles.toggleCircle, left: showPassword ? '19px' : '3px'}}></div>
                </button>
              </div>
            </div>

            <div style={styles.formGroup}>
              <div style={styles.inputWrapper}>
                <Lock size={20} style={styles.inputIcon} />
                <input 
                  style={styles.input}
                  type={showConfirmPassword ? "text" : "password"} 
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#8ba2b9';
                    e.target.style.boxShadow = '0 0 0 4px rgba(139, 162, 185, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e5e7eb';
                    e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.02)';
                  }}
                  required
                />
                <button 
                  type="button" 
                  style={styles.toggleBtn}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <div style={{...styles.toggleCircle, left: showConfirmPassword ? '19px' : '3px'}}></div>
                </button>
              </div>
            </div>

            <button 
              type="submit" 
              style={{
                ...styles.signupBtn,
                background: (fullName && password && confirmPassword) ? '#3182CE' : '#8ba2b9',
                boxShadow: (fullName && password && confirmPassword) ? '0 4px 12px rgba(49, 130, 206, 0.3)' : '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
              onMouseOver={(e) => e.target.style.background = (fullName && password && confirmPassword) ? '#2C5282' : '#7a91a8'}
              onMouseOut={(e) => e.target.style.background = (fullName && password && confirmPassword) ? '#3182CE' : '#8ba2b9'}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
