import '@styles/global.css';
import Layout from '@components/templates/layout';
import MarkdownProvider from 'providers/markdown-provider';

const App: React.FC = () => {
  return (
    <MarkdownProvider>
      <Layout></Layout>
    </MarkdownProvider>
  );
};

export default App;
