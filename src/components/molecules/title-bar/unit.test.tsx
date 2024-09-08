import { render, screen } from '@testing-library/react';
import TitleBar from '@components/molecules/title-bar';

const title = 'hello world!';
const aside = 'this is a aside text';
describe('Title Bar', () => {
  it('should display the title', () => {
    render(<TitleBar title={title} />);

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('should display the aside', () => {
    render(<TitleBar title={title} aside={aside} />);

    expect(screen.getByText(aside)).toBeInTheDocument();
  });
});
