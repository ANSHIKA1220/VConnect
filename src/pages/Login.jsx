import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GraduationCap, Mail, Lock } from 'lucide-react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      localStorage.setItem('vconnect-auth', 'true');
      localStorage.setItem('vconnect-theme', 'light');
      document.body.classList.remove('dark-mode');
      document.documentElement.classList.remove('dark');
      navigate('/', { replace: true });
    }
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
      background: 'linear-gradient(135deg, #2C5282 0%, #3182CE 100%)',
      padding: '60px 40px',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    logoCircle: {
      width: '100px',
      height: '100px',
      background: 'white',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '24px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
    },
    brandTitle: {
      fontSize: '42px',
      fontWeight: '800',
      marginBottom: '8px',
      letterSpacing: '-1px',
    },
    brandSubtitle: {
      fontSize: '18px',
      opacity: 0.9,
      fontWeight: '400',
    },
    rightSide: {
      width: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f8fafc',
      padding: '40px',
    },
    welcomeCard: {
      width: '100%',
      maxWidth: '440px',
      background: 'white',
      borderRadius: '28px',
      padding: '48px 40px',
      boxShadow: '0 20px 50px rgba(0, 0, 0, 0.05)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
    },
    iconCircle: {
      width: '64px',
      height: '64px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '24px',
    },
    mailCircle: { background: '#eff6ff' },
    header: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#0f172a',
      marginBottom: '8px',
      textAlign: 'center',
    },
    subtext: {
      fontSize: '15px',
      color: '#64748b',
      marginBottom: '32px',
      textAlign: 'center',
      lineHeight: '1.5',
    },
    form: { width: '100%' },
    inputGroup: {
      position: 'relative',
      marginBottom: '16px',
    },
    inputIcon: {
      position: 'absolute',
      left: '16px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#94a3b8',
    },
    input: {
      width: '100%',
      padding: '16px 16px 16px 48px',
      background: '#f8fafc',
      border: '1px solid #e2e8f0',
      borderRadius: '16px',
      fontSize: '15px',
      color: '#1e293b',
      outline: 'none',
      transition: 'all 0.2s',
      boxSizing: 'border-box',
    },
    toggleBtn: {
      position: 'absolute',
      right: '16px',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '36px',
      height: '20px',
      borderRadius: '10px',
      background: '#0f172a',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
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
    forgotPassword: {
      display: 'block',
      textAlign: 'right',
      color: '#64748b',
      fontSize: '13px',
      textDecoration: 'none',
      marginBottom: '24px',
      fontWeight: '500'
    },
    primaryBtn: {
      width: '100%',
      padding: '18px',
      background: '#8ba2b9', // from the new UI
      color: 'white',
      border: 'none',
      borderRadius: '16px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s',
      boxShadow: '0 4px 12px rgba(139, 162, 185, 0.3)',
      marginBottom: '24px',
    },
    divider: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      marginBottom: '24px',
      color: '#94a3b8',
      fontSize: '13px',
      fontWeight: '500',
    },
    dividerLine: { flex: 1, height: '1px', background: '#e2e8f0' },
    dividerText: { margin: '0 16px' },
    googleBtn: {
      width: '100%',
      padding: '14px',
      background: '#e05c51', // updated to the mockup red
      border: 'none',
      borderRadius: '14px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      color: 'white',
      fontSize: '15px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.2s',
      marginBottom: '24px',
    },
    googleIconBox: {
      width: '24px',
      height: '24px',
      background: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '6px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    signupLink: {
      color: '#0f172a',
      fontWeight: '600',
      textDecoration: 'none',
    },
    footerText: {
      textAlign: 'center',
      fontSize: '14px',
      color: '#64748b'
    }
  };

  return (
    <div style={styles.container}>
      {/* 1st Half: Branding */}
      <div style={styles.leftSide}>
        <div style={styles.logoCircle}>
          <GraduationCap size={56} color="#3182CE" fill="#3182CE" fillOpacity={0.1} />
        </div>
        <h1 style={styles.brandTitle}>VConnect</h1>
        <p style={styles.brandSubtitle}>Connect. Learn. Grow Together.</p>
      </div>

      {/* 2nd Half: Interactive Form */}
      <div style={styles.rightSide}>
        <div style={styles.welcomeCard}>
          <h2 style={styles.header}>Welcome Back</h2>
          <p style={styles.subtext}>Sign in to continue</p>

          <form style={styles.form} onSubmit={handleLogin}>
            <div style={styles.inputGroup}>
              <Mail size={20} style={styles.inputIcon} />
              <input 
                type="text" 
                placeholder="Username" 
                style={styles.input}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onFocus={(e) => {
                  e.target.style.borderColor = '#8ba2b9';
                  e.target.style.background = 'white';
                  e.target.style.boxShadow = '0 0 0 4px rgba(139, 162, 185, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e2e8f0';
                  e.target.style.background = '#f8fafc';
                  e.target.style.boxShadow = 'none';
                }}
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <Lock size={20} style={styles.inputIcon} />
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
                style={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={(e) => {
                  e.target.style.borderColor = '#8ba2b9';
                  e.target.style.background = 'white';
                  e.target.style.boxShadow = '0 0 0 4px rgba(139, 162, 185, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e2e8f0';
                  e.target.style.background = '#f8fafc';
                  e.target.style.boxShadow = 'none';
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

            <Link to="#" style={styles.forgotPassword}>Forgot Password?</Link>

            <button 
              type="submit" 
              style={{
                ...styles.primaryBtn,
                background: (username && password) ? '#3182CE' : '#8ba2b9',
                boxShadow: (username && password) ? '0 4px 12px rgba(49, 130, 206, 0.3)' : '0 4px 12px rgba(139, 162, 185, 0.3)'
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = (username && password) ? '#2C5282' : '#7a91a8'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = (username && password) ? '#3182CE' : '#8ba2b9'; }}
            >
              Sign In
            </button>
          </form>

          <div style={styles.divider}>
            <div style={styles.dividerLine}></div>
            <span style={styles.dividerText}>OR</span>
            <div style={styles.dividerLine}></div>
          </div>

          <button type="button" style={styles.googleBtn}>
            <div style={styles.googleIconBox}>
              <span style={{fontWeight: 'bold'}}>G</span>
            </div>
            Continue with Google
          </button>

          <div style={styles.footerText}>
            Don't have an account? <Link to="/signup" style={styles.signupLink}>Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
