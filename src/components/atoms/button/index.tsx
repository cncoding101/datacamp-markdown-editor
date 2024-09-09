import type { ReactNode, MouseEvent } from 'react';
import '@components/atoms/button/style.css';

type Variant = keyof typeof BUTTON_TYPES;

const BUTTON_TYPES = {
  primary: 'primary',
} as const;

interface IProps {
  children: ReactNode;
  onClick?: (e: MouseEvent) => void;
  variant?: Variant;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<IProps> = ({ children, variant, onClick, className = '', disabled = false }) => {
  switch (variant) {
    case BUTTON_TYPES.primary:
      return (
        <button onClick={onClick} disabled={disabled} className={`btn ${className} ${disabled ? 'opacity-50' : ''}`}>
          {children}
        </button>
      );

    default:
      return (
        <button onClick={onClick} disabled={disabled} className={`${className} ${disabled ? 'opacity-50' : ''}`}>
          {children}
        </button>
      );
  }
};

export default Button;
