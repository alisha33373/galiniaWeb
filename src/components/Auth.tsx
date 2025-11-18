import { useState } from 'react';

export default function Auth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleGoogleLogin = () => {
    // Simulate Google login
    setIsLoggedIn(true);
    alert('Google login successful! (Demo)');
  };

  const handleEmailAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setIsLoggedIn(true);
      setShowEmailForm(false);
      alert(`${isSignUp ? 'Sign up' : 'Login'} successful! (Demo)`);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowEmailForm(false);
    setEmail('');
    setPassword('');
  };

  if (isLoggedIn) {
    return (
      <div style={{ 
        background: '#e8f5e8', 
        padding: '20px', 
        borderRadius: '8px',
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        <p style={{ color: '#27ae60', marginBottom: '15px' }}>
          ✅ Welcome! You're logged in and ready to meditate.
        </p>
        <button 
          onClick={handleLogout}
          style={{
            padding: '8px 16px',
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div style={{ 
      background: '#f8f9fa', 
      padding: '25px', 
      borderRadius: '10px',
      marginBottom: '20px',
      border: '1px solid #e9ecef'
    }}>
      <h3 style={{ 
        color: '#2c3e50', 
        marginBottom: '20px',
        textAlign: 'center'
      }}>Sign in to access personalized meditations</h3>

      {!showEmailForm ? (
        <div style={{ textAlign: 'center' }} className="auth-buttons">
          <button 
            onClick={handleGoogleLogin}
            style={{ 
              padding: '12px 24px',
              marginRight: '15px',
              backgroundColor: '#db4437',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            🔍 Continue with Google
          </button>

          <button 
            onClick={() => setShowEmailForm(true)}
            style={{ 
              padding: '12px 24px',
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              cursor: 'pointer'
            }}
          >
            📧 Use Email
          </button>
        </div>
      ) : (
        <form onSubmit={handleEmailAuth} style={{ maxWidth: '300px', margin: '0 auto' }}>
          <div style={{ marginBottom: '15px' }}>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ textAlign: 'center' }}>
            <button 
              type="submit"
              style={{
                padding: '10px 20px',
                backgroundColor: '#27ae60',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginRight: '10px'
              }}
            >
              {isSignUp ? 'Sign Up' : 'Login'}
            </button>
            
            <button 
              type="button"
              onClick={() => setShowEmailForm(false)}
              style={{
                padding: '10px 20px',
                backgroundColor: '#95a5a6',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Back
            </button>
          </div>

          <p style={{ 
            textAlign: 'center', 
            marginTop: '15px', 
            fontSize: '12px',
            color: '#7f8c8d'
          }}>
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            <button 
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              style={{
                background: 'none',
                border: 'none',
                color: '#3498db',
                cursor: 'pointer',
                textDecoration: 'underline',
                marginLeft: '5px'
              }}
            >
              {isSignUp ? 'Login' : 'Sign Up'}
            </button>
          </p>
        </form>
      )}
    </div>
  );
}
