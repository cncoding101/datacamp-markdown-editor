import ReactMarkdown from 'react-markdown';
import TitleBar from '@components/molecules/title-bar';
import { useMarkdown } from '@providers/markdown-provider';
import './style.css';

const Preview = () => {
  const { markdown } = useMarkdown();

  return (
    <div className='preview'>
      <TitleBar title='Preview' />
      <div className='preview__scroll'>
        <ReactMarkdown className='markdown'>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Preview;
