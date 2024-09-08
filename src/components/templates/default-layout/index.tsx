import Editor from '@components/organisms/editor';
import Preview from '@components/organisms/preview';

const Layout: React.FC = ({}) => {
  return (
    <main className='flex h-screen'>
      {/* Editor */}
      <section className='h-full w-1/2 p-4'>
        <Editor />
      </section>

      {/* Preview */}
      <section className='h-full w-1/2 p-4'>
        <Preview />
      </section>
    </main>
  );
};

export default Layout;
