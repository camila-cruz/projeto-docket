import React from 'react';
import './index.scss';

export default function Container({ children }) {
  return (
    <div className="Container">
      {children}
    </div>
  )
}
