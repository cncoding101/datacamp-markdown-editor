import Button from '@components/atoms/button';
import Icon from '@components/atoms/icon';
import Editor from '@components/organisms/editor';
import Preview from '@components/organisms/preview';
import { useMarkdown } from '@providers/markdown-provider';
import { useNavigate } from 'react-router-dom';

const EditorPage = () => {
  const { markdown } = useMarkdown();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/preview');
  };

  const downloadFile = () => {
    const link = document.createElement('a');
    const file = new Blob([markdown], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = `${new Date().toDateString()}.md`;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <main className='flex h-screen overflow-auto'>
      {/* Editor */}
      <section className='flex flex-1 flex-col'>
        <Editor />

        <Button variant='primary' onClick={downloadFile} className='m-4 w-1/2'>
          Download
          <Icon icon='download' type='md' className='m-2' />
        </Button>
      </section>

      {/* Preview */}
      <section className='flex flex-1 flex-col'>
        <Preview />

        <Button variant='primary' onClick={handleClick} className='m-4 w-1/2'>
          See preview
          <Icon icon='preview' type='fa' className='m-2' />
        </Button>
      </section>
    </main>
  );
};

export default EditorPage;
