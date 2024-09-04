import React from 'react';
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react';

type MarkdownContextType = {
  markdown: string;
  setMarkdown: Dispatch<SetStateAction<string>>;
  words: number;
  setWords: Dispatch<SetStateAction<number>>;
  chars: number;
  setChars: Dispatch<SetStateAction<number>>;
};

const MarkdownContext = createContext<MarkdownContextType | null>(null);

interface IProps {
  children: ReactNode;
}

const MarkdownProvider: React.FC<IProps> = ({ children }) => {
  const [markdown, setMarkdown] = useState<string>(() => {
    const savedContent = localStorage.getItem('markdown');
    return savedContent || '';
  });
  const [words, setWords] = useState<number>(() => {
    const savedContent = Number(localStorage.getItem('words'));
    if (!savedContent || isNaN(savedContent)) return 0;
    return savedContent;
  });
  const [chars, setChars] = useState<number>(() => {
    const savedContent = Number(localStorage.getItem('chars'));
    if (!savedContent || isNaN(savedContent)) return 0;
    return savedContent;
  });

  useEffect(() => {
    // Save content to localStorage whenever it changes
    localStorage.setItem('markdown', markdown);
    localStorage.setItem('words', words.toString());
    localStorage.setItem('chars', chars.toString());
  }, [markdown, words, chars]);

  const providerValue = React.useMemo(
    () => ({
      markdown,
      setMarkdown,
      words,
      setWords,
      chars,
      setChars,
    }),
    [markdown, words, chars],
  );

  return <MarkdownContext.Provider value={providerValue}>{children}</MarkdownContext.Provider>;
};

export const useMarkdown = () => {
  const context = useContext(MarkdownContext);

  if (!context) {
    throw new Error('useMarkdown must be used within a MarkdownProvider');
  }

  return context;
};

export default MarkdownProvider;
