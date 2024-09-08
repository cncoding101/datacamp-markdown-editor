import { render, screen } from '@testing-library/react';
import Text from '@components/atoms/text';

const text = 'hello world!';
describe('Text', () => {
  it('should render h1 with variant main', () => {
    render(<Text variant='main'>{text}</Text>);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(text);
  });

  it('should render h2 with variant secondary', () => {
    render(<Text variant='secondary'>{text}</Text>);

    const heading = screen.getByRole('heading', { level: 2 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(text);
  });

  it('should render h3 with variant tertiary', () => {
    render(<Text variant='tertiary'>{text}</Text>);

    const heading = screen.getByRole('heading', { level: 3 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(text);
  });

  it('should render h4 with variant sub', () => {
    render(<Text variant='sub'>{text}</Text>);

    const heading = screen.getByRole('heading', { level: 4 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(text);
  });

  it('should render h5 with variant detail', () => {
    render(<Text variant='detail'>{text}</Text>);

    const heading = screen.getByRole('heading', { level: 5 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(text);
  });

  it('should render h1 with variant minor', () => {
    render(<Text variant='minor'>{text}</Text>);

    const heading = screen.getByRole('heading', { level: 6 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(text);
  });

  it('should render h1 with variant main', () => {
    render(<Text variant='main'>{text}</Text>);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(text);
  });
});
