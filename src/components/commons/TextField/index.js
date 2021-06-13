import React from 'react';
import './index.scss';

export default function TextField({ type, placeholder, ...props }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="TextField"
      {...props}
    />
  )
}
