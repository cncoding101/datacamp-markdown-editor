import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Editor from '@components/organisms/editor';
import MarkdownProvider from '@providers/markdown-provider';

describe('Editor', () => {
  const renderComponent = () => {
    render(
      <MarkdownProvider>
        <Editor />
      </MarkdownProvider>,
    );
  };

  it('should update the textarea, words, and chars count on text change', async () => {
    renderComponent();

    const textarea = screen.getByRole('textbox');

    const inputText = 'Hello world!';
    await userEvent.type(textarea, inputText);

    expect(screen.getByText(/2 words/i)).toBeInTheDocument();
    expect(screen.getByText(/12 characters/i)).toBeInTheDocument();
  });
});
