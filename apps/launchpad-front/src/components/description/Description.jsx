import React from 'react';
import 'styles/root.css';

function Description() {
  return (
    <>
      <div className="py-5 mb-5 text-center">
        <span
          style={{
            background:
              'linear-gradient(96.51deg, var(--primary-rgb) 2.96%, var(--secondary-rgb) 55.12%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            fontFamily: 'Montserrat',
            fontWeight: 700,
            fontSize: '3rem',
          }}
        >
          The Next Level Project
        </span>
      </div>
    </>
  );
}

export default Description;
