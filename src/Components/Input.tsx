import React from 'react';

interface InputProps {
  className: string,
  type: string,
  name: string,
  placeholder?: string,
  value?: string,
  autocomplete?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const Input = ({
  type, name, placeholder, value, onChange, autocomplete, className,
}: InputProps) => (

  <input
    autoComplete={autocomplete}
    className={className}
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

export default Input;
