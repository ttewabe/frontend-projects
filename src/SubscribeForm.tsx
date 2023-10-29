// src/SubscribeForm.tsx
import React from 'react';

interface SubscribeFormProps {
  title: string;
  subtitle: string;
}

const SubscribeForm: React.FC<SubscribeFormProps> = ({ title, subtitle }) => {
  return (
    <div className="subscribe-form">
      <h1>{title}</h1>
      <h4>{subtitle}</h4>
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <input type="email" placeholder="Email" />
      <button>Subscribe</button>
    </div>
  );
};

export default SubscribeForm;
