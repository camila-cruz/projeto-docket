import React from 'react';
// import './index.scss';

export default function Text({ tag, children, ...props }) {
  const TextTag = `${tag}`;
  
  return (
    <TextTag {...props}>
      {children}
    </TextTag>
  )
}
