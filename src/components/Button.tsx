import { FC } from "react";
interface ButtonProps {
  children: any,
  onClick?: () => void,
  className?: string
}
const Button: FC<ButtonProps> = ({ children, onClick, className }: ButtonProps) => {
  return (
    <div className={`button ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
