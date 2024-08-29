import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react';

type MarkdownContextType = [string, Dispatch<SetStateAction<string>>];

const MarkdownContext = createContext<MarkdownContextType | null>(null);

interface IProps {
  children: ReactNode;
}

const MarkdownProvider: React.FC<IProps> = ({ children }) => {
  const [markdown, setMarkdown] = useState(() => {
    const savedContent = localStorage.getItem('markdownContent');
    return savedContent || '';
  });

  useEffect(() => {
    // Save content to localStorage whenever it changes
    localStorage.setItem('markdownContent', markdown);
  }, [markdown]);

  return <MarkdownContext.Provider value={[markdown, setMarkdown]}>{children}</MarkdownContext.Provider>;
};

export const useMarkdown = () => {
  const context = useContext(MarkdownContext);

  if (!context) {
    throw new Error('useMarkdown must be used within a MarkdownProvider');
  }

  return context;
};

export default MarkdownProvider;
