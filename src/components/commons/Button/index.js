import React from 'react';
import './index.scss';

export default function Button({ type, children }) {
  return (
    <button type={type} className="Button">
      {children}
    </button>
  )
}
