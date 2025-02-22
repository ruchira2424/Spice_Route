import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  const styles = {
    topBarSection: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 48px',
      backgroundColor: 'white',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    },
    companyTitle: {
      margin: 0
    },
    link: {
      textDecoration: 'none',
    },
    titleText: {
      color: '#dc2626', // Vibrant red color
      fontSize: '24px',
      fontWeight: '700',
      margin: 0,
      letterSpacing: '-0.5px',
      textTransform: 'uppercase'
    },
    searchBar: {
      flex: '0 1 400px'
    },
    searchInput: {
      width: '100%',
      padding: '10px 16px',
      fontSize: '15px',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      outline: 'none',
      transition: 'all 0.2s ease',
    },
    userAuth: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '15px'
    },
    authLink: {
      color: '#4b5563',
      textDecoration: 'none',
      padding: '8px 12px',
      borderRadius: '6px',
      transition: 'all 0.2s ease',
      fontWeight: '500'
    },
    divider: {
      color: '#d1d5db',
      margin: '0 4px'
    }
  };

  return (
    <section style={styles.topBarSection}>
      <div style={styles.companyTitle}>
        <Link to='/' style={styles.link}>
          <h2 style={styles.titleText}>Spice Route</h2>
        </Link>
      </div>
      
      <div style={styles.searchBar}>
        <input 
          type="text" 
          placeholder='Search...' 
          style={styles.searchInput}
          onFocus={(e) => {
            e.target.style.borderColor = '#dc2626';
            e.target.style.boxShadow = '0 0 0 3px rgba(220, 38, 38, 0.1)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#e5e7eb';
            e.target.style.boxShadow = 'none';
          }}
        />
      </div>
      
      <div style={styles.userAuth}>
        <Link 
          to="/login" 
          style={styles.authLink}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#f3f4f6';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
          }}
        >
          Login
        </Link>
        <span style={styles.divider}>/</span>
        <Link 
          to="/signup" 
          style={styles.authLink}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#f3f4f6';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
          }}
        >
          SignUp
        </Link>
      </div>
    </section>
  );
};

export default TopBar;