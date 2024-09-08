import { render, screen } from '@testing-library/react';
import Preview from '@components/organisms/preview';
import MarkdownProvider, { useMarkdown } from '@providers/markdown-provider';

vi.mock('@providers/markdown-provider', async (importOriginal) => {
  // Import the original module
  const mod = await importOriginal<typeof import('@providers/markdown-provider')>();
  return {
    ...mod,
    useMarkdown: vi.fn().mockReturnValue({
      markdown: '',
      setMarkdown: vi.fn(),
      words: 0,
      setWords: vi.fn(),
      chars: 0,
      setChars: vi.fn(),
    }),
  };
});

describe('Preview', () => {
  const renderComponent = () => {
    render(
      <MarkdownProvider>
        <Preview />
      </MarkdownProvider>,
    );
  };

  it('should display the translated markdown', async () => {
    const markdownContent = '## Sample Markdown\nThis is a sample markdown content.';
    vi.mocked(useMarkdown).mockReturnValue({
      markdown: markdownContent,
      setMarkdown: vi.fn(),
      words: 0,
      setWords: vi.fn(),
      chars: 0,
      setChars: vi.fn(),
    });

    renderComponent();

    expect(screen.getByText('Sample Markdown')).toBeInTheDocument;
    expect(screen.getByText('This is a sample markdown content.')).toBeInTheDocument();
  });
});
