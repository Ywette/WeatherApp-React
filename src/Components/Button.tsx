interface ButtonProps {
  className: string,
  value?:string,
  type: 'submit'|'button',
}

const Button = ({
  className, value, type = 'button',
}: ButtonProps) => (
  <button
    className={className}
    type={type}
  >
    {value}
  </button>
);

export default Button;
