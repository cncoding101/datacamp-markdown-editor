import Editor from '@components/organisms/editor';
import Preview from '@components/organisms/preview';

interface IProps {
  //   editor: React.ComponentProps<typeof Editor>;
  //   preview: React.ComponentProps<typeof Preview>;
}

const Layout: React.FC<IProps> = ({}) => {
  return (
    <div className='flex h-screen flex-col overflow-x-hidden'>
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
    </div>
  );
};

export default Layout;
