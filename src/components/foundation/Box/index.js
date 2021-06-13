import React from 'react';
import './index.scss';

export default function Box({ children, className }) {
  return (
    <div className={`Box ${className}`}>
      {children}
    </div>
  )
}

export function BoxHeader({ children }) {
  return (
    <div className="BoxHeader">
      {children}
    </div>
  )
}

export function BoxFooter({ children }) {
  return (
    <div className="BoxFooter">
      {children}
    </div>
  )
}