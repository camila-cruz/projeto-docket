import React from 'react';
// import './index.scss';

export default function Text({ tag, children }) {
  const TextTag = `${tag}`;
  
  return (
    <TextTag>
      {children}
    </TextTag>
  )
}
