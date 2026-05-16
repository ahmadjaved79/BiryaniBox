import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0a0a',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif',
      color: '#fff',
      textAlign: 'center',
      padding: '24px',
    }}>
      <div style={{ fontSize: '80px', marginBottom: '16px' }}>🍛</div>

      <h1 style={{
        fontSize: '96px',
        fontWeight: '900',
        color: '#f97316',
        margin: '0',
        lineHeight: 1,
      }}>
        404
      </h1>

      <h2 style={{
        fontSize: '24px',
        fontWeight: '600',
        margin: '16px 0 8px',
        color: '#fff',
      }}>
        Page Not Found
      </h2>

      <p style={{
        color: '#888',
        fontSize: '15px',
        maxWidth: '360px',
        lineHeight: '1.6',
        marginBottom: '32px',
      }}>
        Looks like this page got lost in the kitchen. Let's get you back to the menu.
      </p>

      <button
        onClick={() => navigate('/')}
        style={{
          background: '#f97316',
          color: '#fff',
          border: 'none',
          borderRadius: '12px',
          padding: '14px 32px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'background 0.2s',
        }}
        onMouseOver={e => e.currentTarget.style.background = '#ea6c0a'}
        onMouseOut={e => e.currentTarget.style.background = '#f97316'}
      >
        Back to Home
      </button>
    </div>
  );
}