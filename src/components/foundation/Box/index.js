import React from 'react';
import './index.scss';

export default function Box({ children }) {
  return (
    <div className="Box">
      {children}
    </div>
  )
}
