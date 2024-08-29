import { useState, ChangeEvent } from 'react';
import TitleBar from '@components/molecules/title-bar';
import { useMarkdown } from 'providers/markdown-provider';
import './style.css';

const Editor: React.FC = () => {
  const [markdown, setMarkdown] = useMarkdown();
  const [words, setWords] = useState<number>(0);
  const [chars, setChars] = useState<number>(0);

  const getWordsCount = (str: string): number => {
    const matches = str.match(/(\w+)/g);
    return matches ? matches.length : 0;
  };

  const getCharsCount = (str: string): number => {
    return str.length;
  };

  const updateMarkdown = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    const value = event.target.value;

    setMarkdown(value);
    setWords(getWordsCount(value));
    setChars(getCharsCount(value));
  };

  return (
    <div className='editor__wrap'>
      <TitleBar title='Editor' aside={`${words} Words ${chars} Characters`} />
      <textarea className='editor' value={markdown} onChange={updateMarkdown} />
    </div>
  );
};

export default Editor;
