import React from 'react';
import './index.scss';

export default function Box({ children, className }) {
  return (
    <div className={`Box ${className}`}>
      {children}
    </div>
  )
}
