import type { ReactNode } from 'react';
import './style.css';

type Variant = keyof typeof ELEMENTS;

interface IProps {
  variant: Variant;
  children: ReactNode | ReactNode[];
  className?: string;
}

const ELEMENTS = {
  main: 'h1',
  secondary: 'h2',
  tertiary: 'h3',
  sub: 'h4',
  detail: 'h5',
  minor: 'h6',
} as const;

const Text: React.FC<IProps> = ({ variant, children, className }) => {
  const Component = ELEMENTS[variant];

  return <Component className={className}>{children}</Component>;
};

export default Text;
